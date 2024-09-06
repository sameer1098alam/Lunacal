import React, { useState } from "react";
import "./RightBox1.css";

const RightBox1 = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY and have been living in Santa Carla for the
            past 10 years with my wife Tiffany and my 4-year-old twin daughters,
            Emma and Ella. Both of them are just starting school, so my calendar
            is usually blocked between 9-10 AM. This is a...
          </p>
        );
      case "experiences":
        return <p>Experience content goes here...</p>;
      case "recommended":
        return <p>Recommended content goes here...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="right-box1">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`tab ${activeTab === "experiences" ? "active" : ""}`}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={`tab ${activeTab === "recommended" ? "active" : ""}`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default RightBox1;
