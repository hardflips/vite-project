import styled from 'styled-components'
import { Button } from '@mui/material'

export const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 32px);
  height: 40px;
  padding: 16px;
  margin-top: auto;
`;

export const ButtonStyled = styled(Button)`
  border-radius: 4px;
`;