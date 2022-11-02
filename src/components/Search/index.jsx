import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Search.module.css';
import { setSearchCityValue } from '../../redux/slices/searchSlice';
import { useRef } from 'react';
import { useCallback } from 'react';
import { debounce } from 'lodash';
import { fetchGeoData } from '../../redux/slices/geoSlice';
import { setCitiesDefault, setStatus } from '../../redux/slices/geoSlice';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { cities, status } = useSelector((state) => state.geo);

  const followSearchValue = useCallback(
    debounce((value) => {
      if (value) {
        dispatch(fetchGeoData(value));
      } else {
        dispatch(setCitiesDefault([]));
      }

      // dispatch(setSearchCityValue(value));
    }, 1000),
    [],
  );

  const onInputChange = (e) => {
    dispatch(setStatus('loading'));
    setValue(e.target.value);
    followSearchValue(e.target.value);
  };

  const onClickClear = () => {
    setValue('');
    dispatch(setCitiesDefault([]));
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        className={styles.input}
        placeholder="Введите название города"
      />
      {status === 'loading' && (
        <div className={styles.searchbar}>
          <div className={`load ${styles.searchcircle}`}></div>
        </div>
      )}
      {value && cities.length > 0 && (
        <div className={styles.searchbar}>
          <ul className="flex flex-col items-start">
            {cities.map((city) => (
              <li className={`${styles.city} w-full text-left px-[42px] py-2`}>
                {city.properties.formatted}
              </li>
            ))}
          </ul>
        </div>
      )}
      {value && cities.length === 0 && status !== 'loading' && (
        <div className={`${styles.searchbar} px-[42px] py-2 text-left`}>Ничего не найдено</div>
      )}
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clear}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
