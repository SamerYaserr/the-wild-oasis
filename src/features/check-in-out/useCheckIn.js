import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";

export function useCheckIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: checkIn, isPending: isCheckingIn } = useMutation({
    mutationFn: async (bookingId) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/bookings/${data.id}`);
    },

    onError: () => {
      toast.error("Failed to check in the booking. Please try again.");
    },
  });

  return { checkIn, isCheckingIn };
}
