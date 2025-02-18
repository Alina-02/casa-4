import { Router } from 'express';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/events.controller';

const router = Router();

// Obtener todos los eventos
router.get('/', getAllEvents);

// Obtener un evento por ID
router.get('/:id', getEventById);

// Crear un nuevo evento
router.post('/', createEvent);

// Actualizar un evento existente
router.put('/:id', updateEvent);

// Eliminar un evento
router.delete('/:id', deleteEvent);

export default router;
