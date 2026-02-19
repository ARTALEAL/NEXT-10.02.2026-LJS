import RacketCard from '@/components/ui/racketCard';
import { IRacket, ISearchParams } from '@/utils/types.dto';
import getRacketsWithSearchParams from '@/services/racket-service-with-search params';

export default async function RacketList(searchParams: ISearchParams) {
  const { data } = await getRacketsWithSearchParams(searchParams);

  return (
    <>
      <h2 className="text-4xl p-3.5">Ракетки</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {data?.map((racket: IRacket) => {
          return <RacketCard key={racket.id} racketData={racket} />;
        })}
      </ul>
    </>
  );
}
