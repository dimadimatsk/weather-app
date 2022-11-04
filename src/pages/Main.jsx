import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Search from '../components/Search';
import errorImg from '../assets/images/error.png'

const Main = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const status = useSelector((state) => state.search.status);

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

  return (
    <div className="flex w-full flex-col items-center relative">
      <Search dateMinusFiveDays={dateMinusFiveDays} datePlusFiveDays={datePlusFiveDays} />
      {status === 'idle'}
      {status === 'loading' && (
        <div className="h-[500px] w-[1440px] flex items-center justify-center">
          <div className="load"></div>
        </div>
      )}
      {status === 'success' && <Carousel />}
      {status === 'error' && (
        <div className="text-center">
          <img src={errorImg} className="w-[700px]" alt="error" />
          <h2 className='text-sky-700'>Oops! Something wrong...</h2>
          <p className='text-sky-700'>Please, try again later.</p>
        </div>
      )}
    </div>
  );
};

export default Main;
