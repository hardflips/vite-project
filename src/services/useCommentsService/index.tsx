/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from 'swr'

import { JSONPlaceholderApi } from '../../constants'
import { CommentType } from './types'
import { PaginationProps } from '../types'

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Recurso não encontrado');
  }
  return response.json();
}

export const useCommentsService = ({ start, limit }: PaginationProps) => {
  const { data, error } = useSWR<CommentType[]>(`${JSONPlaceholderApi.BASE_URL + JSONPlaceholderApi.COMMENTS}?_start=${start}&_limit=${limit}`, fetcher);
  const history = [
    {
      title: 'João Silva',
      count: 2,
      date: '2023-07-09T19:30:00',
    },
    {
      title: 'Maria José',
      count: 3,
      date: '2023-10-10T19:30:00',
    },
    {
      title: 'José Carlos',
      count: 10,
      date: '2023-11-23T19:30:00',
    }
  ]
  return {
    comments: data?.map((item) => ({
      ...item,
      history,
    })),
    error,
  };
}