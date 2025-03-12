import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API} from "../utils/constants";
// import VideoCard from "./VideoCard";
import { addVideos } from "../utils/videoSlice";
import { Link } from "react-router-dom";
import WatchPageUI  from "./WatchPageUI";
import { GOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [most, setMost] = useState([]);
  const [videoe, setVideoe] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
    getChannelData();
  }, []);

  const channelId = videoe?.[0]?.snippet?.channelId;
  console.log(channelId);

   const getVideos = async () => {
      const videos = await fetch(YOUTUBE_VIDEO_API);
      const videoData = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=${GOGLE_API_KEY}`)
      const jsonData = await videos.json();
      const videoDetails = await videoData.json();
      setMost(jsonData.items);
      setVideoe(videoDetails.items);
      // console.log(jsonData.items);
      // console.log(videoDetails);
      dispatch(addVideos(jsonData.items));
  
    };
    
    const getChannelData = async () =>{
      const channelDa = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOGLE_API_KEY}`);
      // const channelDa = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCSiDGb0MnHFGjs4E2WKvShw&key=AIzaSyDTB0jueGWrlkntpuHrr8CtKHKdg1mJHvs`)
      const jsonData = await channelDa.json();
      console.log(jsonData.items);
    }

  

  return (
    <div className="flex overflow-hidden pl-20 pt-5">
      <div>
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
      <div className="flex w-full font-bold pt-4 justify-start ">
         <h1 className="text-xl">{videoe?.[0].snippet?.title}</h1>
      </div>
      </div>
      <div className="flex-1 ml-10 h-screen overflow-y-scroll hide-scrollbar">
        {most.map((video, index)=>{
          return <Link key={index} to={"/watch?v="+video.id}><WatchPageUI info={video}/></Link>
        })}
        
      </div>
    </div>
  );
};

export default WatchPage;
