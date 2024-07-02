import express from "express";
import userRoutes from "./Routes/userRoutes.js";
import cors from 'cors'
import { config } from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./Middleware/errorHandler.js";
config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
     res.send('Hello World');
})

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
     console.log("Server is running on port 3000".blue.bold);
});