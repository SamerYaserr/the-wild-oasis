import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import State from "./Stat";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinsNum,
}) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const confirmedStaysNum = confirmedStays.length;
  const occupationRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsNum);

  return (
    <>
      <State
        title="bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <State
        title="sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <State
        title="check-ins"
        color="indigo"
        value={confirmedStaysNum}
        icon={<HiOutlineCalendarDays />}
      />
      <State
        title="occupation rate"
        color="yellow"
        value={Math.round(occupationRate * 100) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}
