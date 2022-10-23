/// <reference types="react-scripts" />


type AuthState = {
    loggedIn: boolean,
    accessToken: string | null;
    refreshToken: string | null;
    user: any;
};

type AuthAction = {
    type: string;
    payload: any;
};

type DispatchType = (args: AuthAction) => AuthAction;
