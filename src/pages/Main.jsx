import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Search from '../components/Search';
import { fetchWeatherData } from '../redux/slices/searchSlice';

const Main = () => {
  // const [weather, setWeather] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { lat, lon } = useSelector((state) => state.geo);
  const { res, status } = useSelector((state) => state.search);

  const getItems = async () => {
    fetchWeatherData({ lon, lat, dateMinusFiveDays, datePlusFiveDays });
  };

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

  // const getWeather = async () => {
  //   setIsLoading(true);
  //   const { data } = await axios.get(
  //     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}/${dateMinusFiveDays}/${datePlusFiveDays}?unitGroup=metric&include=days&key=9XG423H95UG9FRTBSY55FH5M4&lang=ru&contentType=json`,
  //   );
  //   setIsLoading(false);
  //   setWeather(data);
  // };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getItems();
  }, [lon, lat, res]);

  return (
    <div className="flex flex-col items-center relative">
      <Search dateMinusFiveDays={dateMinusFiveDays} datePlusFiveDays={datePlusFiveDays} />
      {status === 'idle'}
      {status === 'loading' && (
        <div className="h-[500px] w-[1350px] flex items-center justify-center">
          <div className="load"></div>
        </div>
      )}
      {status === 'success' ? (
        <Carousel resolvedAddress={res.resolvedAddress} forecast={res.days} />
      ) : <></>}
    </div>
  );
};

export default Main;
