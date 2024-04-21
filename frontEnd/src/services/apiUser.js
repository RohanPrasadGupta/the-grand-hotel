const userURL = "https://backend-deploy-production-fe8b.up.railway.app/";
// const userURL = "http://127.0.0.1:3000/api";

import axios from "axios";

export async function registerUser(userData) {
  try {
    const response = await axios.post(`${userURL}api/hotel/v1/user`, userData);
    // console.log(response.data);
    return response;
  } catch (err) {
    console.log("Error fetching settings:", err.message);
    return err.message;
  }
}

export async function getUsers(userLoginData) {
  try {
    // console.log(userLoginData);
    const response = await axios.post(
      `${userURL}/hotel/v1/loginUser`,

      userLoginData
    );
    // console.log(response);
    return response;
  } catch (err) {
    // console.log("Error fetching settings:", err.response);
    return err.response;
  }
}
