import React, { useState } from 'react'
import { format } from 'date-fns';
import {
  Box, 
  Collapse,
  IconButton,
  TableBody,
  TableHead,
  TableCell,
  TableRow as TableRowMui,
  Checkbox,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Table } from '../index'
import { CommentType, HistoryType } from '../../../../../../services/useCommentsService/types';

interface TableCollapseRowProps {
  row: CommentType;
  isSelected?: (arg: string) => boolean;
  handleClick?: (event: React.MouseEvent<unknown>, id: string) => void;
}

export const TableCollapseRow: React.FC<TableCollapseRowProps> = ({
  row,
  isSelected,
  handleClick,
}) => {
    const [open, setOpen] = useState(false);
    const isItemSelected = isSelected ? isSelected(row.id.toString()) : false;

  return (
    <React.Fragment>
      <Table.Row sx={{ backgroundColor: isItemSelected ? '#f2f2f2' : 'white'}}>
        <Table.Cell padding="checkbox">
          <Checkbox
            color="primary"
            checked={isItemSelected}
            inputProps={{
              'aria-label': 'select all',
            }}
            onClick={(event) => handleClick && handleClick(event, row.id.toString())}
          />
        </Table.Cell>
        <Table.Cell
          component="td"
          onClick={() => setOpen(!open)}
        >
          {row.name}
        </Table.Cell>
        <Table.Cell
          component="td"
          align="left"
          onClick={() => setOpen(!open)}
        >
          {row.email}
        </Table.Cell>
        <Table.Cell
          component="td"
          align="left"
          onClick={() => setOpen(!open)}
        >
          {row.body}
        </Table.Cell>
        <Table.Cell
          component="td"
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Table.Cell>
      </Table.Row>
      <TableRowMui sx={{ backgroundColor: '#f2f2f2'}}>
        <TableCell style={{ paddingBottom: open ? 16 : 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table.Root size="small" aria-label="purchases">
                <TableHead>
                  <TableRowMui>
                    <TableCell>Nome</TableCell>
                    <TableCell align="left">Quantidade</TableCell>
                    <TableCell align="right">Data</TableCell>
                  </TableRowMui>
                </TableHead>
                <TableBody>
                  {row?.history && row?.history?.map((historyRow: HistoryType) => (
                    <TableRowMui key={historyRow.title}>
                      <TableCell component="th" scope="row">
                        {historyRow.title}
                      </TableCell>
                      <TableCell align="left">{historyRow.count}</TableCell>
                      <TableCell align="right">{format(new Date(historyRow.date), 'dd/MM/yyyy')}</TableCell>
                    </TableRowMui>
                  ))}
                </TableBody>
              </Table.Root>
            </Box>
          </Collapse>
        </TableCell>
      </TableRowMui>
    </React.Fragment>
  )
};