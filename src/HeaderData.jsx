import fbIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import IGicon from "./assets/images/icon-instagram.svg";
import ytIcon from "./assets/images/icon-youtube.svg";

import upIcon from "./assets/images/icon-up.svg";
import downIcon from "./assets/images/icon-down.svg";

const fb_twitter_handle = "@nathanf";

const headerData = [
  {
    id: 1,
    title: "Facebook",
    platformIcon: fbIcon,
    userHandle: fb_twitter_handle,
    numberOfFollowers: 1987,
    caption: "followers",
    status: {
      icon: upIcon,
      rate: 12,
    },
  },
  {
    id: 2,
    title: "Twitter",
    platformIcon: twitterIcon,
    userHandle: fb_twitter_handle,

    numberOfFollowers: 1044,
    caption: "followers",
    status: {
      icon: upIcon,
      rate: 99,
    },
  },
  {
    id: 3,
    title: "Instagram",
    platformIcon: IGicon,
    userHandle: "@realnathanf",

    numberOfFollowers: 11,
    caption: "followers",
    status: {
      icon: upIcon,
      rate: 1099,
    },
  },
  {
    id: 4,
    title: "Youtube",
    platformIcon: ytIcon,
    userHandle: "Nathan F.",
    numberOfFollowers: 8239,
    caption: "Subscribers",
    status: {
      icon: downIcon,
      rate: 144,
    },
  },
];
export default headerData;