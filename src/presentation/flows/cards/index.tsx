/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Alert, Grid, LinearProgress, Pagination } from '@mui/material'
import { RoutesNameEnum } from '../../../routes/routePathsEnum'
import { usePhotosService } from '../../../services/usePhotosService'
import { PhotoType } from '../../../services/usePhotosService/types'
import { Photo } from './components/Photo'

const CardPage: React.FC = () => {
  const [currentPageState, setCurrentPageState] = useState(1);
  const limit = 8;
  const start = (currentPageState - 1) * limit;
  const { photos, error} = usePhotosService({ start, limit});

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPageState(page);
  };

  const renderLoading = () => {
    return !photos ? <LinearProgress /> : null
  }

  const renderPhotos = (photo: PhotoType) => {
    return (
      <Grid item xs={3} key={photo.id}>
        <Photo.Root>
          <Photo.Image imageUrl={photo.thumbnailUrl}/>
          <Photo.Title title={photo.title}/>
          <Photo.Action hasAction={false} />
        </Photo.Root>
      </Grid>
    )
  }

  const renderAlbum = () => {
    return (
      <Grid container spacing={2}>
        {photos ? photos.map((photo: PhotoType) => renderPhotos(photo)) : null}
      </Grid>
    )
  }

  const renderPagination = () => {
    return (
      photos && photos.length > 0 ? (
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
    return <Alert severity="error">{error.message}</Alert>;
  }

  if (photos && photos.length === 0) {
    return <Alert severity="warning">Nenhuma foto encontrada.</Alert>
  }

  return <React.Fragment>
    <Helmet>
      <title>{RoutesNameEnum.CARDS}</title>
    </Helmet>
    {renderLoading()}
    {renderAlbum()}
    {renderPagination()};
  </React.Fragment>;
};

export default CardPage;
