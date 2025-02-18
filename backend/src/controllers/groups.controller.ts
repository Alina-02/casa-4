import { Request, Response } from "express";
import * as groupService from "../services/groups.service";
import GroupDBSchema from "../models/GroupDBSchema";
import UserDBSchema from "../models/UserDBSchema";
import { recalculateGroupPoints } from "../services/groups.service";

export const createGroup = async (req: Request, res: Response) => {
  try {
    const newGroup = await groupService.createGroup(req.body);
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el grupo", error });
  }
};

export const getGroupById = async (req: Request, res: Response) => {
  try {
    const group = await groupService.getGroupById(req.params.id);
    if (!group){res.status(404).json({ message: "Grupo no encontrado" });return}
    res.json(group);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener grupo", error });
  }
};

export const getAllGroups = async (_req: Request, res: Response) => {
  try {
    const groups = await groupService.getAllGroups();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener grupos", error });
  }
};

export const updateGroup = async (req: Request, res: Response) => {
  try {
    const updatedGroup = await groupService.updateGroup(req.params.id, req.body);
    if (!updatedGroup) {res.status(404).json({ message: "Grupo no encontrado" });return}
    res.json(updatedGroup);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar grupo", error });
  }
};

export const deleteGroup = async (req: Request, res: Response) => {
  try {
    const deletedGroup = await groupService.deleteGroup(req.params.id);
    if (!deletedGroup) {res.status(404).json({ message: "Grupo no encontrado" });return}
    res.json({ message: "Grupo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar grupo", error });
  }
};

export const addUserToGroup = async (req: Request, res: Response) => {
  try {
    const { groupId, userId } = req.params;
    const group = await GroupDBSchema.findById(groupId);
    const user = await UserDBSchema.findById(userId);
    
    if (!group || !user) throw new Error("Grupo o usuario no encontrado");
  
    if (!group.users.includes(user.id)) {
      group.users.push(user.id);
      await group.save();
    }
  
    user.group = group.id;
    await user.save();
  
    await recalculateGroupPoints(groupId); // Actualizar puntos del grupo
    res.json(group);
  } catch (error) {
    res.status(500).json({ message: "Error al añadir usuario al grupo", error });
  }
};

export const removeUserFromGroup = async (req: Request, res: Response) => {
  try {
    const { groupId, userId } = req.params;
    const group = await GroupDBSchema.findById(groupId);
    const user = await UserDBSchema.findById(userId);
    
    if (!group || !user) throw new Error("Grupo o usuario no encontrado");
  
    group.users = group.users.filter(id => id.toString() !== userId);
    await group.save();
  
    if (user.group?.toString() === groupId) {
      user.group = null;
      await user.save();
    }
  
    await recalculateGroupPoints(groupId); // Actualizar puntos del grupo
    res.json({ message: "Usuario eliminado correctamente del grupo" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar usuario del grupo", error });
  }
};

