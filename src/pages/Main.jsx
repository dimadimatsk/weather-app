import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Search from '../components/Search';

const Main = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const searchValue = useSelector((state) => state.search.city);
  const isMounted = useRef(false);

  console.log(searchValue);

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

  const getWeather = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}/${dateMinusFiveDays}/${datePlusFiveDays}?unitGroup=metric&include=days&key=9XG423H95UG9FRTBSY55FH5M4&lang=ru&contentType=json`,
    );
    setIsLoading(false);
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    getWeather();
  }, [searchValue]);

  return (
    <div className="flex flex-col items-center">
      <Search />
      {isLoading ? (
        <div className="h-[500px] w-[1350px] flex items-center justify-center">
          <div className="load"></div>
        </div>
      ) : (
        <Carousel resolvedAddress={weather.resolvedAddress} forecast={weather.days} />
      )}
    </div>
  );
};

export default Main;
