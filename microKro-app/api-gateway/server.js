/ api-gateway/server.js
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Route ke Auth Service
app.use("/api/auth", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: "http://auth-service:4000" + req.url,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// Route ke User Service
app.use("/api/users", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: "http://user-service:4001" + req.url,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// Route ke Post Service
app.use("/api/posts", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: "http://post-service:4002" + req.url,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

// Route ke Vote Service
app.use("/api/votes", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: "http://vote-service:4003" + req.url,
      data: req.body,
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

const port = 3000;
app.listen(port, () => console.log(`API Gateway running on port ${port}`));
