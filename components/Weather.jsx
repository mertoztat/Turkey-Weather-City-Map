"use client";
import { useEffect, useState } from "react";
import { getCityDetails } from "@/service/api";
import TurkeyMap from "turkey-map-react";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "@/features/map/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const city = useSelector((state) => state.weather.city);

  const handleCLick = (name) => {
    dispatch(setCity(name));
  };

  useEffect(() => {
    const getDataCity = async () => {
      const response = await getCityDetails(city);
      setData(response);
    };
    getDataCity();
  }, [city]);

  return (
    <>
      <TurkeyMap onClick={({ name }) => handleCLick(name)} />
    </>
  );
};

export default Weather;
