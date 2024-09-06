import React from "react";
import LeftBox from "./LeftBox";
import "./MainContainer.css";
import RightBox1 from "./RightBox1";
import RightBox2 from "./RightBox2";

const MainContainer = () => {
  return (
    <div className="main-container">
      <LeftBox />
      <RightBox1 />
      <RightBox2 />
    </div>
  );
};

export default MainContainer;
