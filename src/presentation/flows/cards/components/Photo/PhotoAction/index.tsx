import React from 'react'

import { Wrapper, ButtonStyled } from './styles'

interface PhotoActionProps {
  hasAction?: boolean;
}

export const PhotoAction: React.FC<PhotoActionProps> = ({ hasAction }) => {
  return <Wrapper>
    {!hasAction ? <ButtonStyled variant="contained" fullWidth>Ver mais</ButtonStyled> : null}
  </Wrapper>;
};