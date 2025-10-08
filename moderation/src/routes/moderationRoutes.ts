import { Router } from "express";
import { runModeration } from "../controllers/moderationController";

const router = Router();

router.post("/moderate", runModeration);

export default router;
