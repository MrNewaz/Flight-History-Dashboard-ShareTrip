import RightArrow from "@/app/icons/RightArrow"

const Breadcrumbs = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <p className="text-[13px] text-[#5A6573]">Home</p>
      <RightArrow />
      <p className="text-[13px] text-[#5A6573]">Booking History</p>
      <RightArrow />
      <p className="text-[13px] text-[#5A6573]">Flight</p>
      <RightArrow />
      <p className="text-[13px] text-[#1882FF] font-medium">
        STFL17121182045413
      </p>
    </div>
  )
}

export default Breadcrumbs
