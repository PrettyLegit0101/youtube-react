import React from "react";

const Video = (props) => {
  return (
    <div className="video-container">
      <div className="video-image">

          <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="video-info">

          <h3>{props.title}</h3>
          <h4>{props.dateAdded}</h4>
          <h4>{props.channel}</h4>
          <p>{props.description}</p>
      </div>
     
    </div>
  )
};

export default Video;
