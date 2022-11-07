import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import dayPic from '../../assets/images/day.png';
import nightPic from '../../assets/images/night.png';

const ClockBlock = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateState(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const dayOfWeek = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(dateState);
  const today = dateState.toLocaleDateString();
  const currentTime = `${dateState.getHours()}:${
    dateState.getMinutes() < 10 ? '0' + dateState.getMinutes() : dateState.getMinutes()
  }`;
  const dayPart = Number(dateState.getHours()) > 17;

  return (
    <div className="flex flex-col items-end">
      <p className="text-sky-700 text-end max-mid:text-[12px]">
        {dayOfWeek}, {today}
      </p>
      <div className="flex flex-row items-center">
        <img alt="daynight" className="w-7 h-7 mr-1 max-mid:w-4 h-4" src={dayPart ? nightPic : dayPic} />
        <p className="text-sky-700 max-mid:text-[12px]">{currentTime}</p>
      </div>
    </div>
  );
};

export default ClockBlock;
