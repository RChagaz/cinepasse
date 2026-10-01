import { movies } from "../js/data.js";

const recentSearches = [
    "Interestelar",
    "Batman",
    "Oppenheimer",
    "Christopher Nolan",
    "Duna"
];

const suggestions = movies.filter(movie =>
    ["interestelar", "duna", "batman", "oppenheimer"].includes(movie.id)
);

const categories = [
    { name: "Ação", icon: "clapperboard", id: "acao" },
    { name: "Drama", icon: "drama", id: "drama" },
    { name: "Ficção científica", icon: "orbit", id: "ficcao-cientifica" },
    { name: "Romance", icon: "heart", id: "romance" },
    { name: "Comédia", icon: "smile", id: "comedia" },
    { name: "Terror", icon: "ghost", id: "terror" }
];

const icons = {
    search: `
        <circle cx="11" cy="11" r="7"/>
        <path d="m20 20-4-4"/>
    `,

    close: `
        <path d="M6 6l12 12M18 6 6 18"/>
    `,

    history: `
        <path d="M3 12a9 9 0 1 0 3-6.7"/>
        <path d="M3 4v5h5"/>
        <path d="M12 7v5l3 2"/>
    `,

    arrow: `
        <path d="M5 12h14m-6-6 6 6-6 6"/>
    `,

    chevron: `
        <path d="m9 18 6-6-6-6"/>
    `,

    home: `
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>
    `,

    bookmark: `
        <path d="M6 4h12v17l-6-4-6 4z"/>
    `,

    sliders: `
        <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>
    `,

    clapperboard: `
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M3 10h18M7 5l3 5m3-5 3 5m3-5 2 5"/>
    `,

    drama: `
        <path d="M7 5h10v8a5 5 0 0 1-10 0z"/>
        <path d="M9 9h.01M15 9h.01M9 13c2 2 4 2 6 0"/>
    `,

    orbit: `
        <circle cx="12" cy="12" r="3"/>
        <path d="M2 12c0-3 4.5-5 10-5s10 2 10 5-4.5 5-10 5S2 15 2 12Z"
              transform="rotate(-30 12 12)"/>
    `,

    heart: `
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>
    `,

    smile: `
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
    `,

    ghost: `
        <path d="M5 21V11a7 7 0 0 1 14 0v10l-3-2-2 2-2-2-2 2-2-2z"/>
        <circle cx="9" cy="11" r="1"/>
        <circle cx="15" cy="11" r="1"/>
    `
};

function icon(name, size = 24) {
    return `
        <svg
            width="${size}"
            height="${size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            ${icons[name] || ""}
        </svg>
    `;
}

function renderRecentSearches() {
    return recentSearches.map(search => `
        <button
            class="recent-search"
            type="button"
            data-search="${search}"
        >
            ${icon("history", 19)}
            <span>${search}</span>
        </button>
    `).join("");
}

function renderSuggestions() {
    return suggestions.map(movie => `
        <article class="search-movie-card">

            <div class="search-movie-poster">
                <img
                    src="/images/posters/${movie.art}.webp"
                    alt="Pôster de ${movie.title}"
                    loading="lazy"
                />
            </div>

            <strong>${movie.title}</strong>
            <span>${movie.genre}</span>

        </article>
    `).join("");
}

function renderCategories() {
    return categories.map(category => `
        <a
            class="search-category"
            href="/filters?genre=${category.id}"
        >
            <span class="category-icon">
                ${icon(category.icon, 26)}
            </span>

            <span class="category-name">
                ${category.name}
            </span>

            <span class="category-arrow">
                ${icon("chevron", 20)}
            </span>
        </a>
    `).join("");
}

