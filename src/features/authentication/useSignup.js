import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),

    onSuccess: () => {
      toast.success("Account created successfully! Please verify your email.");
    },

    onError: () => {
      toast.error("Failed to create account. Please try again.");
    },
  });

  return { signup, isPending };
}
