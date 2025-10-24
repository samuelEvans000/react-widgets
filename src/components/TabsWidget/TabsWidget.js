import React, { useState, useEffect, useRef } from "react";
import "./TabsWidget.css";

const TabsWidget = () => {
  const tabs = ["about", "exp", "rec"];
  const [activeTab, setActiveTab] = useState("about");
  const contentRef = useRef(null);

  const getLeftPosition = () => {
    switch (activeTab) {
      case "about": return "1%";
      case "exp": return "33.33%";
      case "rec": return "66.66%";
      default: return "0%";
    }
  };

  // Set initial scroll position to match screenshot (scrollbar thumb at top 10-15%)
  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      const clientHeight = contentRef.current.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      // Position scrollbar thumb at approximately 10-15% from top
      const initialScroll = maxScroll * 0.12;
      contentRef.current.scrollTop = initialScroll;
    }
  }, [activeTab]);

  return (
    <div className="tabs-widget">
      {/* Info Icon */}
      <img src="/images/info.png" alt="Info" className="info-icon" />
      
        {/* Drag Icon */}
        <img src="/images/drag.png" alt="Drag" className="drag-icon" />
      <div className="tabs-header">
        {/* 👇 animated background */}
        <span
          className="active-bg"
          style={{ left: getLeftPosition() }}
        ></span>

        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={activeTab === "exp" ? "active" : ""}
          onClick={() => setActiveTab("exp")}
        >
          Experiences
        </button>
        <button
          className={activeTab === "rec" ? "active" : ""}
          onClick={() => setActiveTab("rec")}
        >
          Recommended
        </button>
      </div>

      <div className="tabs-content" ref={contentRef}>
        {activeTab === "about" && (
          <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM,
        raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM
          </p>
        )}
        {activeTab === "exp" && (
          <p>
            1 year of experience in React.js, Next.js, and UI development.raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM
          </p>
        )}
        {activeTab === "rec" && (
          <p>
            Recommended by peers for strong design sense and clean code quality.raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM
          </p>
        )}
      </div>
    </div>
  );
};

export default TabsWidget;

