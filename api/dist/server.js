"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Allow requests from frontend (safer for production to contol origin -- all origins for dev)
app.use((0, cors_1.default)({
    origin: "http://localhost"
}));
// Your existing routes
app.get("/api", (req, res) => {
    res.json({ message: "Hello from API!" });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
/* import express from 'express';
import { Pool } from 'pg';
const app = express();
const port = 3000;

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'my_database',
  password: 'my-secret-pw',
  port: 5432,
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.post('/api/data', async (req, res) => {
  try {
    const { message } = req.body;
    await pool.query('CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, text TEXT)');
    const result = await pool.query('INSERT INTO messages (text) VALUES ($1) RETURNING id', [message]);
    res.json({ id: result.rows[0].id, status: 'success' });
  } catch (error) {
    console.error('Failed to save data:', error);
    res.status(500).json({ status: 'error', message: 'Failed to save data' });
  }
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
}); */ 
