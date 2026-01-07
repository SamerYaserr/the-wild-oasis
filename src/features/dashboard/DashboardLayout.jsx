import styled from "styled-components";

import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {
    bookings,
    isPending: isBookingsPending,
    numDays,
  } = useRecentBookings();
  const { confirmedStays, isPending: isStaysPending } = useRecentStays();
  const { cabins, isPending: isCabinsPending } = useCabins();
  if (isBookingsPending || isStaysPending || isCabinsPending)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsNum={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart numDays={numDays} bookings={bookings} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
