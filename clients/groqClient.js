import axios from 'axios';
import { config } from "dotenv";

config();


export const groqClient = axios.create({
    baseURL: "https://api.groq.com/openai/v1",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    }
});