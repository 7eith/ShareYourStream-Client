
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AUTH_SET_TOKENS } from "@/store/types";

type AuthResponse = {
    token: string;
    refreshToken: string;
}

export const authUsingDiscordAction = createAsyncThunk(

    "auth/usingDiscord",

    async (_code: string, { dispatch }) => {

        return new Promise<string | void>(async (resolve, reject) => {

            try {
                const { data } = await axios.post<AuthResponse>(
                    `${process.env.REACT_APP_API_URL}/authentification/discord`,
                    { code: _code }
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