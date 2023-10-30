"use client";
import { WeatherIcon } from "weather-react-icons";
import "weather-react-icons/lib/css/weather-icons.css";
import classNames from "classnames";

const Icon = ({ id }) => {
  return (
    <WeatherIcon
      iconId={id}
      name="owm"
      day="true"
      className={classNames({
        "text-5xl my-4": true,
        "text-yellow-300": id === 800,
        "text-blue-300": id === 500,
        "text-red-300": id === 801,
        "text-red-400": id === 802,
        "text-blue-400": id === 803,
        "text-indigo-400": id === 804,
      })}
    />
  );
};

export default Icon;
