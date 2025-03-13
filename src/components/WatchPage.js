import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { addVideos } from "../utils/videoSlice";
import { Link } from "react-router-dom";
import WatchPageUI from "./WatchPageUI";
import { GOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [most, setMost] = useState([]);
  const [videoe, setVideoe] = useState([]);
  const [channelData, setChannelData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, []);

  useEffect(() => {
    if (videoe.length > 0) {
      getChannelData();
    }
  }, [videoe]); // Run when videoe is updated

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const videoData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
        "v"
      )}&key=${GOGLE_API_KEY}`
    );
    const jsonData = await videos.json();
    const videoDetails = await videoData.json();
    setMost(jsonData.items);
    setVideoe(videoDetails.items);
    dispatch(addVideos(jsonData.items));
  };

  const getChannelData = async () => {
    const channelId = videoe?.[0]?.snippet?.channelId;
    if (!channelId) return; // Prevent API call if channelId is not available

    const channelDa = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOGLE_API_KEY}`
    );
    const jsonDataa = await channelDa.json();
    setChannelData(jsonDataa.items);
    console.log(jsonDataa.items);
  };

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
        <div className="flex flex-col w-full font-bold pt-4 justify-start ">
          <h1 className="text-xl">{videoe?.[0]?.snippet?.title}</h1>
          <div>
            <img src=""/>
            <p>{videoe[0].snippet.channelTitle}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-10 h-screen overflow-y-scroll hide-scrollbar">
        {most.map((video, index) => {
          return (
            <Link key={index} to={"/watch?v=" + video.id}>
              <WatchPageUI info={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
