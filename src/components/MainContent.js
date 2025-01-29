import React from "react";
import "./MainContent.css";
import LiveAlertMap from "./LiveAlertMap"; // Import the LiveAlertMap component

function MainContent({ content }) {
  return (
    <div className="main-content">
      <h1>{content}</h1>
      {content === "Let’s create some videos!" && (
        <div className="actions">
          <button>Create Project</button>
          <button>Record a Video</button>
          <button>Create Subtitles</button>
          <button>Create Audiograms</button>
          <button>Add Texts</button>
          <button>Add Filters</button>
        </div>
      )}
      {content === "Track Animal Movements" && (
        <p>
          Track the movements of animals in real-time using our advanced
          tracking system.
        </p>
      )}
      {content === "Wildfire Detection" && (
        <p>Monitor and detect wildfires to ensure safety and timely action.</p>
      )}
      {content === "Injury Detection" && (
        <p>Detect and report animal injuries for swift intervention.</p>
      )}
      {content === "Real-Time Alerts" && (
        <p>
          Receive instant alerts for critical wildlife events and updates.
        </p>
      )}
      {content === "Live Alert Map" && (
        <LiveAlertMap /> // Render the LiveAlertMap component when "Live Alert Map" is selected
      )}
    </div>
  );
}

export default MainContent;