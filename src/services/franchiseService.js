import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/franchises/`;

// GET A FRANCHISE
export const show = async (franchiseId) => {
  try {
    const headers = {};
    // const token = localStorage.getItem("token");
    // if (token) headers.Authorization = `Bearer ${token}`;

    const res = await axios.get(`${BASE_URL}${franchiseId}/`, { headers });
    if (!res.data) {
      throw new Error("Error something went wrong fetching a franchise");
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
