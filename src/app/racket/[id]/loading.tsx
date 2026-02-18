export default function RacketPageSkeleton() {
  return (
    <main className="main grid grid-cols-2 gap-4">
      <div className="">
        Загрузка...
        <hr />
        <span className="block mt-3 font-bold">Цена: Загрузка...</span>
      </div>

      <div className="w-50 h-75 bg-gray-400"></div>
    </main>
  );
}
