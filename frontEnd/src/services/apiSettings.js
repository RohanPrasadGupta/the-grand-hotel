import axios from "axios";
import { baseUrlSettings } from "../utils/connectionUrl";

export async function getSettings() {
  try {
    const response = await axios.get(`${baseUrlSettings}/getAllSettings`);
    console.log(response.data);
    return response;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}
