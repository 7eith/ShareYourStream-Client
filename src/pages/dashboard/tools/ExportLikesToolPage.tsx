import { useSelector } from "react-redux";
import { RootState } from "@/index";

const ExportLikesToolPage = () => {

    const { spotifyAccessToken, spotifyId  } = useSelector((state: RootState) => state.user);

    return (
        <div className="exportLikeToolPage">
            Export it 
        </div>
    )
}

export default ExportLikesToolPage;