
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <input
        type="text"
        className="search-bar"
        placeholder="Search videos and folders"
      />
      <button className="upgrade-btn">Upgrade</button>
    </header>
  );
}

export default Header;