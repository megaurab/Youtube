import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API} from "../utils/constants";
import VideoCard from "./VideoCard";
import { addVideos } from "../utils/videoSlice";
import { Link } from "react-router-dom";
import WatchPageUI  from "./WatchPageUI";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [most, setMost] = useState([]);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, []);

   const getVideos = async () => {
      const videos = await fetch(YOUTUBE_VIDEO_API);
      const jsonData = await videos.json();
      setMost(jsonData.items);
      // console.log(jsonData.items);
      dispatch(addVideos(jsonData.items));
  
    };
    

  

  return (
    <div className="flex overflow-hidden pl-20 pt-5">
      <iframe
        className="rounded-2xl"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
        }}
        width="840"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex-1">
        {most.map((video, index)=>{
          return <Link key={index} to={"/watch?v="+video.id}><WatchPageUI info={video}/></Link>
        })}
        
      </div>
    </div>
  );
};

export default WatchPage;
