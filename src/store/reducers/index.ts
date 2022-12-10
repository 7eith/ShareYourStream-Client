import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import { spotifySlice } from "./spotify/spotifySlice";

export default combineReducers({ auth, user, spotify: spotifySlice.reducer });
