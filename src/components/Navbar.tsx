export default function Navbar() {
  return (
    <div className="fixed z-[9999] top-0 right-0 left-0">
      <div className="flex items-center justify-between px-20 py-8">
        <div className="flex flex-col">
          <h1 className="text-[35px] font-bold text-neutral-50">AnyMe.</h1>
          <p className="text-violet-400 text-sm mt-[-10px]">
            (によって リフキー)
          </p>
        </div>
        <nav className="flex items-center gap-x-8 text-neutral-50 text-lg font-semibold">
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
        </nav>
      </div>
    </div>
  );
}