function renderBottomNav() {
    return `
        <nav class="bottom-nav" aria-label="Navegação principal">

            <a href="/home" class="nav-item">
                ${icon("home", 25)}
                <span>Início</span>
            </a>

            <a
                href="/search"
                class="nav-item active"
                aria-current="page"
            >
                ${icon("search", 25)}
                <span>Buscar</span>
            </a>

            <a href="/filters" class="nav-item">
                ${icon("sliders", 25)}
                <span>Filtros</span>
            </a>

            <button
            type="button"
            class="nav-item nav-item-disabled"
            aria-label="Minha Lista - recurso não implementado neste protótipo"
            >
            ${icon("bookmark", 25)}
            <span>Minha Lista</span>
            </button>

        </nav>
    `;
}

export function renderSearch() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <main class="search-screen">

            <header class="search-header">

                <h1>Buscar</h1>

                <p>
                    Encontre seus filmes favoritos
                </p>

            </header>


            <section class="search-area">

                <form
                    class="search-form"
                    role="search"
                >

                    <span class="search-field-icon">
                        ${icon("search", 25)}
                    </span>

                    <input
                        id="movie-search"
                        type="search"
                        placeholder="Buscar filmes, atores, diretores..."
                        autocomplete="off"
                        aria-label="Buscar filmes, atores ou diretores"
                    />

                    <button
                        class="clear-search"
                        type="button"
                        aria-label="Limpar pesquisa"
                        hidden
                    >
                        ${icon("close", 18)}
                    </button>

                </form>

            </section>


            <section class="search-section recent-section">

                <div class="search-section-header">

                    <h2>Pesquisas recentes</h2>

                    <button
                        class="clear-recents"
                        type="button"
                    >
                        Limpar tudo
                    </button>

                </div>

                <div class="recent-searches">
                    ${renderRecentSearches()}
                </div>

            </section>


            <section class="search-section">

                <div class="search-section-header">

                    <h2>Sugestões para você</h2>

                    <a
                        href="/results"
                        class="search-see-all"
                    >
                        Ver todos
                        ${icon("arrow", 17)}
                    </a>

                </div>

                <div class="search-suggestions">
                    ${renderSuggestions()}
                </div>

            </section>


            <section class="search-section categories-section">

                <div class="search-section-header">
                    <h2>Explorar por categoria</h2>
                </div>

                <div class="search-categories">
                    ${renderCategories()}
                </div>

            </section>


            ${renderBottomNav()}

        </main>
    `;

    setupSearchInteractions();
}

function setupSearchInteractions() {
    const form = document.querySelector(".search-form");
    const input = document.querySelector("#movie-search");
    const clearButton = document.querySelector(".clear-search");
    const clearRecents = document.querySelector(".clear-recents");
    const recentContainer = document.querySelector(".recent-searches");
    const recentSection = document.querySelector(".recent-section");

    // Mostra ou esconde o botão X conforme o usuário digita
    function updateClearButton() {
        clearButton.hidden = input.value.trim() === "";
    }

    input.addEventListener("input", updateClearButton);

    // Limpar campo de pesquisa
    clearButton.addEventListener("click", () => {
        input.value = "";
        updateClearButton();
        input.focus();
    });

    // ========================================
    // PESQUISA PRINCIPAL
    // ========================================

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const query = input.value.trim();

        // Impede pesquisa vazia
        if (!query) {
            input.focus();
            return;
        }

        // Envia o termo pesquisado para a tela de resultados
        window.location.href =
            `/results?search=${encodeURIComponent(query)}`;
    });

    // ========================================
    // PESQUISAS RECENTES
    // ========================================

    document
        .querySelectorAll(".recent-search")
        .forEach((button) => {
            button.addEventListener("click", () => {
                const query = button.dataset.search;

                input.value = query;
                updateClearButton();

                // Também envia pesquisas recentes para Resultados
                window.location.href =
                    `/results?search=${encodeURIComponent(query)}`;
            });
        });

    // ========================================
    // LIMPAR PESQUISAS RECENTES
    // ========================================

    clearRecents.addEventListener("click", () => {
        recentContainer.innerHTML = "";
        recentSection.classList.add("empty");
    });
}