export function TopCard() {
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