import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="w-full flex justify-evenly mt-4 flex-wrap overflow-y-auto hide-scrollbar">
      {videos.map((video, index) => {
        return <Link to={"/watch?v="+video.id}><VideoCard key={index} info={video} /></Link>;
      })}
    </div>
  );
};

export default VideoContainer;
