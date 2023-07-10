import React, { ReactNode } from 'react'

import { Table, TableContainer } from '@mui/material';

interface TableRootProps {
  children: ReactNode;
  size?: "small" | "medium" | undefined;
  ariaLabel?: string | undefined;
}

export const TableRoot: React.FC<TableRootProps> = ({ children, size, ariaLabel }) => {
  return (
    <TableContainer>
      <Table size={size} aria-label={ariaLabel}>
        {children}
      </Table>
    </TableContainer>
  );
};