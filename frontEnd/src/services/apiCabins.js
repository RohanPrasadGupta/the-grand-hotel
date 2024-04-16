import { baseUrlCabin } from "../utils/connectionUrl";
import axios from "axios";

// baseurl = http://127.0.0.1:3000/api/cabin/v1/
export async function getCabins() {
  try {
    const response = await axios.get(`${baseUrlCabin}/getCabins`);
    return response.data.docs;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

export async function createCabin(cabinData) {
  try {
    const response = await axios.post(`${baseUrlCabin}createCabin`, cabinData);
    return response.data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

export async function getCabin() {
  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/cabin/v1/getCabin/661cd31fe9f17ddc323fc248",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteCabin(id) {
  try {
    const response = await axios.delete(`${baseUrlCabin}/getCabin/${id}`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

// try {
//   const response = await fetch(`http://127.0.0.1:3000/api/cabin/v1/${id}`, {
//     method: "DELETE",
//   });
//   const data = await response.json();
//   console.log(data);
// } catch (err) {
//   console.error("Error deleting cabin:", err);
//   throw err;
// }

// try {
// const response = await fetch(`${baseUrl}/getCabins`, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// const data = await response.json();
// return data.docs;
// } catch (err) {
//   console.log(err.message);
// }
