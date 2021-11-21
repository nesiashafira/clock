import React, { useEffect, useState } from "react";
import { getTime, timeFormat } from "../util/util-function";
import jakartaBg from "../assets/img/jakarta-bg.png";

const Header = ({ headerData }) => {
  const styles = {
    headerContainer: {
      margin: "0",
      backgroundImage: `url(${jakartaBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "25vh",
    },
    cityLabel: {
      margin: "0 0 20px 0",
      fontSize: "30px",
      color: "white",
    },
    timeLabel: {
      margin: "0",
      fontSize: "70px",
      color: "white",
    },
  };

  const [headerTime, setHeaderTime] = useState();
  let time;

  useEffect(() => {
    headerData && getTime(headerData.utc_offset, setHeaderTime);
  }, [headerData]);

  if (typeof headerTime !== "undefined") time = timeFormat(headerTime);

  return (
    <div data-cy="header" style={styles.headerContainer}>
      <div style={{ margin: "0 60px", padding: "40px 0 0" }}>
        <p style={styles.cityLabel}>Jakarta, Indonesia</p>
        <p data-cy="header-time" style={styles.timeLabel}>
          {time}
        </p>
      </div>
    </div>
  );
};

export default Header;
