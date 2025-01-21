import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await videos.json();
    setVideos(jsonData.items);
  };

  return (
    <div className="w-full flex justify-evenly mt-4 flex-wrap overflow-y-auto">
      {videos.map((video, index) => {
        return <VideoCard key={index} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
