import React from "react";
import "./css/switch.css";

function ToggleSwitch({ onSwitch, isDarkMode }) {
  return (
    <article className="switch-wrapper">
      <p className="switch-text">Dark Mode</p>
      <div className="switch-container">
        <input
          type="checkbox"
          id="toggle"
          className="toggle-input"
          onChange={onSwitch}
          checked={isDarkMode}
          aria-label="Toggle Dark Mode"
        />
        <label htmlFor="toggle" className="toggle-label"></label>
      </div>
    </article>
  );
}

export default ToggleSwitch;
