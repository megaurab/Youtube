import React from 'react'

const Sidebar = () => {
  return (
    <div className='col-span-1 shadow-lg p-2 italic w-48 overflow-scroll'>
      <ul className='flex flex-col items-start'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        {/* <li>News</li> */}
      </ul>

      <h1 className='font-bold mt-5 flex flex-col items-start'>You</h1>
      <ul className='flex flex-col items-start'>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>

      <h1 className='font-bold mt-5 flex flex-col items-start'>Subscription</h1>
      <ul className='flex flex-col items-start'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>

      <h1 className='font-bold mt-5 flex flex-col items-start'>Explore</h1>
      <ul className='flex flex-col items-start'>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>

      <h1 className='font-bold mt-5 flex flex-col items-start'>More from youtube</h1>
      <ul className='flex flex-col items-start'>
        <li>Youtube Premium</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
    </div>
  )
}

export default Sidebar