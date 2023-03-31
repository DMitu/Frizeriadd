import axios from "axios";

const API_URL = "https://Barbershop-webapp.dmitu.repl.co"; 

export const createBooking = async (booking) => {
  try {
    const response = await axios.post(`${API_URL}/booking/add`, booking);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
