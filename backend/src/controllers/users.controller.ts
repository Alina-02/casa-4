import { Request, Response } from "express";
import * as userService from "../services/users.service"

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
   res.status(500).json({ message: "Error al crear el usuario", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {res.status(404).json({ message: "Usuario no encontrado" }); return}
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario", error });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {res.status(404).json({ message: "Usuario no encontrado" }); return}
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar usuario", error });
  }
};

export const changeUserGroup = async (req: Request, res: Response) => {
  try {
    const { userId, newGroupId } = req.params;
    const updatedUser = await userService.changeUserGroup(userId, newGroupId);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error al cambiar de grupo", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.deleteUser(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar usuario", error });
  }
};



