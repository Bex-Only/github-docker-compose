import { Request, Response } from "express";
import { approveMessages } from "../services/moderationService";

export const runModeration = async (_req: Request, res: Response) => {
  try {
    await approveMessages();
    res.json({ message: "Moderation run completed." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Moderation failed." });
  }
};
