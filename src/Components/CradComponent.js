import React from "react";
import "./style.css";
const CradComponent = (props) => {
  return (
   
      <div className="details">
        <div className="top">
        <h3>{props.channelName}</h3>
          <img src={props.channelLogoUrl}></img>
          
        </div>
        <div>
          <img className="thumbnailUrl" src={props.thumbnailUrl}></img>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="lkvw">
          <p className="flx">
            likes: <pre> </pre>
            <h5>{props.likes}</h5>
          </p>
          <p className="flx">
            views: <pre> </pre>
            <h5>{props.views}</h5>
          </p>
        </div>
      </div>
    
  );
};

export default CradComponent;
