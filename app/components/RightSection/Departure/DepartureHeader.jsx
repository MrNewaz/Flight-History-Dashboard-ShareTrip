import Location from "@/app/icons/Location"

const DepartureHeader = () => {
  return (
    <div className="w-full px-4">
      <div className="w-full flex flex-row items-center gap-4">
        <Location />
        <div className="bg-[#F5F7FA] w-full flex flex-row items-center p-5 h-10 rounded-lg">
          <p className="flex-1 text-[13px] text-[#1A2B3D] font-medium">
            Departure from Dhaka
          </p>
          <p className="text-[13px] text-[#5A6573] font-medium">
            Terminal 1:{" "}
            <span className="font-normal">
              Hazrat Shahjalal International Airport
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DepartureHeader
