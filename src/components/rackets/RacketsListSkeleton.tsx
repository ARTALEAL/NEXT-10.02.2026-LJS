interface IProps {
  title: string;
}
export default async function RacketListSkeleton({ title }: IProps) {
  return (
    <>
      <h2 className="text-4xl p-3.5">{title}</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
        <li className="flex-col">
          <div className="border border-gray-500 p-2.5 w-[200] h-[250] bg-gray-400"></div>
          <span className="text-gray-500">Загрузка...</span>
        </li>
      </ul>
    </>
  );
}
