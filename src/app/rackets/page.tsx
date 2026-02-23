import RacketList from '@/components/rackets/RacketsList';
import RacketListSkeleton from '@/components/rackets/RacketsListSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  description: 'Ракетки для тенниса',
  title: 'Ракетки',
};

export default function Rackets() {
  return (
    <main className="main">
      <Suspense
        fallback={<RacketListSkeleton title="Ракетки" renderNumber={20} />}
      >
        <RacketList limit={20} page={1} />
      </Suspense>
    </main>
  );
}
