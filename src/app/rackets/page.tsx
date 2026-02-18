import RacketList from '@/components/rackets/RacketsList';
import RacketListSkeleton from '@/components/rackets/RacketsListSkeleton';
import { Suspense } from 'react';

export default function Rackets() {
  return (
    <main className="main">
      <Suspense fallback={<RacketListSkeleton title="Ракетки" />}>
        <RacketList limit={20} page={1} />
      </Suspense>
    </main>
  );
}
