import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/series/`;

// GET ALL SERIES
export const index = async () => {
  try {
    const headers = {};
    // const token = localStorage.getItem("token");
    // if (token) headers.Authorization = `Bearer ${token}`;

    const res = await axios.get(BASE_URL, { headers });
    if (!res.data) {
      throw new Error("Error something went wrong fetching all series");
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// GET A SERIES
export const show = async (seriesId) => {
  try {
    const headers = {};
    // const token = localStorage.getItem("token");
    // if (token) headers.Authorization = `Bearer ${token}`;

    const res = await axios.get(`${BASE_URL}${seriesId}/`, { headers });
    if (!res.data) {
      throw new Error("Error something went wrong fetching a series");
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};