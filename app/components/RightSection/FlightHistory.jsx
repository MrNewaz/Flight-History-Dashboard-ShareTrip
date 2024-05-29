const FlightHistory = () => {
  return (
    <div className="p-4 border-[#EBF0F5] border-b flex flex-row items-center w-full gap-4">
      <p className="h-6 w-6 text-center bg-[#1882FF] rounded-full text-sm font-semibold text-white">
        1
      </p>
      <div className="flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-[#1A2B3D]">DAC → JFK</h2>
        <div className="flex flex-row items-center gap-1">
          <p className="text-[13px] text-[#5A6573]">Round Trip</p>
          <p className="text-[13px] text-[#5A6573]">•</p>
          <p className="text-[13px] text-[#5A6573]">25 Mar - 4 Apr 2023</p>
          <p className="text-[13px] text-[#5A6573]">•</p>
          <p className="text-[13px] text-[#5A6573]">1 Stop</p>
        </div>
      </div>
      <p className="text-center bg-[#E8F3FF] py-1 px-2 rounded-full text-xs font-medium text-nowrap text-[#1882FF]">
        33h 20m
      </p>
    </div>
  )
}

export default FlightHistory
