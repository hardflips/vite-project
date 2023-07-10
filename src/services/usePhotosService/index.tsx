/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from 'swr'

import { JSONPlaceholderApi } from '../../constants'
import { PhotoType } from './types'
import { PaginationProps } from '../types'

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Recurso não encontrado');
  }
  return response.json();
}

export const usePhotosService = ({ start, limit }: PaginationProps) => {
  const { data, error } = useSWR<PhotoType[]>(`${JSONPlaceholderApi.BASE_URL + JSONPlaceholderApi.PHOTOS}?_start=${start}&_limit=${limit}`, fetcher);
  return {
    photos: data,
    error
  };
}