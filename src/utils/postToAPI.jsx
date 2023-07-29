import axios from "axios";

const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

export const postToAPI = async (url, Data) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${url}`, Data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
