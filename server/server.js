import jsonServer from "json-server";
import auth from "json-server-auth";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SECRET_KEY = "your-secret-key"; // Zmień na bezpieczny klucz JWT
const server = express();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.db = router.db;
server.use(middlewares);
server.use(express.json());
server.use(auth);

// 🟢 Rejestracja użytkownika
server.post("/register", async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, acceptTermsCheckbox } = req.body;

  if (!email || !password || !confirmPassword || !firstName || !lastName || acceptTermsCheckbox === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const users = router.db.get("users").value();
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Hashowanie hasła
  const hashedPassword = await bcrypt.hash(password, 10);

  // Tworzenie nowego użytkownika
  const newUser = {
    id: users.length + 1, // Generowanie ID
    email,
    password: hashedPassword, // Zapisujemy zaszyfrowane hasło
    confirmPassword, // Zostawiamy oryginalne hasło jako pole (jeśli tego wymagasz)
    firstName,
    lastName,
    acceptTermsCheckbox,
  };

  // Zapis do db.json
  router.db.get("users").push(newUser).write();

  // Generowanie tokena JWT
  const accessToken = jwt.sign({ userId: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: "1h" });

  res.status(201).json({
    success: true,
    accessToken,
    user: newUser,
    message: "User registered successfully",
  });
});

// 🟢 Logowanie użytkownika
server.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get("users").value();
  
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Porównanie hasła
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generowanie tokena JWT
  const accessToken = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

  res.json({
    success: true,
    accessToken,
    user,
    message: "Login successful",
  });
});

server.use(router);

server.listen(4001, () => {
  console.log("✅ JSON Server is running on port 4001");
});
