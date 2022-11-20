import { AUTH_SET_TOKENS, USER_LOGOUT } from "@/store/types";
import { AuthState } from "@/types/type";

const initialState : AuthState = {
    accessToken: null,
    refreshToken: null
};

export default function authReducer(state: AuthState = initialState, action: any) {

    const { type, payload } = action;

    switch (type) {
        case AUTH_SET_TOKENS:
            return {
                ...state,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken
            };
        
        case USER_LOGOUT:
            return initialState;

        default:
            return state;
    }
}