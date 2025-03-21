import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 hide-scrollbar">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
