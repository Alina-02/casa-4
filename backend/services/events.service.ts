import EventDBSchema from "../models/EventDBSchema";

export const createEvent = async (eventData: any) => {
  return await EventDBSchema.create(eventData);
};

export const getEventById = async (id: string) => {
  return await EventDBSchema.findById(id).populate("user winner loser");
};

export const getAllEvents = async () => {
  return await EventDBSchema.find().populate("user winner loser");
};

export const updateEvent = async (id: string, updateData: any) => {
  return await EventDBSchema.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteEvent = async (id: string) => {
  return await EventDBSchema.findByIdAndDelete(id);
};

export const getEventsByUser = async (userId: string) => {
  return await EventDBSchema.find({ user: userId }).populate("user winner loser");
};
