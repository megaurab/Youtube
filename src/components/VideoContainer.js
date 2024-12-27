import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

// const keu = process.env.GOOGLE_API_KEY;

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  // const apikey  = process.env.REACT_APP_GOOGLE_API_KEY
  // console.log(apikey);

  useEffect(() => {
    getVideos();
  }, []);

  console.log(YOUTUBE_VIDEO_API);

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await videos.json();
    console.log(jsonData.items);
    setVideos(jsonData.items);
  };

  return (
    // <VideoCard info={videos[0]}/>
    <div className="w-full h-40 flex justify-evenly mt-4">
      {videos.map((video, index) => {
        return <VideoCard key={index} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
