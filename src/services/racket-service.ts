import { BASE_URL } from '@/utils/constants';
import { IRacket, Response } from '@/utils/types.dto';
import { notFound } from 'next/navigation';

const getTop10Rackets = async (): Response<IRacket[]> => {
  const res = await fetch(`${BASE_URL}/top-10`, {
    next: { tags: ['getTop10Rackets'] },
  });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    return { isError: true, data: [] };
  }
  return { isError: false, data: await res.json() };
};

export default getTop10Rackets;
