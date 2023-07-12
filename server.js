const express = require("express");
const db = require("./config/connection");
const router = require("./routes");

// Initialise express
const app = express();

// Set up port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
