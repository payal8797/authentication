import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db";
import { JWT_SECRET } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing fields" });

  const existing = db.findUser(username);
  if (existing) return res.status(400).json({ error: "User already exists" });

  const hash = await bcrypt.hash(password, 10);
  const user = db.createUser(username, hash);
  res.json({ id: user.id, username: user.username });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = db.findUser(username);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ sub: user.username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ access_token: token, token_type: "bearer" });
});

export default router;
