import React, { ReactNode } from 'react'

import { Wrapper } from './styles';

interface PhotoRootProps {
  children: ReactNode;
}

export const PhotoRoot: React.FC<PhotoRootProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};