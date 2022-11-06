
import { AppDispatch, RootState } from "@/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authUsingSpotifyAction = createAsyncThunk(
    // The first argument is the action name:
    "auth/usingSpotify",

    async (code: string) => {
        console.log(`code=${code}`)

        
    }
);