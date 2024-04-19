import axios from "axios";
import { baseUrlBookings } from "../utils/connectionUrl";

// /getAllBookings

export async function getBookingApi() {
  try {
    const response = await axios.get(`${baseUrlBookings}/getAllBookings`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}
