import axios from "axios";

const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

export const updateData = async (url, Data) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/${url}`, Data, {
      headers: headers,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
