import axios from "axios";

const chunk = <T>(arr: T[], size: number): T[][] =>
  [...Array(Math.ceil(arr.length / size))].map((_, i) =>
    arr.slice(size * i, size + size * i)
  );

const featuringArtist = (
  artists: ArtistObjectSimplified[],
  artistName: string
) => {
    return artists.filter(artist => artist.name.toLowerCase() === artistName.toLowerCase()).length > 0;
};

export class SpotifySavedService {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async exploreArtistDiscography(
    artistName: string | undefined
  ): Promise<TrackObjectSimplified[]> {
    let headers = {
      Authorization: `Bearer ${this.accessToken}`,
    };

    return new Promise(async (resolve, reject) => {
      let position: number = 0;
      let hasNext: boolean = true;
      let tracks: TrackObjectSimplified[] = [];

      while (hasNext === true) {
        let params = {
          q: `artist:${artistName}`,
          type: "track",
          offset: position,
          limit: 50,
        };

        try {
          const { data } = await axios.get<TrackSearchResponse>(
            "https://api.spotify.com/v1/search",
            {
              headers,
              params,
            }
          );

          hasNext = data.tracks.next !== null;
          tracks = [...tracks, ...data.tracks.items];
          position = position + 50;
        } catch (error) {
            hasNext = false;
        }
      }

      resolve(tracks.filter((track) => featuringArtist(track.artists, artistName!)));
    });
  }

  async filterizeUsingSavedSongs(
    tracks: TrackObjectSimplified[]
  ): Promise<TrackObjectSimplified[]> {
    let filterizedTracks: TrackObjectSimplified[] = [];

    return filterizedTracks;
  }



  async checkSavedSongs(
    tracks: TrackObjectSimplified[]
  ): Promise<TrackObjectSimplified[]> {

    let headers = {
        Authorization: `Bearer ${this.accessToken}`,
    };

    let tracksBash: TrackObjectSimplified[][] = [];
    let savedTracks: TrackObjectSimplified[] = [];

    tracksBash = chunk(tracks, 50)

    let tasks: Promise<TrackObjectSimplified[]>[] = [];

    tracksBash.forEach(_tracks => () => { tasks.push(this.filterizeUsingSavedSongs(_tracks)) });

    console.log(tasks)

    

    return tracks;
  }

  async usingArtist(
    artistName: string | undefined
  ): Promise<TrackObjectSimplified[]> {
    let tracks: TrackObjectSimplified[] = await this.exploreArtistDiscography(artistName);

    if (!tracks) {
        return Promise.reject();
    }

    return this.checkSavedSongs(tracks);
  }

  async usingAlbum(
    id: string | undefined
  ): Promise<TrackObjectSimplified | TrackObjectFull> {
    return new Promise((resolve, reject) => {
      reject("sl");
    });
  }
}
