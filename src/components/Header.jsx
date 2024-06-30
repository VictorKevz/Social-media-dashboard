import React from "react";
import headerData from "../HeaderData";
import ToggleSwitch from "./ToggleSwitch";
import "./css/header.css"

function Header({ onSwitch, isDarkMode }) {
  return (
<section className="header-outer-container">
 <header className="header-container">
 <div className="header-text-container">
 <h1 className={`header-title ${isDarkMode ? "headings-dark-mode":""}`}>Social Media Dashboard</h1>
 <p className="header-caption">Total Followers: 23,004</p>
 </div>
 <ToggleSwitch onSwitch={onSwitch} isDarkMode={isDarkMode} />
 </header>
 <article className="main-cards-container">
 {headerData.map((obj) => {
            let classCard;
            if(obj.title === "Facebook"){
                classCard = "facebook"
 }
            else if(obj.title === "Twitter"){
                classCard = "twitter"
 }
            else if(obj.title === "Instagram"){
                classCard = "instagram"
 }
            else{
                classCard = "youtube"
 }
          return (
 <div key={obj.id} className={isDarkMode ?`card card-dark-mode ${classCard}`: `card ${classCard}`}>
 <div className="inner-card">
 <div className="icon-user-handle-container">
 <img src={obj.platformIcon} alt={`${obj.title}'s logo`} className="logo" />
 <p className="user-handle">{obj.userHandle}</p>
 </div>
 <h2 className={`followers ${isDarkMode ? 'headings-dark-mode': ''}`}>{obj.id == 3 ? `${obj.numberOfFollowers}k`: obj.numberOfFollowers}</h2>
 <p className="caption">{obj.caption}</p>
 <div className="stats-container">
 <img src={obj.status.icon} className="arrow-icon"/>
 <p className={`rate ${obj.id === 4 ? 'youtube': ''}`}>{`${obj.status.rate} Today`}</p>
 </div>
 </div>
 </div>
 );
 })}
 </article>
 </section>
 );
}
export default Header;