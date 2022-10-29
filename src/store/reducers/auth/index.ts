
const initialState : AuthState = {
    loggedIn: false,
    accessToken: null,
    refreshToken: null,
    user: null
};

export default function authReducer(state: AuthState = initialState, action: any) {

    const { type, payload } = action;

    switch (type) {

        default:
            return state;
    }
}