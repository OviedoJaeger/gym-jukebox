import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/health", (req, res) => {
    res.json({ ok: true});
});

const port = process.env.PORT || 5179;
app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});