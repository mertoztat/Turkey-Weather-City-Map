import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCityDetails = async (cityName) => {
  try {
    const response = await api.get(
      `weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric&lang=tr`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
