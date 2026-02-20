import { BASE_URL } from '@/utils/constants';
import { IRacket, Response } from '@/utils/types.dto';
import { notFound } from 'next/navigation';

type ApiResponse<T> = {
  product: T;
};

const getRacketMetaById = async (id: string): Response<IRacket> => {
  const res = await fetch(`${BASE_URL}/meta/product/${id}`);
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    return { isError: true, data: undefined };
  }
  const data: ApiResponse<IRacket> = await res.json();
  return { isError: false, data: data.product };
};

export default getRacketMetaById;
