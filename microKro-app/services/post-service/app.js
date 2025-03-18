const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post("/", async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, userId]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 4002;
app.listen(port, () => console.log(`Post Service running on port ${port}`));
