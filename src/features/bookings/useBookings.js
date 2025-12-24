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

  // Sort
  const sortByParam = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByParam.split("-");
  const sortBy = { field, direction };

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isPending, bookings, error };
}
