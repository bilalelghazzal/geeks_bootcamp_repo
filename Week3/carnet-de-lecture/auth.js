// =====================================
// AUTHENTIFICATION - LOGIN / REGISTER
// =====================================

const API_URL = "/api/auth";

const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authBtn = document.getElementById("authBtn");
const toggleAuth = document.getElementById("toggleAuth");
const authError = document.getElementById("authError");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

let isLoginMode = true;

// Si déjà connecté, rediriger vers l'app
if (localStorage.getItem("username")) {
    window.location.href = "/app";
}

// Basculer entre login et register
toggleAuth.addEventListener("click", (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    authError.classList.add("hidden");

    if (isLoginMode) {
        authTitle.textContent = "Se connecter";
        authBtn.textContent = "Se connecter";
        toggleAuth.textContent = "Créer un compte";
        toggleAuth.previousSibling.textContent = "Pas encore de compte ? ";
    } else {
        authTitle.textContent = "Créer un compte";
        authBtn.textContent = "S'inscrire";
        toggleAuth.textContent = "Se connecter";
        toggleAuth.previousSibling.textContent = "Déjà un compte ? ";
    }
});

// Soumettre le formulaire
authForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        showError("Veuillez remplir tous les champs.");
        return;
    }

    if (!isLoginMode && password.length < 4) {
        showError("Le mot de passe doit contenir au moins 4 caractères.");
        return;
    }

    const endpoint = isLoginMode ? `${API_URL}/login` : `${API_URL}/register`;

    try {
        authBtn.disabled = true;
        authBtn.textContent = "Chargement...";

        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Erreur serveur");
        }

        // Sauvegarder le username et rediriger
        localStorage.setItem("username", data.username);
        window.location.href = "/app";

    } catch (error) {
        showError(error.message);
    } finally {
        authBtn.disabled = false;
        authBtn.textContent = isLoginMode ? "Se connecter" : "S'inscrire";
    }
});

function showError(message) {
    authError.textContent = message;
    authError.classList.remove("hidden");
}
