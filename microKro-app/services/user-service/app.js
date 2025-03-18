const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT id, username FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 4001;
app.listen(port, () => console.log(`User Service running on port ${port}`));
