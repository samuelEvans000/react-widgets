import React from "react";
import "./Layout.css";
import TabsWidget from "../TabsWidget/TabsWidget";
import GalleryWidget from "../GalleryWidget/GalleryWidget";
import Line from "./Line";
import Empty from "../Empty/Empty";

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="left-panel"><Empty/></div>
      <div className="right-panel">
        <TabsWidget />
        <Line />
        <GalleryWidget />
        <Line />
      </div>
    </div>
  );
};

export default Layout;
