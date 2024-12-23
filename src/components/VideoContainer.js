import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';

// const keu = process.env.GOOGLE_API_KEY;

const VideoContainer = () => {

  const apikey  = process.env.REACT_APP_GOOGLE_API_KEY
  console.log(apikey);



  useEffect(()=>{
    getVideos();
  },[]);

 console.log(YOUTUBE_VIDEO_API);

  const getVideos = async() =>{
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await videos.json();
    console.log(jsonData);
  }

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer