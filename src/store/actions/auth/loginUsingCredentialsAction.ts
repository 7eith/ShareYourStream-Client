
import { AUTH_SET_TOKENS } from "@/store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type AuthResponse = {
    token: string;
    refreshToken: string;
}

type LoginFormData = {
    email: string;
    password: string;
}

export const loginUsingCredentialsAction = createAsyncThunk(
    
    "auth/loginUsingCredentials",

    async (_params: LoginFormData,  { dispatch }) => {

        const { email, password } = _params;

        return new Promise<string | void>(async (resolve, reject) => {

            try {
                const { data } = await axios.post<AuthResponse>(
                    `${process.env.REACT_APP_API_URL}/authentification/signIn`,
                    { 
                        email: email,
                        password: password
                    }
                )
        
                dispatch({ type: AUTH_SET_TOKENS, payload: {
                    accessToken: data.token,
                    refreshToken: data.refreshToken
                }})
    
                resolve();
            }
    
            catch (error) { // TODO: notification for global instance 
                if (axios.isAxiosError(error)) 
                    return reject(error.response?.data.message);

                console.log(error)
                reject();
            }
        })
    }
);