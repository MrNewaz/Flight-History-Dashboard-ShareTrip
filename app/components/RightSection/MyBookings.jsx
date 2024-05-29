import FlightDetails from "./FlightDetails"
import FlightHistory from "./FlightHistory"

const MyBookings = () => {
  return (
    <div className="bg-white w-full flex flex-col flex-1 rounded-lg shadow-sm gap-4">
      <FlightHistory />
      <FlightDetails />
    </div>
  )
}

export default MyBookings
