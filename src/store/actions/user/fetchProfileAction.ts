
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfileAction = createAsyncThunk<Promise<void>, void, { state: { auth: { accessToken: string }}}>
    (
    
    "user/fetchProfile",

    async (_: void, { dispatch, getState }) : Promise<any> => {

        const { accessToken } = getState().auth;
        console.log(accessToken)
        // dispatch({ type: AUTH_SET_USER, payload: { user: { email: "me@seith.com"}}})
        // return Promise.resolve(true);

        return new Promise<void>(async (resolve, reject) => {

            try {
                const { data } = await axios.get<any>(
                    `${process.env.REACT_APP_API_URL}/profile/me`,
                    { headers: { "Authorization": `Bearer ${accessToken}` }}
                )

                console.log(data)
        
                // dispatch({ type: AUTH_SET_TOKEN, payload: {
                //     accessToken: data.token,
                //     refreshToken: data.refreshToken
                // }})
    
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