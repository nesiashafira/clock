export const getHourDifference = (offset) => {
  const offsetHour = offset.substr(0, 3);
  return offsetHour - Number(7);
};

export const getTime = (offset, setTime) => {
  let dateTemp = new Date();
  let yearTemp = dateTemp.getFullYear();
  let monthTemp = dateTemp.getMonth();
  let dayTemp = dateTemp.getDay();
  let hourTemp = dateTemp.getHours();
  let minuteTemp = dateTemp.getMinutes();
  let secondTemp = dateTemp.getSeconds();

  const timeDifference = getHourDifference(offset);

  setInterval(() => {
    setTime(
      new Date(
        yearTemp,
        monthTemp,
        dayTemp,
        hourTemp + timeDifference,
        minuteTemp,
        secondTemp++
      )
    );
  }, 1000);
};

export const timeFormat = (time) => {
  const h = time && time.getHours();
  const m = time && time.getMinutes();

  const hour = h < 10 ? "0" + h : h;
  const minute = m < 10 ? "0" + m : m;

  const a = hour + ":" + minute;
  return a;
};

export const findArea = (city) => {
  const cityFormatted = city && city.toLowerCase().split(" ").join("");

  const cityAvailable = [
    { name: "singapore", area: "Asia/Singapore" },
    { name: "tokyo", area: "Asia/Tokyo" },
    { name: "seoul", area: "Asia/Seoul" },
    { name: "melbourne", area: "Australia/Melbourne" },
    { name: "sydney", area: "Australia/Sydney" },
    { name: "london", area: "Europe/London" },
    { name: "paris", area: "Europe/Paris" },
    { name: "berlin", area: "Europe/Berlin" },
    { name: "newyork", area: "America/New_York" },
    { name: "losangeles", area: "America/Los_Angeles" },
  ];

  let citySelected = cityAvailable.find((c) => c.name === cityFormatted);

  return citySelected ? citySelected.area : "";
};
