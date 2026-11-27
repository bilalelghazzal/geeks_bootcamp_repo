const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const Book = require("./models/Book");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/carnet-de-lecture";

// =====================================
// MIDDLEWARE
// =====================================

app.use(cors());
app.use(express.json({ limit: "5mb" }));

// =====================================
// CONNEXION MONGODB
// =====================================

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch((err) => {
    console.error("❌ Erreur de connexion MongoDB :", err.message);
    process.exit(1);
  });

// =====================================
// ROUTES PAGES (servir les fichiers HTML)
// =====================================

// Page de login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Redirection : "/" envoie vers login
app.get("/", (req, res) => {
  res.redirect("/login");
});

// Page principale des livres (après connexion)
app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Fichiers statiques (CSS, JS)
app.use(express.static(path.join(__dirname)));

// =====================================
// ROUTES UTILISATEURS
// =====================================

// POST /api/auth/register — Créer un compte (ajouter user à la DB)
app.post("/api/auth/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Nom d'utilisateur et mot de passe requis." });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Ce nom d'utilisateur est déjà pris." });
    }

    const user = new User({ username, password });
    await user.save();

    res.status(201).json({
      message: "Compte créé avec succès !",
      username: user.username,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST /api/auth/login — Se connecter (vérifier user dans la DB)
app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Nom d'utilisateur et mot de passe requis." });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
    }

    // Comparaison simple du mot de passe
    if (user.password !== password) {
      return res
        .status(401)
        .json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
    }

    res.json({
      message: "Connexion réussie !",
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
});

// =====================================
// ROUTES API LIVRES
// =====================================

// GET /api/books — Récupérer tous les livres
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
});

// POST /api/books — Ajouter un livre
app.post("/api/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Données invalides", error: error.message });
  }
});

// PUT /api/books/:id — Modifier un livre
app.put("/api/books/:id", async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }
    res.json(updated);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erreur de mise à jour", error: error.message });
  }
});

// DELETE /api/books/:id — Supprimer un livre
app.delete("/api/books/:id", async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }
    res.json({ message: "Livre supprimé" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
});

// =====================================
// DÉMARRAGE DU SERVEUR
// =====================================

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
