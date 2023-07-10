import React from 'react'
import { CardMedia } from '@mui/material';

interface PhotoImageProps {
  imageUrl: string;
}

export const PhotoImage: React.FC<PhotoImageProps> = ({ imageUrl }) => {
  return <React.Fragment>
    <CardMedia
      component="img"
      height="150"
      image={imageUrl}
      alt="Paella dish"
    />
  </React.Fragment>;
};