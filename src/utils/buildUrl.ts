import { ISearchParams } from './types.dto';

function buildUrl(baseUrl: string, params: ISearchParams) {
  const url = new URL(baseUrl);
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, value);
    }
  });

  url.search = searchParams.toString();
  return url.toString();
}

export default buildUrl;
