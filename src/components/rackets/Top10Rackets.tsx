import RacketCard from '@/components/ui/racketCard';
import { IRacket } from '@/utils/types.dto';
import getTop10Rackets from '@/services/racket-service';

export default async function Top10Rackets() {
  const { data } = await getTop10Rackets();

  return (
    <>
      <h2 className="text-4xl p-3.5">Топ-10 ракеток</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {data?.map((racket: IRacket) => {
          return <RacketCard key={racket.id} racketData={racket} />;
        })}
      </ul>
    </>
  );
}
