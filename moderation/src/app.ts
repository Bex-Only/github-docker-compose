import express from "express";
import moderationRoutes from "./routes/moderationRoutes";

const app = express();

app.use(express.json());
app.use("/api", moderationRoutes);

export default app;
