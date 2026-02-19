import RacketList from '@/components/rackets/RacketsList';
import RacketListSkeleton from '@/components/rackets/RacketsListSkeleton';
import Top10Rackets from '@/components/rackets/Top10Rackets';
import MainTitle from '@/components/ui/mainTitle';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="main p-3.5 flex-col">
      <MainTitle title="Ракетки" />
      <Suspense fallback={<RacketListSkeleton title="Топ-10 ракеток" />}>
        <Top10Rackets />
      </Suspense>
      <Suspense fallback={<RacketListSkeleton title="Ракетки" />}>
        <RacketList limit={10} page={1} />
      </Suspense>
    </main>
  );
}
