import EventDBSchema from "../models/EventDBSchema";
import { recalculateUserPoints } from "./users.service";
import mongoose from "mongoose";

export const createEvent = async (eventData: any) => {
  try {
    // Convertir IDs a ObjectId
    const eventPayload = {
      ...eventData,
      user: new mongoose.Types.ObjectId(eventData.user),
      winner: eventData.winner ? new mongoose.Types.ObjectId(eventData.winner) : null,
      loser: eventData.loser ? new mongoose.Types.ObjectId(eventData.loser) : null,
    };

    const newEvent = await EventDBSchema.create(eventPayload);
    await recalculateUserPoints(eventData.user);
    
    return newEvent;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error al crear el evento: " + error.message);
    } else {
      throw new Error("Error al crear el evento: error desconocido");
    }
  }
};


export const getEventById = async (id: string) => {
  return await EventDBSchema.findById(id).populate("user winner loser");
};

export const getAllEvents = async () => {
  return await EventDBSchema.find().populate("user winner loser");
};

export const updateEvent = async (id: string, updateData: any) => {
  const updatedEvent = await EventDBSchema.findByIdAndUpdate(id, updateData, { new: true });
  if (updatedEvent) {
    await recalculateUserPoints(updatedEvent.user.toString()); 
  }
  return updatedEvent;
};
  
  export const deleteEvent = async (id: string) => {
    const event = await EventDBSchema.findById(id);
    if (!event) throw new Error("Evento no encontrado");
  
    await EventDBSchema.findByIdAndDelete(id);
    await recalculateUserPoints(event.user.toString());
    return event;
  };

export const getEventsByUser = async (userId: string) => {
  return await EventDBSchema.find({ user: userId }).populate("user winner loser");
};
