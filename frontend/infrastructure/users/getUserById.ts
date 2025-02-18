import { User } from "@/utils/interfaces";
import axios from "axios";

export const getUserById = async (userId: string) => {
  const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
  return response.data as User;
};
