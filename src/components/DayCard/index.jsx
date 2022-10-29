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
      className={`bg-sky-300 flex flex-col justify-between min-w-full px-12 max-w-full h-full text-sky-900`}>
      <div className="my-10 flex flex-row items-center">
        <img src={locationImg} className="w-8 mr-2" alt="location-img" />
        <h1 className="text-3xl">{address}</h1>
      </div>
      <p className="text-right text-xl">
        {newDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() +
          newDate.toLocaleString('default', { month: 'long' }).slice(1)}
        , {newDate.getDate()}
      </p>
      <div className="flex flex-row justify-end items-center">
        <img src={thermometerImg} className="w-28" alt="" />
        <h1 className="text-8xl">{temp}&#176;C</h1>
        <img src={weatherIcons[icon]} alt="weather-img" className="w-32 ml-6" />
      </div>
      <div className="flex justify-end">
        <p className="text-2xl">{description}</p>
      </div>
      <div className="flex flex-row justify-between my-10 text-base">
        <p>Влажность: {humidity} %</p>
        <p>Ощущается как: {feelslike}&#176;C</p>
        <p>Давление: {(pressure / 1000).toFixed(2)} бар</p>
        <p>Скорость ветра: {(windspeed / 3.6).toFixed(2)} м/с</p>
      </div>
    </div>
  );
};

export default index;
