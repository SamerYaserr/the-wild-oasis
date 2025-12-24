import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";

export function useCheckOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: async (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/bookings/${data.id}`);
    },

    onError: () => {
      toast.error("Failed to check out the booking. Please try again.");
    },
  });

  return { checkOut, isCheckingOut };
}
