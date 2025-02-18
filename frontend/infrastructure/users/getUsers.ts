import { User } from "@/utils/interfaces";
import axios from "axios";

export const getUser = async () => {
  const response = await axios.get("http://localhost:3000/api/users");
  return response.data as User[];
};
