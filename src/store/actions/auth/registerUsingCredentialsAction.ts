
import { AUTH_SET_TOKENS } from "@/store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type AuthResponse = {
    token: string;
    refreshToken: string;
}

type RegisterFormData = {
    email: string;
    password: string;
}

export const registerUsingCredentialsAction = createAsyncThunk(
    
    "auth/registerUsingCredentials",

    async (_params: RegisterFormData,  { dispatch }) => {

        const { email, password } = _params;

        return new Promise<string | void>(async (resolve, reject) => {

            try {
                const { data } = await axios.post<AuthResponse>(
                    `${process.env.REACT_APP_API_URL}/authentification/signUp`,
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
    
            catch (error) {
                if (axios.isAxiosError(error)) 
                    return reject(error.response?.data.message);

                console.log(error)
                reject();
            }
        })
    }
);