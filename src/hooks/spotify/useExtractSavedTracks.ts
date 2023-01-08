import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/index";

import { ExportSavedContext } from "@/pages/dashboard/tools/exportSaved/ExportSavedContext";
import { ExportSavedContextType } from "@/types/contexts.type";
import { SpotifySavedService } from "./SpotifySavedService";

export function useExtractSavedTracks() {
	const { selectedResult, searchType, computingState, savedTracks, updateSavedTracks, updateComputingState } = useContext(ExportSavedContext) as ExportSavedContextType;

	const dispatch: AppDispatch = useDispatch();

	const status = computingState;

	const spotifyAccessToken = useSelector((state: RootState) =>
    	state.user.spotifyAccessToken
  	);

	const SpotifyService = new SpotifySavedService(spotifyAccessToken);

	useEffect(() => {
		if (status === undefined) {
			updateComputingState("pending");
		
			let resourceTracks : TrackObjectSimplified[] = [];

			if (searchType === "artist") {
				SpotifyService.usingArtist(selectedResult?.text)
				.then((resolvedTracks) => {
					resourceTracks = resolvedTracks;
					updateComputingState("computing")
					updateSavedTracks(resourceTracks)
				})
				.catch((err) => {
					console.log(err)
					updateComputingState("rejected")
				})
			}

			console.log(resourceTracks)
		}
	}, [status, dispatch]);

	useEffect(() => {
		console.log(`changed computingState=${computingState}`)

		if (computingState === "computing") {
			console.log('computing...')
			
		}
	}, [computingState])

	const isUninitialized = status === undefined;
	const isLoading = status === "pending" || status === undefined;
	const isComputing = status === "computing";
	const isError = status === "rejected";
	const isSuccess = status === "fulfilled";

	return {
		savedTracks,
		isUninitialized,
		isLoading,
		isComputing,
		isError,
		isSuccess,
	};
}
