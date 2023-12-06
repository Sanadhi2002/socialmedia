import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import getPort from 'get-port';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

// Routes
const app = express();

// To serve images for public
app.use(express.static('public'));
app.use('/images', express.static('images'));

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

async function startServer() {
  const port = process.env.PORT || 5000; // Use the specified port or default to 5000

  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => app.listen(port, () => console.log(`Server is running on port ${port}`)))
    .catch((error) => console.error(error));
}

startServer();

// Usage of routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use('/upload', UploadRoute);
