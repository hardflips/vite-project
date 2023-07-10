import React, { ReactNode } from 'react'

import { TableHead as TableHeadMui } from '@mui/material';

interface TableHeadProps {
  children: ReactNode;
}

export const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return <TableHeadMui>{children}</TableHeadMui>;
};