"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";
import tvStyle from "@/app/styles/tv.module.css";

const LeftBlock: React.FC<any> = (props) => {
  return (
    <div className={tvStyle.div} style={{marginTop: props.marginStyle}}>
      <div className={tvStyle.childDiv}>
        <h1 className={tvStyle.heading}>{props.data.header}</h1>
        <h1 className={tvStyle.subHeading}>{props.data.subHeader}</h1>
      </div>
      <div className={tvStyle.childDivTwo}>
        <ReactPlayer
          className={tvStyle.reactPlayer}
          url={props.data.videoLink}
        />
      </div>
    </div>
  );
};

export default LeftBlock;
