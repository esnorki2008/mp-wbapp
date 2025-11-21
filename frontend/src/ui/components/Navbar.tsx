export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-700">
          Ministerio Público
        </h1>

        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-[#00AEEF] transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.mp.gob.gt/"
              className="text-gray-700 hover:text-[#00AEEF] transition-colors duration-200"
            >
              Sitio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
