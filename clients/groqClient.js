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


// Add a request interceptor to our instance
groqClient.interceptors.request.use(config => {
    // console.log(config);
    
  // This function runs before any request is sent using githubClient
  console.log(`Sending request to: ${config.baseURL}${config.url}`);
  // You must always return the config object, otherwise the request will fail
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});


// Add a response interceptor
groqClient.interceptors.response.use(response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  console.log('Received successful response!');
  // You can transform the response data here if needed
  return response;
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  console.error('An error occurred with the response.');
  // You can handle errors globally here
  return Promise.reject(error);
});