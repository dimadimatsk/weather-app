import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from '../components/Carousel';

const Main = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  const datePlusFiveDays = new Date(new Date().setDate(currentDate.getDate() + 5))
    .toLocaleDateString('ru-RU')
    .replaceAll('.', '-')
    .split('-')
    .reverse()
    .join('-');

  const dateMinusFiveDays = new Date(new Date().setDate(currentDate.getDate() - 5))
    .toLocaleDateString('ru-RU')
    .replaceAll('.', '-')
    .split('-')
    .reverse()
    .join('-');

  console.log(typeof datePlusFiveDays);

  const getWeather = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tomsk/${dateMinusFiveDays}/${datePlusFiveDays}?unitGroup=metric&include=days&key=MZVNP989ZHSNAWMDBFWAM6RTV&contentType=json`,
    );
    setIsLoading(false);
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  console.log(weather);

  return <>{isLoading ? 1 : <Carousel address={weather.address} forecast={weather.days} />}</>;
};

export default Main;
