'use strict'

import express from 'express';
import morgan from 'morgan';
import path from 'path'
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

import dotenv from 'dotenv'

dotenv.config()

const app = express();

import indexRoutes from './routes/index'

// settings
app.set('port', process.env.PORT || 3000);

// midleWare
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// routes
app.use('/api', indexRoutes);



// public folder for images
app.use('/uploads', express.static(path.resolve('uploads')))

export default app;