import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [selectedContent, setSelectedContent] = useState("Let’s create some videos!");

  const handleContentChange = (newContent) => {
    setSelectedContent(newContent);
  };

  return (
    <div className="app">
      <Sidebar onContentChange={handleContentChange} />
      <div className="main-section">
        <MainContent content={selectedContent} />
      </div>
    </div>
  );
}

export default App;
