
import UserDBSchema from "../models/UserDBSchema";

export const createUser = async (userData: any) => {
  return await UserDBSchema.create(userData);
};

export const getUserById = async (id: string) => {
  return await UserDBSchema.findById(id).populate("team");
};

export const getAllUsers = async () => {
  return await UserDBSchema.find().populate("team");
};

export const updateUser = async (id: string, updateData: any) => {
  return await UserDBSchema.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteUser = async (id: string) => {
  return await UserDBSchema.findByIdAndDelete(id);
};
