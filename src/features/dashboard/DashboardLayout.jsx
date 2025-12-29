import styled from "styled-components";

import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Stats from "./Stats";

import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {
    bookings,
    isLoading: isBookingsLoading,
    numDays,
  } = useRecentBookings();
  const { stays, isLoading: isStaysLoading } = useRecentStays();
  const { cabins, isLoading: isCabinsLoading } = useCabins();
  console.log({ bookings, stays, cabins });
  if (isBookingsLoading || isStaysLoading || isCabinsLoading)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={stays}
        numDays={numDays}
        cabinsNum={cabins.length}
      />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
