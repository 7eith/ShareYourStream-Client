import { USER_LOGOUT, USER_SET_PROFILE, USER_UPDATE_SPOTIFY_TOKEN } from "@/store/types";
import { UserState } from "@/types/type";

const initialState : UserState = {
    loggedIn: false,
    id: null,
    username: null,
    email: null,
    discordId: null,
    discordAccessToken: null,
    discordScopes: null,
    spotifyId: null,
    spotifyAccessToken: null,
    spotifyScopes: null,
    createdAt: null,
};

export default function userReducer(state: UserState = initialState, action: any) {

    const { type, payload } = action;

    switch (type) {

        case USER_SET_PROFILE:
            return {
                ...state,
                loggedIn: true,
                id: payload.id,
                email: payload?.email,
                username: payload?.username,
                discordId: payload?.discordId,
                discordAccessToken: payload?.discordAccessToken,
                discordScopes: payload?.discordScopes,
                spotifyId: payload?.spotifyId,
                spotifyAccessToken: payload?.spotifyAccessToken,
                spotifyScopes: payload?.spotifyScopes,
                createdAt: payload.createdAt
            }

        case USER_UPDATE_SPOTIFY_TOKEN: 
            return {
                ...state,
                spotifyAccessToken: payload?.spotifyAccessToken
            };
            
        case USER_LOGOUT:
            return initialState;
            
        default:
            return state;
    }
}