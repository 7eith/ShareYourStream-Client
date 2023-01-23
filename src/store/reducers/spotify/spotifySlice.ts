import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/index";
import { fetchRecentlyPlayedTracks } from "@/store/actions/spotify/fetchRecentlyPlayedTracks";
import { refreshSpotifyToken } from "@/store/actions/spotify/refreshSpotifyToken";
import { fetchUserStreamingCharts, UserSpotifyTopDuration, UserSpotifyTopType, UserStreamingChartsResponse } from "@/store/actions/spotify/fetchUserStreamingCharts";

type RequestState = "pending" | "fulfilled" | "rejected" | "waiting";
type SpotifyTimeRange = "short" | "medium" | "long";

export const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    statusByName: {} as Record<string, RequestState | undefined>,
    recentlyPlayed: {} as UsersRecentlyPlayedTracksResponse,
    streamingCharts: {} as Record<UserSpotifyTopType, Record<UserSpotifyTopDuration, UserStreamingChartsResponse>>
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchRecentlyPlayedTracks.pending, (state) => {
      state.statusByName['recentlyPlayed'] = "pending";
    });

    builder.addCase(fetchRecentlyPlayedTracks.fulfilled, (state, action) => {
      state.statusByName['recentlyPlayed'] = "fulfilled";
      state.recentlyPlayed = action.payload;
    });

    builder.addCase(fetchRecentlyPlayedTracks.rejected, (state, action) => {
      let decryptedPayload: ErrorObject = action.payload as ErrorObject;
      
      if (decryptedPayload && decryptedPayload.status === 401) {
        state.statusByName['recentlyPlayed'] = "waiting";
      } else {
        state.statusByName['recentlyPlayed'] = "rejected";
      }
    });

    /**
     * @StreamingCharts
     */

    builder.addCase(fetchUserStreamingCharts.pending, (state) => {
      state.statusByName['streamingCharts'] = "pending";
    });

    builder.addCase(fetchUserStreamingCharts.fulfilled, (state, action) => {
      state.statusByName['streamingCharts'] = "  ";

      state.streamingCharts[action.payload.payload.type][action.payload.payload.duration] = action.payload
    });

    builder.addCase(fetchUserStreamingCharts.rejected, (state, action) => {
      let decryptedPayload: ErrorObject = action.payload as ErrorObject;
      
      if (decryptedPayload && decryptedPayload.status === 401) {
        state.statusByName['streamingCharts'] = "waiting";
      } else {
        state.statusByName['streamingCharts'] = "rejected";
      }
    });
    

    builder.addCase(refreshSpotifyToken.fulfilled, (state) => {
      let queue: Array<RequestState> = Object.keys(state.statusByName) as Array<RequestState>;
      queue = queue.filter(key => state.statusByName[key] === "waiting");

      queue.forEach(key => {
        state.statusByName[key] = undefined;
      });
    })
  }
});

// export const selectStatusByName = (state: RootState, type: string) => state.spotify.statusByName[name];

export const selectStatusByName = (state: RootState, name: string) => state.spotify.statusByName[name];
export const selectRecentlyPlayed = (state: RootState) => state.spotify.recentlyPlayed;
