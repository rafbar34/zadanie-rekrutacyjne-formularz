import React, {useEffect, useState} from 'react';
import './AvatarFormStyle.css';
import check from '../../assets/icons/correct.svg';
import person from '../../assets/icons/person.svg';
import {getPeoples} from '../../Services/form.services';
import {AvatarInterface} from '../../interfaces/formInterface';
import {AvatarFormButton} from './AvatarFormButton';
import {AvatarImage} from './AvatarImage';

export const AvatarForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [peolplesData, setPeoplesData] = useState<AvatarInterface<[]>>();
  const [peopleIndex, setPeopleIndex] = useState<number>(1);
  const imageUrl: string = 'https://picsum.photos/534/383';
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const getPeoplesData = await getPeoples(peopleIndex);
        setPeoplesData(getPeoplesData.data);
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
      <div className='avatar-container__box'>
        <AvatarImage imageUrl={imageUrl} />
        {loading !== true ? (
          <div className='avatar-container__card'>
            <div className='avatar-card__box'>
              <div className='avatar-card__box__name'>{peolplesData?.name}</div>
              <div className='avatar-card__box__icons'>
                <img src={person} /> <img src={check} />
              </div>
            </div>
            <div className='avatar-container__card__properties'>
              <div>age: {peolplesData?.birth_year} </div>
              <div>eyes color:{peolplesData?.eye_color}</div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <AvatarFormButton setPeopleIndex={setPeopleIndex} />
    </div>
  );
};
