import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        <div className="flex flex-wrap">
            {videos.map(video =>
                <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>) }
        </div>
    );
}

export default VideoContainer;
