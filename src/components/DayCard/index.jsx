import React from 'react';
import locationImg from '../../assets/images/location.svg';
import thermometerImg from '../../assets/images/thermometer.svg';

import snowImg from '../../assets/images/weather/snow.png';
import rainImg from '../../assets/images/weather/rain.png';
import fogImg from '../../assets/images/weather/fog.png';
import windImg from '../../assets/images/weather/wind.png';
import cloudyImg from '../../assets/images/weather/cloudy.png';
import partlyCloudyDayImg from '../../assets/images/weather/partly-cloudy-day.png';
import partlyCloudyNightImg from '../../assets/images/weather/partly-cloudy-night.png';
import clearDayImg from '../../assets/images/weather/clear-day.svg';
import clearNightImg from '../../assets/images/weather/clear-night.png';

const index = ({
  temp,
  address,
  date,
  humidity,
  feelslike,
  pressure,
  windspeed,
  description,
  icon,
}) => {
  const weatherIcons = {
    snow: snowImg,
    rain: rainImg,
    fog: fogImg,
    wind: windImg,
    cloudy: cloudyImg,
    'partly-cloudy-day': partlyCloudyDayImg,
    'partly-cloudy-night': partlyCloudyNightImg,
    'clear-day': clearDayImg,
    'clear-night': clearNightImg,
  };

  const newDate = new Date(date);

  return (
    <div
      className={`bg-sky-300 flex flex-col justify-between min-w-full px-12 max-w-full h-full text-sky-900 max-lg:px-8 max-xsm:px-4`}>
      <div className="my-10 flex flex-row items-center max-mid:mb-[15px] max-mid:mt-[15px]">
        <img src={locationImg} className="w-8 mr-2 max-lg:w-6" alt="location-img" />
        <h1 className="text-3xl max-lg:text-base">{address}</h1>
      </div>
      <p className="text-right text-xl max-lg:text-base">
        {newDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() +
          newDate.toLocaleString('default', { month: 'long' }).slice(1)}
        , {newDate.getDate()}
      </p>
      <div className="flex flex-row justify-between items-center">
        <img src={weatherIcons[icon]} alt="weather-img" className="w-32 max-xsm:w-20" />
        <div className="flex flex-row justify-end items-center">
          <img src={thermometerImg} className="w-28 max-lg:w-24 max-sm:hidden" alt="" />
          <h1 className="text-8xl max-lg:text-7xl max-xsm:text-[60px]">{temp}&#176;C</h1>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <p className="text-2xl max-lg:text-xl max-xsm:text-base">{description}</p>
      </div>
      <div className="flex flex-row flex-wrap justify-between my-10 text-base max-mid:mb-[15px] max-mid:mt-[15px]">
        <p className="max-lg:text-[14px] ml-1 max-mid:ml-[0px] ">Влажность: {humidity} %</p>
        <p className="max-lg:text-[14px] ml-1 max-mid:ml-[0px]">
          Ощущается как: {feelslike}&#176;C
        </p>
        <p className="max-lg:text-[14px] ml-1 max-mid:ml-[0px] ">
          Давление: {(pressure / 1000).toFixed(2)} бар
        </p>
        <p className="max-lg:text-[14px] ml-1 max-mid:ml-[0px] ">
          Скорость ветра: {(windspeed / 3.6).toFixed(2)} м/с
        </p>
      </div>
    </div>
  );
};

export default index;
