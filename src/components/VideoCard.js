import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const {statistics, snippet} = info;
  const {channelTitle, title, thumbnails} = snippet;

  return (
    <div>
      <img src={thumbnails.medium.url}/>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default VideoCard