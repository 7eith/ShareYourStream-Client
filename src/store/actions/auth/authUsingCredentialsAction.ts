
import { AUTH_SET_TOKEN } from "@/store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type AuthResponse = {
    token: string;
    refreshToken: string;
}

export const authUsingCredentialsAction = createAsyncThunk(
    
    "auth/usingCredentials",

    async (_email: string,  { dispatch }) => {

        return new Promise<string | void>(async (resolve, reject) => {

            try {
                const { data } = await axios.post<AuthResponse>(
                    'http://localhost:8000/authentification/spotify',
                    { code: "_code" }
                )
        
                dispatch({ type: AUTH_SET_TOKEN, payload: {
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