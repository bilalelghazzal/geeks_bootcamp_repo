
// =====================================
// MON CARNET DE LECTURE
// =====================================

// Si pas connecté, rediriger vers login
if (!localStorage.getItem("username")) {
    window.location.href = "/login";
}

const API_URL = "/api/books";

// Récupération des éléments HTML
const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const genreInput = document.getElementById("genre");
const ratingInput = document.getElementById("rating");
const statusInput = document.getElementById("status");
const reviewInput = document.getElementById("review");
const coverUrlInput = document.getElementById("coverUrl");
const coverFileInput = document.getElementById("coverFile");
const coverPreview = document.getElementById("coverPreview");
const finishedDateInput = document.getElementById("finishedDate");

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("search");
const sortInput = document.getElementById("sort");

const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const formTitle = document.getElementById("formTitle");

const totalBooks = document.getElementById("totalBooks");
const toRead = document.getElementById("toRead");
const reading = document.getElementById("reading");
const finished = document.getElementById("finished");

// =====================================
// STOCKAGE DES LIVRES
// =====================================

let books = [];
let currentFilter = "tous";
let editingId = null;
let selectedCoverImage = "";

// Charger les livres depuis MongoDB via l'API
async function loadBooks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erreur serveur");
        books = await response.json();
    } catch (error) {
        console.error("Erreur de chargement :", error);
        books = [];
    }
}

// =====================================
// AJOUTER / MODIFIER UN LIVRE (API)
// =====================================

bookForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const genre = genreInput.value.trim();
    const rating = Number(ratingInput.value);
    const status = statusInput.value;
    const review = reviewInput.value.trim();
    const coverUrl = coverUrlInput.value.trim();
    const coverImage = selectedCoverImage || (editingId !== null
        ? (books.find(book => book._id === editingId)?.coverImage || "")
        : "");
    const finishedDate = status === "termine"
        ? (finishedDateInput.value || new Date().toISOString().slice(0, 10))
        : "";

    if (!title || !author) {
        alert("Veuillez remplir le titre et l'auteur !");
        return;
    }

    const bookData = {
        title, author, genre, rating, status,
        review, coverUrl, coverImage, finishedDate
    };

    try {
        let response;

        if (editingId !== null) {
            // Modifier un livre existant
            response = await fetch(`${API_URL}/${editingId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookData)
            });
        } else {
            // Ajouter un nouveau livre
            response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookData)
            });
        }

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message || "Erreur serveur");
        }

        await loadBooks();
        resetForm();
        renderBooks();

    } catch (error) {
        alert("Erreur : " + error.message);
        console.error(error);
    }
});

// =====================================
// AFFICHER LES LIVRES
// =====================================

function renderBooks() {

    // Mise à jour des statistiques
    totalBooks.textContent = books.length;

    toRead.textContent = books.filter(
        book => book.status === "a-lire"
    ).length;

    reading.textContent = books.filter(
        book => book.status === "en-cours"
    ).length;

    finished.textContent = books.filter(
        book => book.status === "termine"
    ).length;

    // Filtrage
    let filteredBooks = books.filter(book => {
        const matchesFilter =
            currentFilter === "tous" ||
            book.status === currentFilter;

        const query = searchInput.value.toLowerCase().trim();

        const matchesSearch =
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query);

        return matchesFilter && matchesSearch;
    });

    // Tri
    const sortValue = sortInput.value;

    if (sortValue === "title-asc") {
        filteredBooks.sort((a, b) =>
            a.title.localeCompare(b.title, "fr")
        );
    }

    if (sortValue === "title-desc") {
        filteredBooks.sort((a, b) =>
            b.title.localeCompare(a.title, "fr")
        );
    }

    if (sortValue === "author") {
        filteredBooks.sort((a, b) =>
            a.author.localeCompare(b.author, "fr")
        );
    }

    if (sortValue === "rating-desc") {
        filteredBooks.sort((a, b) => b.rating - a.rating);
    }

    if (sortValue === "rating-asc") {
        filteredBooks.sort((a, b) => a.rating - b.rating);
    }

    // Vider la liste
    bookList.innerHTML = "";

    // Aucun résultat
    if (filteredBooks.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty";
        emptyMessage.textContent = books.length === 0
            ? "📚 Votre carnet est vide. Ajoutez votre premier livre !"
            : "Aucun livre trouvé.";
        bookList.appendChild(emptyMessage);
        return;
    }

    // Création des cartes
    filteredBooks.forEach(book => {

        const card = document.createElement("article");
        card.className = "book-card";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.className = "author";
        author.textContent = "✍️ " + book.author;

        const genre = document.createElement("p");
        genre.className = "genre";
        genre.textContent = book.genre || "Genre non précisé";

        const coverSource = book.coverImage || book.coverUrl;
        if (coverSource) {
            const cover = document.createElement("img");
            cover.className = "book-cover";
            cover.src = coverSource;
            cover.alt = `Couverture de ${book.title}`;
            cover.loading = "lazy";
            cover.addEventListener("error", () => cover.remove(), { once: true });
            card.appendChild(cover);
        }

        const rating = document.createElement("div");
        rating.className = "rating";
        rating.textContent =
            "★".repeat(book.rating) +
            "☆".repeat(5 - book.rating) +
            " (" + book.rating + "/5)";

        const status = document.createElement("span");
        status.className = "status " + book.status;

        const statusNames = {
            "a-lire": "À lire",
            "en-cours": "En cours",
            "termine": "Terminé"
        };

        status.textContent = statusNames[book.status];

        const review = document.createElement("p");
        review.className = "review";
        review.textContent = book.review || "";

        const finishedDate = document.createElement("p");
        finishedDate.className = "finished-date";
        if (book.finishedDate) {
            finishedDate.textContent = `Terminé le ${new Date(`${book.finishedDate}T00:00:00`).toLocaleDateString("fr-FR")}`;
        }

        const actions = document.createElement("div");
        actions.className = "book-actions";

        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "✏️ Modifier";
        editButton.addEventListener("click", () => editBook(book._id));

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "🗑️ Supprimer";
        deleteButton.addEventListener("click", () => deleteBook(book._id));

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(genre);
        card.appendChild(rating);
        card.appendChild(status);
        if (book.review) card.appendChild(review);
        if (book.finishedDate) card.appendChild(finishedDate);
        card.appendChild(actions);

        bookList.appendChild(card);
    });
}

// =====================================
// MODIFIER UN LIVRE
// =====================================

function editBook(id) {

    const book = books.find(b => b._id === id);

    if (!book) return;

    editingId = id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    genreInput.value = book.genre || "";
    ratingInput.value = book.rating;
    statusInput.value = book.status;
    reviewInput.value = book.review || "";
    coverUrlInput.value = book.coverUrl || "";
    selectedCoverImage = book.coverImage || "";
    updateCoverPreview(selectedCoverImage || book.coverUrl || "");
    finishedDateInput.value = book.finishedDate || "";

    formTitle.textContent = "Modifier un livre";
    submitBtn.textContent = "Enregistrer les modifications";

    cancelBtn.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// =====================================
// SUPPRIMER UN LIVRE
// =====================================

async function deleteBook(id) {

    const confirmation = confirm(
        "Voulez-vous vraiment supprimer ce livre ?"
    );

    if (!confirmation) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Erreur de suppression");

        await loadBooks();

        if (editingId === id) {
            resetForm();
        }

        renderBooks();

    } catch (error) {
        alert("Erreur : " + error.message);
        console.error(error);
    }
}

// =====================================
// RÉINITIALISER LE FORMULAIRE
// =====================================

function resetForm() {

    bookForm.reset();

    editingId = null;
    selectedCoverImage = "";
    coverFileInput.value = "";
    updateCoverPreview("");

    formTitle.textContent = "Ajouter un livre";
    submitBtn.textContent = "Ajouter au carnet";

    cancelBtn.classList.add("hidden");
}

coverFileInput.addEventListener("change", async () => {
    const file = coverFileInput.files[0];
    if (!file) {
        selectedCoverImage = "";
        updateCoverPreview("");
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Veuillez choisir un fichier image.");
        coverFileInput.value = "";
        return;
    }

    try {
        selectedCoverImage = await resizeCoverImage(file);
        updateCoverPreview(selectedCoverImage);
    } catch (error) {
        alert("Impossible de lire cette image. Essayez un autre fichier.");
        coverFileInput.value = "";
    }
});

function updateCoverPreview(source) {
    coverPreview.src = source;
    coverPreview.classList.toggle("hidden", !source);
}

function resizeCoverImage(file) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        const reader = new FileReader();

        reader.onload = () => {
            image.onload = () => {
                const maxSize = 1000;
                const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(image.width * scale);
                canvas.height = Math.round(image.height * scale);
                canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.82));
            };
            image.onerror = reject;
            image.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

cancelBtn.addEventListener("click", resetForm);

// =====================================
// FILTRER LES LIVRES
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        currentFilter = this.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        renderBooks();
    });
});

// =====================================
// RECHERCHER ET TRIER
// =====================================

searchInput.addEventListener("input", renderBooks);

sortInput.addEventListener("change", renderBooks);

// =====================================
// INITIALISATION
// =====================================

// Charger les livres depuis MongoDB au démarrage
(async function init() {
    await loadBooks();
    renderBooks();
})();
