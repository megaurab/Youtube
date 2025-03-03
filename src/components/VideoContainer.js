import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {

  const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await videos.json();
    setVideos(jsonData.items);
    // console.log(jsonData.items);
    dispatch(addVideos(jsonData.items));

  };

  return (
    <div className="w-full flex justify-evenly mt-4 flex-wrap overflow-y-auto hide-scrollbar">
      {videos.map((video, index) => {
        return <Link key={index} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link>;
      })}
    </div>
  );
};

export default VideoContainer;
