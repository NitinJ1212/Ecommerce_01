import app from "./src/app.js";
import dotenv from "dotenv";
import "./src/config/redis.js"; // 🔥 initializes Redis

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
