import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import ClockCard from "../component/ClockCard";
import CityForm from "../component/CityForm";

const MainPage = () => {
  const [headerData, setHeaderData] = useState();
  const [city, setCity] = useState([]);
  const [cityData, setCityData] = useState([]);

  const getHeaderData = async () => {
    const result = await fetch(
      `http://worldtimeapi.org/api/timezone/Asia/Jakarta`
    );
    const todayDate = await result.json();
    setHeaderData(todayDate);
  };

  const getDate = async (area) => {
    const result = await fetch(`http://worldtimeapi.org/api/timezone/${area}`);
    const todayDate = await result.json();
    return todayDate;
  };

  useEffect(() => {
    getHeaderData();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let a;
    (async () => {
      for (let i = city.length - 1; i >= 0; i--) {
        a = await getDate(city[i].area);
        city[i]["data"] = a;
      }
      setCityData(city);
    })();

    // eslint-disable-next-line
  }, [city]);

  const deleteCityData = (item) => {
    const dataFiltered = cityData.filter((c) => c.city !== item.city);
    setCity(dataFiltered);
    setCityData(dataFiltered);
  };

  return (
    <div>
      <Header headerData={headerData && headerData}></Header>
      <CityForm
        city={city}
        setCity={setCity}
        disabled={cityData.length === 4}
      ></CityForm>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {cityData.map((item) => (
          <ClockCard
            key={item.city}
            city={item.city}
            area={item.area}
            label={item.label}
            time={item.data.utc_offset}
            timezone={item.data.abbreviation}
            deleteClicked={() => deleteCityData(item)}
          ></ClockCard>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
