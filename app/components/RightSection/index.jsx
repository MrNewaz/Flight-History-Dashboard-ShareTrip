import Breadcrumbs from "./Breadcrumbs"
import MyBookings from "./MyBookings"

const RightSection = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <Breadcrumbs />
      <MyBookings />
    </div>
  )
}

export default RightSection
