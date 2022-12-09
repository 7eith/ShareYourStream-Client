import store from "@/store";
import { USER_UPDATE_SPOTIFY_TOKEN } from "@/store/types";
import axios, { isAxiosError } from "axios";

export interface IListenHistoryResponse {
    cursors?: {
        after: string;
        before: string;
    },
    href?: string;
    items?: [{
        context: any | null;
        played_at: Date;
        track: any;
    }],
    limit?: number;
    next?: string;
}

export class SpotifyAPIService {

    private spotifyAccessToken: string;
    private accessToken: string;

    constructor() {
        this.spotifyAccessToken = store.getState().user.spotifyAccessToken;

        console.log(this.spotifyAccessToken)

        // this.spotifyAccessToken = "NMSO";
        this.accessToken = store.getState().auth.accessToken;
    }

    private executeSpotifyRequest<R = any>(_url: string) : Promise<R> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await axios.get<R>(
                    _url,
                    { headers: { "Authorization": `Bearer ${store.getState().user.spotifyAccessToken}` }}
                )
                
                console.log(data)
                return resolve(data);
            } catch (error) {
                if (isAxiosError(error)) {
                    const { response } = error;

                    return reject(response?.data.error as ErrorObject)
                }
                return reject()
            }
        })
    }

    private refreshSpotifyToken() : Promise<void> {
        return new Promise(async (resolve, reject) => {

            try {
                const { data } = await axios.post<any>(
                    `${process.env.REACT_APP_API_URL}/profile/spotify/refreshToken`,
                    {},
                    { headers: { "Authorization": `Bearer ${this.accessToken}` }}
                )
                
                console.log(data)
                store.dispatch({ type: USER_UPDATE_SPOTIFY_TOKEN, payload: { spotifyAccessToken: data.access_token }})
                return resolve();
            } catch (error) {
                if (isAxiosError(error)) {
                    const { response } = error;

                    if (response?.status === 401) {
                        console.log('TODO: refresh token here')
                    }

                    return reject(response?.data.error as ErrorObject)
                }
                console.log(error)
                return reject()
            }
        })
    }

    public async getListenHistory() : Promise<any> {

        try {
            const listenHistory = await this.executeSpotifyRequest<UsersRecentlyPlayedTracksResponse>("https://api.spotify.com/v1/me/player/recently-played");

            return listenHistory;
        } catch (error: any) {
            console.log(error)

            if (error.status == 401) {
                await this.refreshSpotifyToken();

                console.log('giving')
                return await this.executeSpotifyRequest<UsersRecentlyPlayedTracksResponse>("https://api.spotify.com/v1/me/player/recently-played");
            }

            return Promise.reject(error);
        }
        // const fetchListenHistory = new Promise(async (resolve, reject) => {

        //     try {
        //         const { data } = await axios.get<UsersRecentlyPlayedTracksResponse>(
        //             `https://api.spotify.com/v1/me/player/recently-played`,
        //             { headers: { "Authorization": `Bearer BQCRNDmc4Vvb6vN0AIHw3NP551xJVXNT47YaWyWwHyAJZKc-UHQS4TDzGDHf89yblr7TLEqzkBoujMBz3ZY6fErxTInyEEheVqfz0OSFDd55zKpke8gmnMNEASxk3uNKIfwltiV4DjympQzKRWTBKvuHoWRKBtkpw17OW6Y5JWL8UsTwbnJzAPMJ_OsXOOYs_7ZoVtzi5M5pJu-Fwz7Sl4-bov_cCw` }}
        //             // { headers: { "Authorization": `Bearer ${this.accessToken}` }}
        //             //
        //         )
                
        //         console.log(data)
        //         return resolve(data);
        //     } catch (error) {
        //         if (isAxiosError(error)) {
        //             const { response } = error;

        //             if (response?.status === 401) {
        //                 this.refreshSpotifyToken()
        //                 console.log('TODO: refresh token here')
        //             }

        //             return reject(response?.data.error as ErrorObject)
        //         }
        //         console.log(error)
        //         return reject({
        //             status: 500,
        //             message: "Unknow Error!"
        //         })
        //     }
        // })

        // try {
        //     const result = await fetchListenHistory;

        //     return result;
        // } catch (error) {
        //     this.refreshSpotifyToken();
        //     console.log('executing req')
            
        //     return Promise.reject();
        // }
    }
}