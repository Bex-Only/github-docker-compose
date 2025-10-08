import { pool } from "../config/db";
import { containsBannedWord } from "../utils/bannedWords";
import { Message } from "../models/messageModel";

export const approveMessages = async (): Promise<void> => {
  const result = await pool.query<Message>("SELECT * FROM messages WHERE banned = TRUE");

  for (const msg of result.rows) {
    if (!containsBannedWord(msg.text)) {
      await pool.query("UPDATE messages SET banned = FALSE WHERE id = $1", [msg.id]);
    }
  }
};
