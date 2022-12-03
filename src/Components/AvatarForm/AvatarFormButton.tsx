import React from 'react';
type AvatarFormButtonProps = {
  setPeopleIndex: React.Dispatch<React.SetStateAction<number>>;
};
export const AvatarFormButton = ({setPeopleIndex}: AvatarFormButtonProps) => {
  return (
    <>
      <button
        onClick={() => {
          setPeopleIndex((number: number) => number + 1);
        }}
        className='avatar-container__button'>
        next profiles
      </button>
    </>
  );
};
