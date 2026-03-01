import { BASE_URL } from '@/utils/constants';
import { IRacket, Response } from '@/utils/types.dto';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

type ApiResponse<T> = {
  product: T;
};

const getRacketById = async (id: string): Response<IRacket> => {
  const cookieStore = await cookies();
  const res = await fetch(`${BASE_URL}/product/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    return { isError: true, data: undefined };
  }
  const data: ApiResponse<IRacket> = await res.json();
  return { isError: false, data: data.product };
};

export default getRacketById;
