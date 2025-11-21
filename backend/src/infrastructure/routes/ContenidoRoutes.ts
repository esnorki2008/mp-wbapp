import { Router } from "express";
import { ContenidoController } from "../controllers/ContenidoController";

const router = Router();

router.get("/", ContenidoController.getAll);

export default router;
