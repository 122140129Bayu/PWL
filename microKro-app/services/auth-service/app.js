const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );
    if (rows.length === 0)
      return res.status(401).json({ error: "Unauthorized" });
    res.json({ message: "Login successful", user: rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 4000;
app.listen(port, () => console.log(`Auth Service running on port ${port}`));
