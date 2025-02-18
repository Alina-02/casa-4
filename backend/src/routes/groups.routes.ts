import { Router } from 'express';
import {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
} from '../controllers/groups.controller';

const router = Router();

// Obtener todos los grupos
router.get('/', getAllGroups);

// Obtener un grupo por ID
router.get('/:id', getGroupById);

// Crear un nuevo grupo
router.post('/', createGroup);

// Actualizar un grupo existente
router.put('/:id', updateGroup);

// Eliminar un grupo
router.delete('/:id', deleteGroup);

export default router;
