import buildUrl from '@/utils/buildUrl';
import { BASE_URL } from '@/utils/constants';
import { IRacket, ISearchParams, Response } from '@/utils/types.dto';
import { notFound } from 'next/navigation';

const getRacketsWithSearchParams = async (
  params: ISearchParams,
): Response<IRacket[]> => {
  const url = buildUrl(`${BASE_URL}/products`, params);
  const res = await fetch(url);
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    return { isError: true, data: [] };
  }
  return { isError: false, data: await res.json() };
};

export default getRacketsWithSearchParams;
