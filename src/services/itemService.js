import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/items/`;

// GET ALL ITEMS
export const index = async () => {
  try {
    const headers = {};
    // const token = localStorage.getItem("token");
    // if (token) headers.Authorization = `Bearer ${token}`;

    const res = await axios.get(BASE_URL, { headers });
    if (!res.data) {
      throw new Error("Error something went wrong fetching all items");
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// GET AN ITEM
export const show = async (itemId) => {
  try {
    const headers = {};
    const res = await axios.get(`${BASE_URL}${itemId}/`, { headers });
    if (!res.data) {
      throw new Error("Error something went wrong fetching item details");
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
