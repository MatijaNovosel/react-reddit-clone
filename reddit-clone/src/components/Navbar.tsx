import { default as logo } from '../assets/atom.svg';

export function Navbar() {
  return (
    <nav className="bg-gray-100 w-full shadow h-16 px-6 top-0 sticky justify-between items-center flex">
      <div className="text-black flex items-center space-x-1 select-none">
        <img alt="" src={logo} className="mr-3 h-8" />
        (Not) <span className="font-bold text-xl">Reddit</span>
      </div>
      <div>
        <input placeholder="Search" type="text" className="bg-gray-200 px-3 py-2 rounded-lg text-sm w-64 focus:outline-none" />
      </div>
      <div className="space-x-2">
        <button type="button" className="rounded-md bg-gray-500 text-white px-4 py-1 focus:outline-none">Log in</button>
        <button type="button" className="rounded-md bg-gray-700 text-white px-4 py-1 focus:outline-none">Sign up</button>
      </div>
    </nav>
  );
}