import RacketSkeleton from './RacketSkeleton';

interface IProps {
  title: string;
  renderNumber?: number;
}
export default async function RacketListSkeleton({
  title,
  renderNumber = 10,
}: IProps) {
  const renderArr = new Array(renderNumber).fill(1);
  return (
    <>
      <h2 className="text-4xl p-3.5">{title}</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {renderArr.map((_, index) => {
          return <RacketSkeleton key={index} />;
        })}
      </ul>
    </>
  );
}
