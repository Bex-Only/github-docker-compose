import app from "./app";
import * as dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Moderation service running on port ${PORT}`);
});
