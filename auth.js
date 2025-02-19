const express = require("express");
const bcrypt = require("bcryptjs");
const admin = require("firebase-admin");
const jwt = require("jsonwebtoken");

const router = express.Router();
const db = admin.firestore();

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) return res.status(400).json({ msg: "Todos los campos son obligatorios" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.collection("USERS").add({ email, username, password: hashedPassword });

    res.status(201).json({ msg: "Usuario registrado con éxito" });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usersRef = db.collection("USERS");
    const snapshot = await usersRef.where("email", "==", email).get();

    if (snapshot.empty) return res.status(400).json({ msg: "Usuario no encontrado" });

    let user;
    snapshot.forEach((doc) => (user = doc.data()));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "10m" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }

});

module.exports = router; 
