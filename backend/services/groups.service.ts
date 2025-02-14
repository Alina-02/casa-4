import mongoose from "mongoose";
import GroupDBSchema from "../models/GroupDBSchema";
import UserDBSchema from "../models/UserDBSchema";

export const createGroup = async (groupData: any) => {
  return await GroupDBSchema.create(groupData);
};

export const getGroupById = async (id: string) => {
  return await GroupDBSchema.findById(id).populate("users");
};

export const getAllGroups = async () => {
  return await GroupDBSchema.find().populate("users");
};

export const updateGroup = async (id: string, updateData: any) => {
  return await GroupDBSchema.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteGroup = async (id: string) => {
  return await GroupDBSchema.findByIdAndDelete(id);
};

export const addUserToGroup = async (groupId: string, userId: string) => {
  const group = await GroupDBSchema.findById(groupId);
  const user = await UserDBSchema.findById(userId);

  const groupObjectId = new mongoose.Types.ObjectId(groupId);
  const userObjectId = new mongoose.Types.ObjectId(userId);
  
  if (!group || !user) throw new Error("Grupo o usuario no encontrado");

  if (!group.users.includes(userObjectId)) {
    group.users.push(userObjectId);
    await group.save();
  }

  user.group = groupObjectId;
  await user.save();

  return group;
};

export const removeUserFromGroup = async (groupId: string, userId: string) => {
  const group = await GroupDBSchema.findById(groupId);
  const user = await UserDBSchema.findById(userId);
  
  if (!group || !user) throw new Error("Grupo o usuario no encontrado");

  group.users = group.users.filter(id => id.toString() !== userId);
  await group.save();

  if (user.group?.toString() === groupId) {
    user.group = null;
    await user.save();
  }

  return group;
};

export const recalculateGroupPoints = async (groupId: string) => {
  const group = await GroupDBSchema.findById(groupId);
  if (!group) throw new Error("Grupo no encontrado");

  const users = await UserDBSchema.find({ team: groupId });
  const totalPoints = users.reduce((acc, user) => acc + user.points, 0);

  group.points = totalPoints;
  await group.save();
};
