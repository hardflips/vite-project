/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReqResApi } from '../../constants'
import { AuthType } from './types'

async function fetcher(url: string, options: RequestInit | undefined) {
  const response = await fetch(url, options);
  if (response.status === 400) {
    return {
      error: new Error('Usuário não encontrado.'),
    };
  }
  if (!response.ok) {
    return {
      error: new Error('Erro na requisição.'),
    };
  }
  return response.json();
}

export const authenticate = async ({ email, password }: AuthType) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  const { token, error } = await fetcher(`${ReqResApi.BASE_URL + ReqResApi.LOGIN}`, options);
  return {
    token,
    error,
  };
}