const VideoCard = ({ info }) => {
    console.log(info);
    // Destructure 'snippet' and 'statistics' from the 'info' object
    const { snippet, statistics } = info;

    // Destructure 'channelTitle', 'title', and 'thumbnails' from the 'snippet' object
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div>
            {/* Fix interpolation syntax in the 'src' attribute */}
            <img src={thumbnails.medium.url} alt="thumbnails" />
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                {/* Access 'viewCount' property from the 'statistics' object */}
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    );
};

export default VideoCard;
