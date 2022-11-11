import { AUTH_SET_TOKEN, AUTH_SET_USER } from "@/store/types";
import { AuthState } from "@/types/type";

const initialState : AuthState = {
    loggedIn: false,
    accessToken: null,
    refreshToken: null,
    user: null
};

export default function authReducer(state: AuthState = initialState, action: any) {

    const { type, payload } = action;

    switch (type) {
        case AUTH_SET_TOKEN:
            return {
                ...state,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken
            };

        case AUTH_SET_USER:
            return {
                ...state,
                user: payload.user,
                loggedIn: true
            };
            
        default:
            return state;
    }
}