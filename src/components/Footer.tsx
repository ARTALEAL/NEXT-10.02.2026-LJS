export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex-col p-3.5 border border-amber-200 h-[78]">
      <div>Tennis Store</div>
      <div className="text-gray-500">
        &copy;{` ${year} Tennis Store. All rights reserved.`}
      </div>
    </footer>
  );
}
