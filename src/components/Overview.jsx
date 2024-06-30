import React from "react";
import overviewData from "../OverviewData";
import "./css/overview.css"

function Overview({isDarkMode}) {
 return(

<section className="overview-card-wrapper">
<h3 className={`overview-title ${isDarkMode ? "headings-dark-mode":""}`}>Overview - Today</h3>
<article className="overview-card-container">

{overviewData.map((obj)=>{
let percentageClass;
let iconaAltText;
if(obj.id === 2 || obj.id === 7 || obj.id === 8){
    percentageClass = "red"
    iconaAltText = "down-arrow icon"
}
else{
    percentageClass = "green"
    iconaAltText = "up-arrow icon"

}
return(
    <div key={obj.id} className={`overview-card ${isDarkMode ? 'card-dark-mode':''}`}>
        <div className="metric-logo-container">
            <p className="metric-name">{obj.metric}</p>
            <img src={obj.platformIcon} alt={`${obj.platformName}'s logo`}/>
        </div>
        <div className="overview-stats-container">
            <h4 className={`metric-number ${isDarkMode ? 'headings-dark-mode':''}`}>{obj.id != 4 ? obj.stats.count : `${obj.stats.count}k`}</h4>
            <div className="percentage-icon-container">
            <img src={obj.stats.icon} alt={`${iconaAltText}`} className="percentage-icon"/>
            <p className={`percentage ${percentageClass}`}>{`${obj.stats.percentage}%`}</p>
            </div>
        </div>
    </div>
)
})}

</article>
 </section>

 )
}
export default Overview;