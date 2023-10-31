"use client";
import { useEffect } from "react";
import { getCityDetails } from "@/service/api";
import TurkeyMap from "turkey-map-react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setData, setWeather } from "@/features/map/weatherSlice";
import { useRouter } from "next/navigation";

const Weather = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cityName = useSelector((state) => state.weather.city);

  const handleCLick = async (name) => {
    dispatch(setCity(name));
    dispatch(setData());
    await getCityDetails(name);
    router.push(`/city/${name}`);
  };

  useEffect(() => {
    const getDataCity = async () => {
      const response = await getCityDetails(cityName);
      console.log("response bilgisi useeffec: ", response);
      dispatch(setWeather(response));
    };

    getDataCity();
  }, [cityName, dispatch]);

  return (
    <div className=" mt-10">
      <TurkeyMap
        onClick={({ name }) => handleCLick(name)}
        customStyle={{ idleColor: "#00bbf0", hoverColor: "#fdb44b" }}
      />
    </div>
  );
};

export default Weather;
