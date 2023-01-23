import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/index";
import { fetchRecentlyPlayedTracks } from "@/store/actions/spotify/fetchRecentlyPlayedTracks";
import {
  selectStatusByName,
  selectRecentlyPlayed,
} from "@/store/reducers/spotify/spotifySlice";
import { fetchUserStreamingCharts, UserSpotifyTopDuration, UserSpotifyTopType } from "@/store/actions/spotify/fetchUserStreamingCharts";

export function useUserStreamingCharts(type: UserSpotifyTopType, duration: UserSpotifyTopDuration) {
  const dispatch: AppDispatch = useDispatch();

  const reload = () => {
    dispatch(fetchUserStreamingCharts({ type, duration }));
  }

  const _canExecute = useSelector((state: RootState) =>
    state.user.spotifyAccessToken != null
  );

  const status = useSelector((state: RootState) =>
    selectStatusByName(state, "streamingCharts")
  );

  const recentlyPlayedTracks = useSelector((state: RootState) =>
    selectRecentlyPlayed(state)
  );

  useEffect(() => {
    if (status === undefined && _canExecute) {
      dispatch(fetchRecentlyPlayedTracks());
    }
  }, [status, dispatch, _canExecute]);

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined || status === "waiting";
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return { recentlyPlayedTracks, reload, isUninitialized, isLoading, isError, isSuccess };
}
