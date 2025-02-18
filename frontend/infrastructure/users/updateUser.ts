import { User } from "@/utils/interfaces";
import axios from "axios";

export const updateUser = async (user: User) => {
  const response = await axios.put(
    `http://localhost:3000/api/users/${user.id}`,
    {
      username: user.username,
      email: user.email,
    }
  );
  return response.data as User;
};
