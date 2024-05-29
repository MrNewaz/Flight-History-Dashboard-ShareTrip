import Emirates from "@/app/icons/Emirates"
import Plane from "@/app/icons/Plane"

const LayoverBody = () => {
  return (
    <div className="w-full px-4">
      <div className="w-full flex flex-row h-full gap-4">
        <div className="flex flex-col items-center justify-between gap-2 h-full">
          <Emirates />
          <div className="bg-[#D8E1EB] w-[2px] h-full flex-1"></div>
          <Plane />
          <div className="bg-[#D8E1EB] w-[2px] h-full flex-1"></div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-row">
            <div className="flex flex-col flex-1">
              <h3 className="text-[#1A2B3D] font-semibold">DAC - DXB</h3>
              <p className="text-sm text-[#5A6573] font-normal">12 hr 20 min</p>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[#1A2B3D] font-semibold">07:30 PM</h3>
              <p className="text-sm text-[#5A6573] font-normal">
                28 Mar, Friday
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[#1A2B3D] font-semibold">08:50 AM</h3>
              <p className="text-sm text-[#5A6573] font-normal">
                29 Mar, Saturday
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-1">
              <h3 className="text-[#3E4957] font-medium text-sm">
                Turkish Airlines
              </h3>
              <p className="text-sm text-[#5A6573] font-normal">
                Flight no : TUR467
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[#5A6573]">Airbus Industries 737-800-738</h3>
              <p className="text-sm text-[#5A6573] font-normal">
                Class : <span className="font-medium">ECONOMY-Y (O)</span>
              </p>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoverBody
