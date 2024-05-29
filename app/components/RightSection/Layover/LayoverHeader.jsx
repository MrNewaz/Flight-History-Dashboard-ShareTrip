import Location from "@/app/icons/Location"

const LayoverHeader = () => {
  return (
    <div className="w-full px-4">
      <div className="w-full flex flex-row items-center gap-4">
        <Location />
        <div className="bg-[#E8F3FF] w-full flex flex-row items-center p-5 h-10 rounded-lg">
          <p className="flex-1 text-[13px] text-[#1A2B3D] font-medium">
            Layover at Dubai: 12 hr 20 min
          </p>
          <p className="text-[13px] text-[#5A6573] font-normal">
            Dubai International Airport
          </p>
        </div>
      </div>
    </div>
  )
}

export default LayoverHeader
