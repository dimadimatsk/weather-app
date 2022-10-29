import React from 'react';
import locationImg from '../../assets/images/location.svg';
import sunImg from '../../assets/images/weather/sun.svg';
import thermometerImg from '../../assets/images/thermometer.svg';

const index = ({ temp, address, date, humidity, feelslike, pressure, windspeed, description }) => {
  return (
    <div
      className={`bg-sky-300 flex flex-col justify-between min-w-full px-12 max-w-full h-full text-sky-900`}>
      <div className="my-10 flex flex-row items-center">
        <img src={locationImg} className="w-8 mr-2" alt="location-img" />
        <h1 className="text-3xl">{address}</h1>
      </div>
      <p className="text-right text-xl">{date}</p>
      <div className="flex flex-row justify-end items-center">
        <img src={thermometerImg} className="w-28" alt="" />
        <h1 className="text-8xl">{temp}&#176;C</h1>
        <img src={sunImg} alt="weather-img" className="w-36" />
      </div>
      <div className="flex justify-end">
        <p className="text-2xl">{description}</p>
      </div>
      <div className="flex flex-row justify-between my-10 text-base">
        <p>Влажность: {humidity} %</p>
        <p>Ощущается как: {feelslike}&#176;C</p>
        <p>Давление: {pressure} mb</p>
        <p>Скорость ветра: {windspeed} kph</p>
      </div>
    </div>
  );
};

export default index;
