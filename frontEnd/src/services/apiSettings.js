import axios from "axios";
import { baseUrlSettings } from "../utils/connectionUrl";

export async function getSettings() {
  try {
    const response = await axios.get(`${baseUrlSettings}/getAllSettings`);
    // http://127.0.0.1:3000/api/setting/v1/getAllSettings
    // console.log(response.data.docs[0]);
    return response.data.docs[0];
  } catch (err) {
    console.log("Error fetching settings:", err.message);
    return null;
  }
}

export async function editSettingsApi(id, newSettingData) {
  try {
    // console.log(id, newSettingData);
    const response = await axios.patch(
      `${baseUrlSettings}/editSetting/${id}`,
      newSettingData
    );
    return response;
  } catch (err) {
    console.log("Error fetching settings:", err.message);
    return null;
  }
}
