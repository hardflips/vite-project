import React, { ReactNode } from 'react'
import { TableBody as TableBodyMui } from '@mui/material';

interface TableBodyProps {
  children: ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <TableBodyMui>{children}</TableBodyMui>
};