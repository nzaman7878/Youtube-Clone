import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    return (
        <div>
            {videos.length > 0 && <VideoCard info={videos[0]} />}
        </div>
    );
}

export default VideoContainer;
