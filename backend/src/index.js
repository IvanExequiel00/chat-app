import express from "express"
import authRoutes from "./routes/auth.route.js"


const PORT = 5001;
const app = express();

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});