import React, { useEffect, useState } from "react";
import "./ClockCard.css";
import { getTime, timeFormat, getHourDifference } from "../util/util-function";
import singaporeBg from "../assets/img/singapore-bg.png";
import tokyoBg from "../assets/img/tokyo-bg.png";
import seoulBg from "../assets/img/seoul-bg.png";
import melbourneBg from "../assets/img/melbourne-bg.png";
import sydneyBg from "../assets/img/sydney-bg.png";
import londonBg from "../assets/img/london-bg.png";
import parisBg from "../assets/img/paris-bg.png";
import berlinBg from "../assets/img/berlin-bg.png";
import newyorkBg from "../assets/img/newyork-bg.png";
import losangelesBg from "../assets/img/losangeles-bg.png";
import deleteIcon from "../assets/icon/delete-icon.png";

const ClockCard = ({ city, area, label, time, timezone, deleteClicked }) => {
  const [cardTime, setCardTime] = useState();
  let cityTime;
  let timeDifference;
  let differenceText;
  let cityBg;
  const hourDifference = getHourDifference(time);

  switch (area) {
    case "Asia/Singapore":
      cityBg = singaporeBg;
      break;
    case "Asia/Tokyo":
      cityBg = tokyoBg;
      break;
    case "Asia/Seoul":
      cityBg = seoulBg;
      break;
    case "Australia/Melbourne":
      cityBg = melbourneBg;
      break;
    case "Australia/Sydney":
      cityBg = sydneyBg;
      break;
    case "Europe/London":
      cityBg = londonBg;
      break;
    case "Europe/Paris":
      cityBg = parisBg;
      break;
    case "Europe/Berlin":
      cityBg = berlinBg;
      break;
    case "America/New_York":
      cityBg = newyorkBg;
      break;
    case "America/Los_Angeles":
      cityBg = losangelesBg;
      break;

    default:
      break;
  }

  const styles = {
    container: {
      height: "70vh",
      backgroundImage: `url(${cityBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };

  useEffect(() => {
    time && getTime(time, setCardTime);
  }, [time]);

  if (typeof cardTime !== "undefined") cityTime = timeFormat(cardTime);

  if (hourDifference < 0) {
    timeDifference = hourDifference.toString().substr(1, 1);
    differenceText = "hours behind of Jakarta";
  } else {
    timeDifference = hourDifference;
    differenceText = "hours ahead of Jakarta";
  }

  return (
    <div
      data-cy="clock-card"
      className="card-container"
      style={styles.container}
    >
      <img
        data-cy="delete-button"
        className="delete-button"
        src={deleteIcon}
        alt="delete-button"
        onClick={deleteClicked}
      ></img>
      <p style={{ fontSize: "30px" }}>{city} </p>
      <p style={{ fontSize: "18px", margin: "0" }}>{label ? label : <br />}</p>
      <p style={{ fontSize: "55px", margin: "10px 0" }}>{cityTime} </p>
      <p style={{ fontSize: "22px" }}>{timezone} </p>
      <p style={{ fontSize: "18px", margin: "0" }}>
        {timeDifference} {differenceText}
      </p>
    </div>
  );
};

export default ClockCard;
