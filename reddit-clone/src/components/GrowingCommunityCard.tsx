export function GrowingCommunityCard() {
  return (
    <div className="rounded-lg shadow bg-white border border-gray-300 flex flex-col">
      <span className="text-xl font-bold p-5 bg-gray-700 rounded-t-lg text-white">Todays top growing communities</span>
      <div className="flex flex-col divide-y-2">
        <div className="flex space-x-3 items-center font-bold text-lg py-3 px-6">
          <span className="mr-4">1</span>
          <img src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4" alt="" className="h-12 w-12 rounded-full" />
          <span>r/Something</span>
        </div>
        <div className="flex space-x-3 items-center font-bold text-lg py-3 px-6">
          <span className="mr-4">2</span>
          <img src="https://avatars.githubusercontent.com/u/36193643?s=460&u=476cacf3518a2a0914c512b60ea1b046413900cf&v=4" alt="" className="h-12 w-12 rounded-full" />
          <span>r/Test</span>
        </div>
        <div className="flex space-x-3 items-center font-bold text-lg py-3 px-6">
          <span className="mr-4">3</span>
          <img src="https://avatars.githubusercontent.com/u/23244943?s=460&u=6b1bf39c56f0f912e44b4e1dd2e23d3c16ef363e&v=4" alt="" className="h-12 w-12 rounded-full" />
          <span>r/ManualTransmission</span>
        </div>
        <div className="flex space-x-3 items-center font-bold text-lg py-3 px-6">
          <span className="mr-4">4</span>
          <img src="https://avatars.githubusercontent.com/u/25419386?s=460&u=ae6e8825ede13269c7b08b857b16cedfd22cc85f&v=4" alt="" className="h-12 w-12 rounded-full" />
          <span>r/Bruh</span>
        </div>
        <div className="flex space-x-3 items-center font-bold text-lg py-3 px-6">
          <span className="mr-4">5</span>
          <img src="https://avatars.githubusercontent.com/u/39437117?s=460&u=638d6f7e06918577752a4f19e3a694590c83d446&v=4" alt="" className="h-12 w-12 rounded-full" />
          <span>r/Testing</span>
        </div>
      </div>
    </div>
  );
}