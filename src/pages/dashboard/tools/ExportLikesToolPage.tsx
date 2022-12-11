import { useSelector } from "react-redux";
import { RootState } from "@/index";
import SpotifyLinkedMiddleware from "@/components/dashboard/middlewares/SpotifyLinkedMiddleware";

const ExportLikesToolPage = () => {

    const { spotifyId  } = useSelector((state: RootState) => state.user);

    return (
        spotifyId ? (
            <div className="exportLikeToolPage">
                Export it 
            </div>
        ) : (
            <SpotifyLinkedMiddleware />
        )
    )
}

export default ExportLikesToolPage;