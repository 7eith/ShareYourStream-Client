const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class SpotifyUserTopAPI {

    public async getUserTopArtists() : Promise<any>  {

        console.log('hello')

        await sleep(5000);

        console.log('ld')

        return "yes"
    }
}