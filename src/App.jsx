import React, { useState } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";

import "./App.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  function switchTheme() {
    setDarkMode(!isDarkMode);
  };

  return (
    <main className={`outer-container ${isDarkMode ? "dark-mode" : ""}`}>
 <div className={`header-bg ${isDarkMode ? "dark-mode" : ""}`}></div>

 <div className={`inner-container ${isDarkMode ? "dark-mode" : ""}`}>
 <Header onSwitch={switchTheme} isDarkMode={isDarkMode} />
 <Overview isDarkMode={isDarkMode}/>
 </div>
 <div className="footer">
  <p >Made With 💚 by <a href="https://github.com/VictorKevz" target="_blank">Victor Kevz </a></p>

  </div>
 </main>
 );
}

export default App;