/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async';

import {
  Alert,
  Checkbox,
  Grid,
  LinearProgress,
  Pagination,
} from '@mui/material';
import { Table } from './components/Table'
import { RoutesNameEnum } from '../../../routes/routePathsEnum';
import { useCommentsService } from '../../../services/useCommentsService';

const TablePage: React.FC = () => {
  const [currentPageState, setCurrentPageState] = useState(1);
  const limit = 8;
  const start = (currentPageState - 1) * limit;
  const { comments, error } = useCommentsService({ start, limit});
  const [selected, setSelected] = useState<readonly string[]>([]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPageState(page);
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    console.log('newSelected', newSelected);

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = comments ? comments.map((n) => n.id.toString()) : [];
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const renderLoading = () => {
    return !comments ? <LinearProgress /> : null;
  }

  const renderHeadTable = () => {
    return (
      <Table.Head>
        <Table.Row>
          <Table.Cell
            padding="checkbox"
          >
            <Checkbox
              color="primary"
              onChange={handleSelectAllClick}
              checked={selected.length === comments?.length}
              inputProps={{
                'aria-label': 'select all',
              }}
            />
          </Table.Cell>
          <Table.Cell align="left">Título</Table.Cell>
          <Table.Cell align="left">E-mail</Table.Cell>
          <Table.Cell align="left">Mensagem</Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Head>
    )
  }
  
  const renderTable = () => {
    return (
        <Table.Root aria-label="collapsible table">
          {renderHeadTable()}
          <Table.Body>
            {comments && comments.map((row) => (
              <Table.CollapseRow 
                key={row.id}
                row={row}
                isSelected={isSelected}
                handleClick={handleClick}
              />
            ))}
          </Table.Body>
        </Table.Root>
    );
  }

  const renderPagination = () => {
    return (
      comments && comments.length > 0 ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingTop={2}
          paddingBottom={2}
        >
          <Pagination
            count={Math.ceil(100 / limit)}
            page={currentPageState}
            onChange={handlePageChange}
            color="primary"
          />
        </Grid>
      ) : null
    )
  }

  if (error) {
    return <Alert severity="error">{error?.message}</Alert>;
  }

  if (comments && comments.length === 0) {
    return <Alert severity="warning">Nenhum dado encontrado.</Alert>
  }

  return <React.Fragment>
    <Helmet>
      <title>{RoutesNameEnum.TABLE}</title>
    </Helmet>
    {renderLoading()}
    {renderTable()}
    {renderPagination()}
  </React.Fragment>;
};

export default TablePage;