const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post("/", async (req, res) => {
  const { userId, postId, value } = req.body;
  try {
    await pool.query(
      "INSERT INTO votes (user_id, post_id, value) VALUES ($1, $2, $3) ON CONFLICT (user_id, post_id) DO UPDATE SET value = EXCLUDED.value",
      [userId, postId, value]
    );
    res.json({ message: "Vote recorded" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 4003;
app.listen(port, () => console.log(`Vote Service running on port ${port}`));
