import React, { ElementType, ReactNode } from 'react'

import { TableCellBaseProps, TableCell as TableCellMui } from '@mui/material';

interface TableCellProps {
  children?: ReactNode;
  align?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  padding?: "checkbox" | "none" | "normal" | undefined;
  onClick?: () => void;
  component?: ElementType<TableCellBaseProps> | undefined;
  scope?: string;
  colSpan?: number | undefined;
}

export const TableCell: React.FC<TableCellProps> = ({ 
  children,
  align,
  padding,
  onClick,
  component,
  scope,
  colSpan
}) => {
  return (
    <TableCellMui
      align={align}
      padding={padding}
      onClick={onClick}
      scope={scope}
      component={component}
      colSpan={colSpan}
      sx={{ cursor: 'pointer' }}
    >
      {children}
    </TableCellMui>
  );
};