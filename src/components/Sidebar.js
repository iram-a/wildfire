import React from "react";
import "./Sidebar.css";

function Sidebar({ onContentChange }) {
  return (
    <div className="sidebar">
      <h1 className="btn">WildGuard</h1>
      <ul>
        <li
          className="sidebar-item"
          onClick={() => onContentChange("Track Animal Movements")}
        >
          Track Animal Movements
        </li>
        <li
          className="sidebar-item"
          onClick={() => onContentChange("Wildfire Detection")}
        >
          Wildfire Detection
        </li>
        <li
          className="sidebar-item"
          onClick={() => onContentChange("Injury Detection")}
        >
          Injuries
        </li>
        <li
          className="sidebar-item"
          onClick={() => onContentChange("Real-Time Alerts")}
        >
          Real-Time Alerts
        </li>
        <li
          className="sidebar-item"
          onClick={() => onContentChange("Live Alert Map")}
        >
          Live Alert Map
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
