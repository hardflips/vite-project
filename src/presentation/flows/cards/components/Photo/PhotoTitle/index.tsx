import React from 'react'

import { Wrapper, TypographyStyled } from './styles';

interface PhotoTitleProps {
  title: string;
}

export const PhotoTitle: React.FC<PhotoTitleProps> = ({ title }) => {
  return <Wrapper>
    <TypographyStyled variant="h6" component="p">
      {title}
    </TypographyStyled>
  </Wrapper>
};