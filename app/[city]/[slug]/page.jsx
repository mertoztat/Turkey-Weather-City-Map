"use client";
import Icon from "@/components/Icon";
import { nowDate } from "@/utils/getDate";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setWeather } from "@/features/map/weatherSlice";
import { GiWindsock } from "react-icons/gi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { BsSun } from "react-icons/bs";

const City = () => {
  const dispatch = useDispatch();

  const weatherInfos = useSelector((state) => state.weather.weather);

  const temp = weatherInfos?.main.temp.toFixed(1);
  const windSpeed = weatherInfos?.wind.speed;
  const feltDegree = weatherInfos?.main.feels_like;
  const getDate = nowDate();

  const convertUnixTimeToNormalTime = () => {
    let unixSunBirthDate = weatherInfos?.sys.sunrise;
    let date = new Date(unixSunBirthDate * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let formattedTime =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0");

    return formattedTime;
  };

  const handleClick = () => {
    dispatch(setWeather({}));
  };

  return (
    <div className="mt-10 w-full p-8  flex justify-center items-center relative  ">
      <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
        <div className="w-52 sm:w-96  mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
          <div className="text-md font-bold flex flex-col text-gray-900">
            <span className="uppercase text-xl">{weatherInfos?.name}</span>
            <span className="mt-2 text-gray-500 text-sm">{getDate}</span>
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <Icon id={weatherInfos?.weather[0].id} />
          </div>
          <p className="text-gray-700 mb-2">
            {weatherInfos?.weather[0].description.slice(0, 1).toUpperCase() +
              weatherInfos?.weather[0].description.slice(1)}
          </p>
          <div className="text-3xl font-bold text-gray-900 mb-6">{temp}°</div>
          <div className="flex w-full  items-center justify-between">
            <div className="flex justify-center items-center flex-col gap-1 font-medium">
              Wind Speed
              <span className="flex justify-center items-center  gap-1 text-md">
                <GiWindsock size={25} />
                {windSpeed}km/s
              </span>
            </div>

            <div className="flex justify-center items-center flex-col gap-1 font-medium">
              Felt Degree
              <span className="flex justify-center items-center  gap-1 text-md">
                <LiaTemperatureLowSolid size={20} />
                {feltDegree}°
              </span>
            </div>

            <div className="flex justify-center items-center flex-col gap-1 font-medium">
              Sunrise
              <span className="flex justify-center items-center  gap-1 text-md">
                <BsSun size={20} />
                {convertUnixTimeToNormalTime()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href={"/"}>
        <span
          onClick={() => handleClick}
          className="text-white absolute top-5 left-5 text-2xl bg-sky-400  rounded-full flex items-center justify-center w-10 h-10"
        >
          {"<"}
        </span>
      </Link>
    </div>
  );
};

export default City;
