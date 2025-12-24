import { useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Filter
  const filtervalue = searchParams.get("status");
  const filter = useMemo(
    () =>
      !filtervalue || filtervalue === "all"
        ? null
        : { field: "status", value: filtervalue },
    [filtervalue]
  );

  // Sort
  const sortByParam = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByParam.split("-");
  const sortBy = useMemo(() => ({ field, direction }), [field, direction]);

  // Pagination
  const page = parseInt(searchParams.get("page") || "1", 10);

  // query
  const {
    isPending,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // prefetch
  const pageCount = Math.ceil(count / PAGE_SIZE);

  useEffect(() => {
    if (!count) return;

    if (page < pageCount) {
      queryClient.ensureQueryData({
        queryKey: ["bookings", filter, sortBy, page + 1],
        queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      });
    }

    if (page > 1) {
      queryClient.ensureQueryData({
        queryKey: ["bookings", filter, sortBy, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      });
    }
  }, [count, filter, sortBy, page, pageCount, queryClient]);

  return { isPending, bookings, error, count };
}
