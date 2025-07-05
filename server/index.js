const express = require("express"); // import express
const cors = require("cors"); // import cors
require("dotenv").config();
const taskRoutes = require("./routes/tasks"); // importing tasks.js
const aboutRoute = require("./routes/about");


// starting server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes); // taskroutes becomes avilable http://.../tasks
app.use("/about", aboutRoute);


// default landing page route, posts a message
app.get("/", (req, res) => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  res.send(`Welcome. Today is ${formattedDate}. What's the plan for today?`);
});

// tell the server to listen on port defined in .env or port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
