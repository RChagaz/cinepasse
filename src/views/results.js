const movies = [
    {
        id: "interestelar",
        title: "Interestelar",
        year: 2014,
        rating: 8.7,
        art: "interestelar",
        genre: "Ficção científica",
        clickable: true
    },
    {
        id: "duna",
        title: "Duna",
        year: 2024,
        rating: 8.2,
        art: "duna",
        genre: "Ficção científica"
    },
    {
        id: "batman",
        title: "Batman",
        year: 2022,
        rating: 8.5,
        art: "batman",
        genre: "Ação"
    },
    {
        id: "oppenheimer",
        title: "Oppenheimer",
        year: 2023,
        rating: 8.4,
        art: "oppenheimer",
        genre: "Drama"
    },
    {
        id: "top-gun",
        title: "Top Gun Maverick",
        year: 2022,
        rating: 8.3,
        art: "topgun",
        genre: "Ação"
    },
    {
        id: "deadpool",
        title: "Deadpool & Wolverine",
        year: 2024,
        rating: 8.1,
        art: "deadpool",
        genre: "Ação"
    },
    {
        id: "divertida-mente",
        title: "Divertida Mente 2",
        year: 2024,
        rating: 8.0,
        art: "insideout",
        genre: "Animação"
    },
    {
        id: "gladiador",
        title: "Gladiador II",
        year: 2024,
        rating: 7.8,
        art: "gladiator",
        genre: "Drama"
    },
    {
        id: "godzilla",
        title: "Godzilla e Kong",
        year: 2024,
        rating: 7.6,
        art: "godzilla",
        genre: "Ação"
    }
];

const icons = {
    arrowLeft:
        `<path d="M19 12H5m7-7-7 7 7 7"/>`,

    search:
        `<circle cx="11" cy="11" r="7"/>
         <path d="m20 20-4-4"/>`,

    sliders:
        `<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>`,

    home:
        `<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>`,

    bookmark:
        `<path d="M6 4h12v17l-6-4-6 4z"/>`,

    chevronDown:
        `<path d="m6 9 6 6 6-6"/>`
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

function normalizeText(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function getSearchTerm() {
    const params = new URLSearchParams(window.location.search);
    return params.get("search")?.trim() || "";
}

function getFilteredMovies(searchTerm) {
    if (!searchTerm) {
        return [...movies];
    }

    const normalizedSearch = normalizeText(searchTerm);

    return movies.filter(movie => {
        return (
            normalizeText(movie.title).includes(normalizedSearch) ||
            normalizeText(movie.genre).includes(normalizedSearch)
        );
    });
}

function movieCard(movie) {
    const content = `
        <div class="result-poster">
            <img
                src="/images/posters/${movie.art}.webp"
                alt="Pôster de ${movie.title}"
                loading="lazy"
            />
        </div>

        <div class="result-movie-info">
            <h3>${movie.title}</h3>

            <span class="result-genre">
                ${movie.genre}
            </span>

            <div class="result-meta">
                <span>${movie.year}</span>
                <span class="meta-divider"></span>
                <span class="result-rating">
                    <strong>★</strong>
                    ${movie.rating.toFixed(1)}
                </span>
            </div>
        </div>
    `;

    if (movie.clickable) {
        return `
            <a
                href="/movie?id=${movie.id}"
                class="result-card result-card-clickable"
                aria-label="Ver detalhes de ${movie.title}"
            >
                ${content}
            </a>
        `;
    }

    return `
        <article class="result-card">
            ${content}
        </article>
    `;
}

function renderBottomNav() {
    return `
        <nav class="bottom-nav" aria-label="Navegação principal">

            <a href="/home" class="nav-item">
                ${icon("home", 25)}
                <span>Início</span>
            </a>

            <a href="/search" class="nav-item active">
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

export function renderResults() {
    const app = document.querySelector("#app");

    const searchTerm = getSearchTerm();
    const filteredMovies = getFilteredMovies(searchTerm);

    app.innerHTML = `
        <main class="results-screen">

            <header class="results-header">

                <a
                    href="/search"
                    class="results-back"
                    aria-label="Voltar para busca"
                >
                    ${icon("arrowLeft", 27)}
                </a>

                <div>
                    <h1>Resultados</h1>
                    <p>Encontre mais filmes e explore novas histórias</p>
                </div>

            </header>


            <section class="results-search">

                <form class="results-search-form">

                    <span class="results-search-icon">
                        ${icon("search", 24)}
                    </span>

                    <input
                        id="results-search-input"
                        type="search"
                        placeholder="Buscar filmes..."
                        value="${searchTerm}"
                        autocomplete="off"
                        aria-label="Buscar filmes"
                    />

                </form>

            </section>


            <section class="results-summary">

                <div class="results-summary-text">

                    ${
                        searchTerm
                            ? `<h2>
                                Resultados para
                                <span>"${searchTerm}"</span>
                               </h2>`
                            : `<h2>Todos os filmes</h2>`
                    }

                    <p>
                        ${filteredMovies.length}
                        ${
                            filteredMovies.length === 1
                                ? "resultado encontrado"
                                : "resultados encontrados"
                        }
                    </p>

                </div>

                <a href="/filters" class="results-filter-button">
                    ${icon("sliders", 22)}
                    <span>Filtros</span>
                </a>

            </section>


            <section class="results-sort">

                <label for="results-order">
                    Ordenar por:
                </label>

                <div class="results-select-wrapper">

                    <select id="results-order">
                        <option value="relevance">
                            Mais relevantes
                        </option>

                        <option value="rating">
                            Melhor avaliação
                        </option>

                        <option value="year">
                            Mais recentes
                        </option>

                        <option value="title">
                            Ordem alfabética
                        </option>
                    </select>

                    ${icon("chevronDown", 18)}

                </div>

            </section>


            <section
                class="results-grid"
                id="results-grid"
                aria-live="polite"
            >
                ${
                    filteredMovies.length
                        ? filteredMovies.map(movieCard).join("")
                        : `
                            <div class="results-empty">

                                <span class="results-empty-icon">
                                    ${icon("search", 35)}
                                </span>

                                <h2>Nenhum filme encontrado</h2>

                                <p>
                                    Tente pesquisar outro título
                                    ou explorar todos os filmes.
                                </p>

                                <a href="/results">
                                    Ver todos os filmes
                                </a>

                            </div>
                        `
                }
            </section>

            ${renderBottomNav()}

        </main>
    `;

    setupResultsEvents(filteredMovies);
}

function setupResultsEvents(currentMovies) {
    const form = document.querySelector(".results-search-form");
    const input = document.querySelector("#results-search-input");
    const orderSelect = document.querySelector("#results-order");
    const grid = document.querySelector("#results-grid");

    form?.addEventListener("submit", event => {
        event.preventDefault();

        const value = input.value.trim();

        if (value) {
            history.pushState(
                {},
                "",
                `/results?search=${encodeURIComponent(value)}`
            );
        } else {
            history.pushState({}, "", "/results");
        }

        renderResults();
    });

    orderSelect?.addEventListener("change", () => {
        const orderedMovies = [...currentMovies];

        switch (orderSelect.value) {
            case "rating":
                orderedMovies.sort((a, b) => b.rating - a.rating);
                break;

            case "year":
                orderedMovies.sort((a, b) => b.year - a.year);
                break;

            case "title":
                orderedMovies.sort((a, b) =>
                    a.title.localeCompare(b.title, "pt-BR")
                );
                break;

            default:
                break;
        }

        grid.innerHTML = orderedMovies.length
            ? orderedMovies.map(movieCard).join("")
            : grid.innerHTML;
    });
}