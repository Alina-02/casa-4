import { User } from "@/utils/interfaces";
import axios from "axios";

export const getUser = async (userId: string) => {
  const response = await axios.delete(
    `http://localhost:3000/api/users/${userId}`
  );
};
