import EventDBSchema from "../models/EventDBSchema";
import { recalculateUserPoints } from "./users.service";

export const createEvent = async (eventData: any) => {
  const newEvent = await EventDBSchema.create(eventData);
  await recalculateUserPoints(eventData.user);
  return newEvent
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
