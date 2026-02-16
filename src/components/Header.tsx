import NavMenu from './ui/navMenu';

export default function Header() {
  return (
    <div className="flex justify-between p-3 shadow border border-amber-200 h-[50]">
      <div className="grow text-center">Tennis Store</div>
      <NavMenu />
    </div>
  );
}
