import { Router } from "express";
import * as PlayerController from "./controllers/player-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);   
router.get("/players/:id", PlayerController.getPlayerById);
router.patch("/players/:id", PlayerController.patchPlayer);

export default router;