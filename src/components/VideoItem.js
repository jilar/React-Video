import React from 'react'
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) =>{
  const title= video.snippet.title;
  const img = video.snippet.thumbnails.medium.url
  return(
    <div className = 'item video-item' onClick={() => onVideoSelect(video)}>
      <img className= 'ui image' alt={video.snippet.title} src ={img} />
      <div className= 'content'>
        <div className='header'>{title} </div>
      </div>
    </div>
  );

}

export default VideoItem
