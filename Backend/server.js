import express from "express";
import { chats } from './data/data.js'
import cors from 'cors'
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
     res.send('Hello World');
})

app.get('/api/chats', (req, res) => {
     res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
     const id = req.params.id;
     const chat = chats.find((c) => c._id === id);
     res.send(chat)
});

app.listen(process.env.PORT, () => {
     console.log("Server is running on port 3000");
});