import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  margin-top: 16px;
  padding: 0 16px;
`;

export const TypographyStyled = styled(Typography)<{ component: string; }>`
  &:first-letter {
    text-transform: uppercase;
  }
`;