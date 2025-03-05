import React from 'react'

const WatchPageUI = ({info}) => {
    console.log(info);
    const {snippet} = info || {};
    const {title, thumbnails} = snippet || {};
  
    return (
      <div className='p-2 m-2 w-44 h-24 shadow-lg rounded-b-xl flex flex-1'>
        <img className="rounded-lg" src={thumbnails?.medium?.url}/>
        <ul>
          <li className='italic'>{ title }</li>
        </ul>
      </div>
    )
}

export default WatchPageUI