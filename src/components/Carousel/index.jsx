import React from 'react';
import DayCard from '../DayCard/index';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Carousel = () => {
  const [width, setWidth] = useState(
    document.documentElement.clientWidth > 1440
      ? 1440
      : document.documentElement.clientWidth < 768
      ? document.documentElement.clientWidth - 40
      : document.documentElement.clientWidth,
  );

  const [offset, setOffset] = useState(
    document.documentElement.clientWidth >= 768 ? -(width * 5 - 76 * 2 * 5) : -(width * 5),
  );
  const forecast = useSelector((state) => state.search.res.days);
  const locName = useSelector((state) => state.geo.cityName);

  const handleLeftClick = () => {
    console.log('left');

    setOffset((currentOffset) => {
      console.log(currentOffset);
      const newOffset =
        document.documentElement.clientWidth >= 768
          ? currentOffset + (width - 76 * 2)
          : currentOffset + width;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightClick = () => {
    console.log('right');

    const maxOffset =
      document.documentElement.clientWidth >= 768
        ? -((width - 76 * 2) * (forecast.length - 1))
        : -(width * (forecast.length - 1));

    setOffset((currentOffset) => {
      const newOffset =
        document.documentElement.clientWidth >= 768
          ? currentOffset - (width - 76 * 2)
          : currentOffset - width;

      console.log('new', newOffset, 'offset', offset);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={`flex items-center z-[5] ${styles.container}`} style={{ width: `${width}px` }}>
      <FontAwesomeIcon
        className={`mr-4 ${styles.arrow} ${offset === 0 ? styles.disabled : ''}`}
        disabled={offset === 0}
        icon={faCircleChevronLeft}
        onClick={handleLeftClick}
      />
      <div className={`w-full h-full overflow-hidden rounded-3xl ${styles.weather}`}>
        <div
          className={`h-full flex ${styles.pages}`}
          style={{
            transform: `translateX(${offset}px)`,
          }}>
          {forecast.map((day, index) => (
            <DayCard
              key={index}
              temp={day.temp}
              address={locName}
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
        className={`ml-4 ${styles.arrow} ${
          offset === -(width * 10 - 76 * 2 * 10)
            ? styles.disabled
            : offset === -(width * 10)
            ? styles.disabled
            : ''
        }`}
        disabled={offset === -(width * 10 - 76 * 2 * 10) || -(width * 10)}
        icon={faCircleChevronRight}
        onClick={handleRightClick}
      />
    </div>
  );
};

export default Carousel;
