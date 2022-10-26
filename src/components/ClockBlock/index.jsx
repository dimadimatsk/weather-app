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

  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateState);
  const today = dateState.toLocaleDateString();
  const currentTime = `${dateState.getHours()}:${dateState.getMinutes()}`;
  const dayPart = Number(dateState.getHours()) > 17;

  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-row items-center">
        <img className="w-7 h-7 mr-1" src={dayPart ? nightPic : dayPic} />
        <h1 className="text-sky-900 text-2xl">Tomsk</h1>
      </div>
      <p className="text-sky-700">
        {dayOfWeek}, {today}
      </p>
      <p className="text-sky-700">{currentTime}</p>
    </div>
  );
};

export default ClockBlock;
