import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filtervalue = searchParams.get("status");
  const filter =
    !filtervalue || filtervalue === "all"
      ? null
      : { field: "status", value: filtervalue };

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isPending, bookings, error };
}
