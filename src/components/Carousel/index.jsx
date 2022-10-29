import React from 'react';
import DayCard from '../DayCard/index';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Carousel = ({ address, forecast }) => {
  const [offset, setOffset] = useState(-5990);

  const handleLeftClick = () => {
    console.log('left');

    setOffset((currentOffset) => {
      const newOffset = currentOffset + 1198;

      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightClick = () => {
    console.log('right');

    const maxOffset = -(1198 * (forecast.length - 1));

    setOffset((currentOffset) => {
      const newOffset = currentOffset - 1198;

      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="h-[500px] w-[1350px] flex items-center">
      <FontAwesomeIcon
        className={`mr-4 ${styles.arrow} ${offset === 0 ? styles.disabled : ''}`}
        disabled={offset === 0}
        icon={faCircleChevronLeft}
        onClick={handleLeftClick}
      />
      <div className="w-full h-full overflow-hidden rounded-3xl">
        <div
          className={`h-full flex ${styles.pages}`}
          style={{
            transform: `translateX(${offset}px)`,
          }}>
          {forecast.map((day, index) => (
            <DayCard
              key={index}
              temp={day.temp}
              address={address}
              date={day.datetime}
              humidity={day.humidity}
              feelslike={day.feelslike}
              pressure={day.pressure}
              windspeed={day.windspeed}
              description={day.description}
              icon={day.icon}
            />
          ))}
        </div>
      </div>
      <FontAwesomeIcon
        className={`ml-4 ${styles.arrow} ${offset === -11980 ? styles.disabled : ''}`}
        disabled={offset === -11980}
        icon={faCircleChevronRight}
        onClick={handleRightClick}
      />
    </div>
  );
};

export default Carousel;
