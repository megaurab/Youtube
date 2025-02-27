import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const {statistics, snippet} = info || {};
  const {channelTitle, title, thumbnails} = snippet || {};
  const {likeCount} = statistics;

  return (
    <div className='p-2 m-2 w-44 shadow-lg rounded-b-xl'>
      <img className="rounded-lg" src={thumbnails.medium.url}/>
      <ul>
        <li className='italic'>{ title }</li>
        {/* <li className='italic'>{ channelTitle }</li> */}
        {/* <li className='italic'>{ likeCount }</li> */}
      </ul>
    </div>
  )
}

export default VideoCard