import { Router } from "express";
import { ClientController } from "../controllers/client.controller.ts";

const router = Router();

router.get('/', ClientController.getAllClients);
router.get('/:id', ClientController.getClientById);
router.post('/', ClientController.createClient);
router.put('/:id', ClientController.updateClient);
router.delete('/:id', ClientController.deleteClient);

export default router;
