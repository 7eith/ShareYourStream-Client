import { CSSProperties } from "react";
import { useImageOnLoad } from "usehooks-ts";

type LazyLoadedProps = {
    url: string | undefined;
    width: number;
    height: number;
    backgroundColor: string | undefined;
}

const LazyLoadedImage: React.FC<LazyLoadedProps> = ({ url, width, height, backgroundColor }) => {

    const { handleImageOnLoad, css } = useImageOnLoad()

    const style: { [key: string]: CSSProperties } = {
        wrap: {
            position: 'relative',
            width: width,
            height: height,
            margin: 'auto',
        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            backgroundColor: backgroundColor
        },
    }


    return (
        <div style={style.wrap}>
            <div
                style={{ ...style.image, ...(css.thumbnail as CSSProperties) }}
            />
            <img
                onLoad={handleImageOnLoad}
                style={{ ...style.image, ...(css.fullSize as CSSProperties) }}
                src={url}
                alt="fullImage"
            />
        </div>
    )
}

export default LazyLoadedImage;