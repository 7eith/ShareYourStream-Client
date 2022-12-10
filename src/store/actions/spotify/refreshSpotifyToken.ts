import { USER_UPDATE_SPOTIFY_TOKEN } from "@/store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const refreshSpotifyToken = createAsyncThunk<
  void,
  void,
  { state: { auth: { accessToken: string } } }
>("spotify/refreshSpotifyToken", async (_, { rejectWithValue, getState, dispatch }) => {
  const { accessToken } = getState().auth;

  try {
    const { data } = await axios.post<any>(
      `${process.env.REACT_APP_API_URL}/profile/spotify/refreshToken`,
	  {}, 
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    console.log(data);
	dispatch({ type: USER_UPDATE_SPOTIFY_TOKEN, payload: { spotifyAccessToken: data.access_token }})

    return ;
  } catch (error) {
    if (isAxiosError(error)) {
      const { response } = error;

      return rejectWithValue(response?.data.error as ErrorObject);
    }
    return rejectWithValue({ status: 500, message: "Unknown Error" });
  }
});
