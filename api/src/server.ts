import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

// Connect to Postgres using the env var from docker-compose
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();

app.use(cors({ origin: "http://localhost" }));
app.use(express.json());

// ✅ Health check
app.get("/api", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// ✅ Fetch all messages
app.get("/api/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ Save new message
app.post("/api/data", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  try {
    const result = await pool.query(
      "INSERT INTO messages (text) VALUES ($1) RETURNING id",
      [message]
    );
    res.status(201).json({ id: result.rows[0].id, message });
  } catch (err) {
    console.error("Error inserting message:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
