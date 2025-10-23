import { Router } from "express";
import { ClientController } from "../controllers/client.controller.ts";
import { validate } from "../middlewares/validate.middleware.ts";
import { ClientSchema } from "../dtos/client.dto.ts";

const router = Router();

router.get('/', ClientController.getAllClients);
router.get('/:id', ClientController.getClientById);
router.post('/', validate(ClientSchema), ClientController.createClient);
router.put('/:id', validate(ClientSchema), ClientController.updateClient);
router.delete('/:id', ClientController.deleteClient);

export default router;
