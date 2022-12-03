import React from 'react';
type AvatarImageProps = {
  imageUrl: string;
};

export const AvatarImage = ({imageUrl}: AvatarImageProps) => {
  return (
    <div className='avatar-box__image'>
      <img
        className='avatar-box__image--size'
        src={imageUrl}
        alt='avatar'
      />
    </div>
  );
};
