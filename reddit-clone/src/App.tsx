import { default as logo } from './assets/atom.svg';
import { default as arrowUp } from './assets/arrow-up.svg';
import { default as arrowDown } from './assets/arrow-down.svg';
import { default as comment } from './assets/comment.svg';
import { abbreviateNumber, randInt } from "./helpers/helpers";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
    </>
  );
}

function Navbar() {
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

function Main() {
  return (
    <main className="container mx-auto pt-5 gap-5 grid grid-cols-12 mb-10">
      <div className="col-span-9">
        <TopCard />
        <div className="flex flex-col space-y-3">
          {[...Array.from(new Array(20), (x, i) => i)].map(() => <PostCard />)}
        </div>
      </div>
      <div className="col-span-3">
        <TopCard />
      </div>
    </main>
  );
}

function PostCard() {
  return (
    <div className="border border-gray-300 rounded-md shadow bg-white flex justify-between pr-10">
      <div className="flex">
        <div className="p-4 flex flex-col justify-center space-y-1 bg-gray-100 rounded-l-lg items-center">
          <img alt="" src={arrowUp} className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md" />
          <span className="font-bold">{abbreviateNumber(randInt(500, 40000))}</span>
          <img alt="" src={arrowDown} className="h-5 w-5 cursor-pointer hover:bg-gray-200 rounded-md" />
        </div>
        <div className="flex flex-col justify-center py-5 pl-5">
          <div className="text-lg font-semibold text-gray-400">
            <span className="cursor-pointer">Post title</span>
          </div>
          <div className="flex space-x-1">
            <span className="font-bold">r/Something</span>
            <span>•</span>
            <span className="text-gray-500">Posted by u/Someone</span>
          </div>
          <span className="text-sm text-gray-400">4 hours ago</span>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <span>{randInt(1, 500)}</span>
        <img alt="" src={comment} className="h-5 w-5" />
      </div>
    </div>
  );
}

function TopCard() {
  return (
    <div className="border border-gray-300 rounded-md shadow w-full bg-white p-5 space-x-2 flex mb-5 overflow-auto">
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none hover:bg-gray-200">
        Hot
      </div>
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none hover:bg-gray-200">
        New
      </div>
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none hover:bg-gray-200">
        Top
      </div>
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none hover:bg-gray-200">
        Rising
      </div>
    </div>
  );
}

export default App;
