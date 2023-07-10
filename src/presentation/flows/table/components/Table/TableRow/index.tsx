import React, { ReactNode } from 'react'

import { SxProps, TableRow as TableRowMui, Theme } from '@mui/material'

interface TableRowProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}

export const TableRow: React.FC<TableRowProps> = ({ children, sx }) => {
  return (
    <TableRowMui sx={sx}>
      {children}
    </TableRowMui>
  );
};