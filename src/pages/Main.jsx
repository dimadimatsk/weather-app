import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Search from '../components/Search';

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
    <div className="flex flex-col items-center relative">
      <Search dateMinusFiveDays={dateMinusFiveDays} datePlusFiveDays={datePlusFiveDays} />
      {status === 'idle'}
      {status === 'loading' && (
        <div className="h-[500px] w-[1350px] flex items-center justify-center">
          <div className="load"></div>
        </div>
      )}
      {status === 'success' ? (
        <Carousel />
      ) : <></>}
    </div>
  );
};

export default Main;
