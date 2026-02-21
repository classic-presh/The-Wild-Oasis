import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Bookings
  const numBookings = bookings.length;

  // 2. Sales
  const paidBookings = bookings.filter((booking) => booking.isPaid === true);
  const sales = paidBookings.reduce(
    (acc, booking) => acc + booking?.totalPrice,
    0,
  );

  // 3. Check ins
  const checkins = confirmedStays.length;

  // 4. Occupancy rate
  const occupiedNights = confirmedStays.reduce(
    (acc, stay) => acc + stay.numNights,
    0,
  );
  const occupancyRate = (occupiedNights / (numDays * cabinCount)) * 100;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRate) + "%"}
      />
    </>
  );
}

export default Stats;
