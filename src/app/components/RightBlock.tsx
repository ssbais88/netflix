import React from "react";
import tvStyle from "@/app/styles/tv.module.css";
import ReactPlayer from "react-player/lazy";

const RightBlock: React.FC<any> = (props) => {
  return (
    <div className={tvStyle.div} style={{ marginTop: "10px" }}>
      <div className={tvStyle.childDivTwo}>
        <ReactPlayer
          className={tvStyle.reactPlayer}
          url={props.data.videoLink}
        />
      </div>
      <div className={tvStyle.childDiv}>
        <h1 className={tvStyle.heading}>{props.data.header}</h1>
        <h1 className={tvStyle.subHeading}>{props.data.subHeader}</h1>
      </div>
    </div>
  );
};

export default RightBlock;
