import MainTitle from '@/components/ui/mainTitle';
import { rackets } from '../utils/mocks';
import RacketCard from '@/components/ui/racketCard';
import { IRacket } from '@/utils/types.dto';

const data: IRacket[] = rackets.slice(0, 3);

export default function Home() {
  return (
    <main className="main p-3.5 flex-col">
      <MainTitle title="Ракетки" />
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {data.map((racket: IRacket) => {
          return <RacketCard key={racket.id} racketData={racket} />;
        })}
      </ul>
    </main>
  );
}
