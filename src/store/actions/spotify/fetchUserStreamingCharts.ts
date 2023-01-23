import { AppDispatch } from "@/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import { refreshSpotifyToken } from "./refreshSpotifyToken";

export type IPageParams = {
    type: UserSpotifyTopType;
    duration: UserSpotifyTopDuration;
}

export type UserSpotifyTopType = "artists" | "tracks";
export type UserSpotifyTopDuration = "short_term" | "medium_term" | "long_term";

export type UserStreamingChartsResponse = {
    response: UsersTopArtistsResponse | UsersTopTracksResponse,
    payload: IPageParams
}

export const fetchUserStreamingCharts = createAsyncThunk<
    UserStreamingChartsResponse,
    IPageParams,
    { state: { user: { spotifyAccessToken: string } } }
>(
  "spotify/fetchUserStreamingCharts",
  async (_params: IPageParams, { rejectWithValue, getState, dispatch }) => {
    const { spotifyAccessToken } = getState().user;
    const appDispatch: AppDispatch = dispatch as AppDispatch;

    try {
      const { data } = await axios.get<
        UsersTopArtistsResponse | UsersTopTracksResponse
      >(`https://api.spotify.com/v1/me/top/${_params.type}s`, {
        params: {
            time_range: `${_params.duration}_term`
        },
        headers: { Authorization: `Bearer ${spotifyAccessToken}` },
      });

      console.log(data);
      return {
        payload: _params,
        response: data
      };
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data) {
          let parsedError: ErrorObject = error.response?.data
            .error as ErrorObject;

          if (parsedError.status === 401) {
            appDispatch(refreshSpotifyToken());
          }

          return rejectWithValue(error.response?.data.error as ErrorObject);
        }

        return rejectWithValue({
          status: 500,
          message: "Server Error!",
        } as ErrorObject);
      }
      return rejectWithValue({ status: 500, message: "Unknown Error" });
    }
  }
);
