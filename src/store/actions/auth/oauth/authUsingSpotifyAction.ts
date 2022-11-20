
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AUTH_SET_TOKENS } from "@/store/types";
import { AuthResponse } from "@/types/type";

export const authUsingSpotifyAction = createAsyncThunk(

    "auth/usingSpotify",

    async (_code: string, { dispatch }) => {

        return new Promise<string | void>(async (resolve, reject) => {

            try {
                const { data } = await axios.post<AuthResponse>(
                    `${process.env.REACT_APP_API_URL}/authentification/spotify`,
                    { code: _code }
                )
        
                dispatch({ type: AUTH_SET_TOKENS, payload: {
                    accessToken: data.token,
                    refreshToken: data.refresh_token
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