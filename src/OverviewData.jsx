import fbIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import IGicon from "./assets/images/icon-instagram.svg";
import ytIcon from "./assets/images/icon-youtube.svg";

import upIcon from "./assets/images/icon-up.svg";
import downIcon from "./assets/images/icon-down.svg";

const overviewData = [
  {
    id: 1,
    platformName: "Facebook",
    platformIcon: fbIcon,
    metric: "Page Views",

    stats: {
      count: 87,
      icon: upIcon,
      percentage: 3,
    },
  },
  {
    id: 2,
    platformName: "Facebook",
    platformIcon: fbIcon,
    metric: "Likes",

    stats: {
      count: 52,
      icon: downIcon,
      percentage: 2,
    },
  },
  {
    id: 3,
    platformName: "Instagram",
    platformIcon: IGicon,
    metric: "Likes",

    stats: {
      count: 5462,
      icon: upIcon,
      percentage: 2257,
    },
  },
  {
    id: 4,
    platformName: "Instagram",
    platformIcon: IGicon,
    metric: "Profile Views",

    stats: {
      count: 52,
      icon: upIcon,
      percentage: 1375,
    },
  },
  {
    id: 5,
    platformName: "Twitter",
    platformIcon: twitterIcon,
    metric: "Retweets",

    stats: {
      count: 117,
      icon: upIcon,
      percentage: 303,
    },
  },
  {
    id: 6,
    platformName: "Twitter",
    platformIcon: twitterIcon,
    metric: "Likes",

    stats: {
      count: 507,
      icon: upIcon,
      percentage: 553,
    },
  },
  {
    id: 7,
    platformName: "Youtube",
    platformIcon: ytIcon,
    metric: "Likes",

    stats: {
      count: 107,
      icon: downIcon,
      percentage: 19,
    },
  },
  {
    id: 8,
    platformName: "Youtube",
    platformIcon: ytIcon,
    metric: "Total Views",

    stats: {
      count: 1407,
      icon: downIcon,
      percentage: 12,
    },
  }
];
export default overviewData;