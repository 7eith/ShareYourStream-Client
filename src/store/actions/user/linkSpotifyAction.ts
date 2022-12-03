
import { USER_SET_PROFILE } from "@/store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const linkSpotifyAction = createAsyncThunk<Promise<void>, string, { state: { auth: { accessToken: string, refreshToken: string }}}>
    (
    
    "user/linkSpotify",

    async (code: string, { dispatch, getState }) : Promise<any> => {

        const { accessToken, refreshToken } = getState().auth;

        return new Promise<void>(async (resolve, reject) => {

            try {
                const { data } = await axios.post<any>(
                    `${process.env.REACT_APP_API_URL}/profile/spotify/link`,
                    { code: code },
                    { headers: { "Authorization": `Bearer ${accessToken}` }}
                )

                dispatch({ type: USER_SET_PROFILE, payload: data })

                if (!localStorage.getItem('token')) {
                    localStorage.setItem('token', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                }
    
                resolve();
            }
    
            catch (error) {
                if (axios.isAxiosError(error)) 
                    return reject(error.response?.data.message);

                console.log(error)
                reject();
            }
        })
    }
);