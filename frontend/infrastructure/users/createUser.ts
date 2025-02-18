import { User } from "@/utils/interfaces";
import axios from "axios";

export const createUser = async (user: User) => {
  const response = await axios.post("http://localhost:3000/api/users", {
    user,
  });
  return response.data as User;
};
