import { Router } from 'express';
import usersRoutes from './users.routes';
import eventsRoutes from './events.routes';
import groupsRoutes from './groups.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/events', eventsRoutes);
router.use('/groups', groupsRoutes);

export default router;