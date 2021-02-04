import { default as logo } from './assets/atom.svg';

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
    <main className="container mx-auto pt-5 gap-5 grid grid-cols-12">
      <div className="col-span-9">
        <TopCard />
        <div className="flex flex-col space-y-5">
          {[1, 2, 3, 4, 5].map(() => <PostCard />)}
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
    <div className="border border-gray-300 rounded-md shadow w-full bg-white p-5 flex flex-col space-y-2">
      <div className="flex space-x-2 items-center">
        <img src="https://avatars.githubusercontent.com/u/36193643?s=460&u=476cacf3518a2a0914c512b60ea1b046413900cf&v=4" alt="" className="rounded-full h-5 w-5 flex items-center justify-center" />
        <span>r/Something</span>
        <span className="text-gray-500">Posted by u/Someone</span>
        <span>4 hours ago</span>
      </div>
      <div className="text-xl font-bold text-gray-400">
        <span className="cursor-pointer">Post title</span>
      </div>
      <img src="https://preview.redd.it/rwitgj4ipef61.jpg?width=640&crop=smart&auto=webp&s=15ac93e425f4c5fe6639af0e0a68516b2cdc8fdd" alt="" className="h-96 rounded-md" />
      <div className="flex space-x-2 items-center">
        <span>300 Comments</span>
        <span className="text-gray-500">Share</span>
      </div>
    </div>
  );
}

function TopCard() {
  return (
    <div className="border border-gray-300 rounded-md shadow w-full bg-white p-5 space-x-2 flex mb-5 overflow-auto">
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none">
        Hot
      </div>
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none">
        New
      </div>
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none">
        Top
      </div>
      <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none">
        Rising
      </div>
    </div>
  );
}

export default App;
