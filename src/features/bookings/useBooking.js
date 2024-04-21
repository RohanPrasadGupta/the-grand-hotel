import { useQuery } from "@tanstack/react-query";
import { getBookingApi } from "../../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookingApi,
  });

  return { isLoading, bookings, error };
}
