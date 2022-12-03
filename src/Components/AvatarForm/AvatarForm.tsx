import React, {useEffect, useState} from 'react';
import './AvatarFormStyle.css';
import check from '../../assets/icons/correct.svg';
import person from '../../assets/icons/person.svg';
import {getPeoples} from '../../Services/form.services';

export const AvatarForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [peolplesData, setPeoplesData] = useState<any>({});
  const [peopleIndex, setPeopleIndex] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const peoplesData = await getPeoples(peopleIndex);
        setPeoplesData(peoplesData.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [peopleIndex]);

  return (
    <div className='avatar-container'>
      <div className='avatar-box'>
        <div className='avatar-box-image'>
          <img
            className='avatar-image'
            src={'https://picsum.photos/534/383'}
            alt='avatar'
          />
        </div>
        {loading !== true ? (
          <div className='avatar-card'>
            <div className='avatar-card-box-name'>
              <div className='avatar-card-name'>{peolplesData.name}</div>
              <div className='icons'>
                <img src={person} /> <img src={check} />
              </div>
            </div>
            <div className='avatar-card-properties'>
              <div className='avatar-card-properties-info'>
                age: {peolplesData.birth_year}{' '}
              </div>
              <div className='avatar-card-properties-info'>
                eyes color:{peolplesData.eye_color}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button
        onClick={() => {
          setPeopleIndex((index) => index + 1);
        }}
        className='avatar-button'>
        next profiles
      </button>
    </div>
  );
};
