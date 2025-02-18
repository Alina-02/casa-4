
import UserDBSchema from "../models/UserDBSchema";
import EventDBSchema from "../models/EventDBSchema";
import { recalculateGroupPoints } from "./groups.service";
import mongoose from "mongoose";

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
    const user = await UserDBSchema.findById(id);
    if (!user) throw new Error("Usuario no encontrado");
  
    const groupId = user.group?.toString();
    await UserDBSchema.findByIdAndDelete(id);
  
    if (groupId) await recalculateGroupPoints(groupId); 
  
    return { message: "Usuario eliminado correctamente" };
  };
  
export const recalculateUserPoints = async (userId: string) => {
  const events = await EventDBSchema.find({ user: userId });

  const totalPoints = events.reduce((acc, event) => {
    if (event.type === "ADD") {
      return acc + event.points;
    } else if (event.type === "REMOVE") {
      return acc - event.points;
    }
    return acc;
  }, 0);

  const user = await UserDBSchema.findByIdAndUpdate(userId, { points: totalPoints }, { new: true });

  if (user?.group) {
    await recalculateGroupPoints(user.group.toString()); 
  }
};

export const changeUserGroup = async (userId: string, newGroupId: string) => {
    const user = await UserDBSchema.findById(userId);
    if (!user) throw new Error("Usuario no encontrado");
  
    const oldGroupId = user.group?.toString();
    user.group = new mongoose.Types.ObjectId(newGroupId);
    await user.save();
  
    // Actualizar los puntos de los grupos involucrados
    if (oldGroupId) await recalculateGroupPoints(oldGroupId);
    await recalculateGroupPoints(newGroupId);
  
    return user;
};