import { AppDispatch } from "@/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import { refreshSpotifyToken } from "./refreshSpotifyToken";

export const fetchRecentlyPlayedTracks = createAsyncThunk<
  UsersRecentlyPlayedTracksResponse,
  void,
  { state: { user: { spotifyAccessToken: string } } }
>("spotify/fetchRecentlyPlayed", async (_, { rejectWithValue, getState, dispatch }) => {
  const { spotifyAccessToken } = getState().user;
  const appDispatch : AppDispatch = dispatch as AppDispatch;

  try {
    const { data } = await axios.get<UsersRecentlyPlayedTracksResponse>(
      "https://api.spotify.com/v1/me/player/recently-played",
      { headers: { Authorization: `Bearer ${spotifyAccessToken}` } }
    );

    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.data) {
        let parsedError : ErrorObject = error.response?.data.error as ErrorObject;

        if (parsedError.status === 401) {
            appDispatch(refreshSpotifyToken());
        }

        return rejectWithValue(error.response?.data.error as ErrorObject);
      }


      return rejectWithValue({ status: 500, message: "Server Error!"} as ErrorObject)
    }
    return rejectWithValue({ status: 500, message: "Unknown Error" });
  }
});
