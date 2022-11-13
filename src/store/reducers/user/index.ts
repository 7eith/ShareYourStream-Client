import { USER_SET_PROFILE } from "@/store/types";
import { UserState } from "@/types/type";

const initialState : UserState = {
    loggedIn: false,
    email: null
};

export default function userReducer(state: UserState = initialState, action: any) {

    const { type, payload } = action;

    switch (type) {

        case USER_SET_PROFILE:
            return {
                ...state,
                loggedIn: true,
                email: payload.email
            }

        default:
            return state;
    }
}