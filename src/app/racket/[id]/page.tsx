import { rackets } from '@/utils/mocks';
import { IRacket } from '@/utils/types.dto';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const staticRackets = rackets.slice(0, 3);

  return staticRackets.map((racket) => ({
    id: racket.id.toString(),
  }));
}

function getRacket(id: string): IRacket | undefined {
  return rackets.find((racket) => racket.id === parseInt(id));
}

export default async function RacketPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const racket = getRacket(id);
  if (!racket) {
    notFound();
  }

  return (
    <main className="main grid grid-cols-2 gap-4">
      <div className="">
        {racket.description}
        <hr />
        <span className="block mt-3 font-bold">Цена: {racket.price} у.е.</span>
      </div>

      <div>
        <Image
          className="w-full"
          src={racket.imageUrl}
          alt={racket.name}
          width={200}
          height={250}
          unoptimized={true}
        />
      </div>
    </main>
  );
}
