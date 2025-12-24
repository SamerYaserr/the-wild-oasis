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

  // Pagination
  const page = parseInt(searchParams.get("page") || "1", 10);

  const {
    isPending,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isPending, bookings, error, count };
}
