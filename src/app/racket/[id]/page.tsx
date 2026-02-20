import getRacketById from '@/services/racket-service-get-by-id';
import getRacketMetaById from '@/services/racket-service-getMeta-by-id';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const { data } = await getRacketMetaById(id);

  return {
    title: data?.name,
    description: data?.description,
  };
}

export default async function RacketPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { data } = await getRacketById(id);
  if (!data) {
    notFound();
  }

  return (
    <main className="main grid grid-cols-2 gap-4">
      <div className="">
        {data.name}
        <hr />
        <span className="block mt-3 font-bold">Цена: {data.price} у.е.</span>
      </div>

      <div>
        <Image
          className="w-full"
          src={data.imageUrl}
          alt={data.name}
          width={200}
          height={250}
          unoptimized={true}
        />
      </div>
    </main>
  );
}
