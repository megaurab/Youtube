import React from 'react'

const WatchPageUI = ({info}) => {
    // console.log(info);
    const {snippet} = info || {};
    const {title, thumbnails} = snippet || {};
  
    return (
      <div className='p-2 m-2 w-80 h-32 shadow-lg rounded-b-xl flex'>
        <img alt="" className="rounded-lg" src={thumbnails?.medium?.url}/>
        <ul>
          <li className='flex italic flex-wrap'>{ title }</li>
        </ul>
      </div>
    )
}

export default WatchPageUI