const express = require("express"); // import express
const cors = require("cors"); // import cors
require("dotenv").config();
const taskRoutes = require("./routes/tasks"); // importing tasks.js


// starting server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes); // taskroutes becomes avilable http://.../tasks


// default landing page route, posts a message
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// tell the server to listen on port defined in .env or port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
