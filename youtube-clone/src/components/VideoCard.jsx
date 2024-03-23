const VideoCard = ({ info }) => {
    console.log(info);
    // Destructure 'snippet' and 'statistics' from the 'info' object
    const { snippet, statistics } = info;

    // Destructure 'channelTitle', 'title', and 'thumbnails' from the 'snippet' object
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            {/* Fix interpolation syntax in the 'src' attribute */}
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails" />
            <ul>
                <li className="font-bold py-2"> {title}</li>
                <li>{channelTitle}</li>
                {/* Access 'viewCount' property from the 'statistics' object */}
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
