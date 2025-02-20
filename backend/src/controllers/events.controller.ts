import { Request, Response } from "express";
import * as eventService from "../services/events.service";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await eventService.createEvent(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el evento", error });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    if (!event) {res.status(404).json({ message: "Evento no encontrado" }); return}
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener evento", error });
  }
};

export const getAllEvents = async (_req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener eventos", error });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await eventService.updateEvent(req.params.id, req.body);
    if (!updatedEvent) {res.status(404).json({ message: "Evento no encontrado" }); return}
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar evento", error });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await eventService.deleteEvent(req.params.id);
    if (!deletedEvent) {res.status(404).json({ message: "Evento no encontrado" });return}
    res.json({ message: "Evento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar evento", error });
  }
};

export const getEventsByUser = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getEventsByUser(req.params.userId);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener eventos del usuario", error });
  }
};
