const icons = {
    arrowLeft: `
        <path d="M19 12H5"/>
        <path d="m12 19-7-7 7-7"/>
    `,

    clapperboard: `
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M3 10h18M7 5l3 5m3-5 3 5m3-5 2 5"/>
    `,

    smile: `
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
    `,

    orbit: `
        <circle cx="12" cy="12" r="3"/>
        <path d="M2 12c0-3 4.5-5 10-5s10 2 10 5-4.5 5-10 5S2 15 2 12Z"
              transform="rotate(-30 12 12)"/>
        <circle cx="19" cy="5" r="1"/>
    `,

    heart: `
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>
    `,

    drama: `
        <path d="M12 3a9 9 0 1 0 9 9c0-1-1-2-2-2h-2a2 2 0 0 1-2-2V6a3 3 0 0 0-3-3Z"/>
        <path d="M7.5 10h.01M10 7h.01M15 7h.01M17 13h.01"/>
    `,

    ghost: `
        <path d="M5 21V11a7 7 0 0 1 14 0v10l-3-2-2 2-2-2-2 2-2-2z"/>
        <circle cx="9" cy="11" r="1"/>
        <circle cx="15" cy="11" r="1"/>
    `,

    calendar: `
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M16 3v4M8 3v4M3 10h18"/>
    `,

    star: `
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3
        1.1-6.2L3 9.6l6.2-.9z"/>
    `,

    sliders: `
        <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3
        M2 14h4m4-6h4m4 8h4"/>
    `,

    play: `
        <path d="m8 5 12 7-12 7z"/>
    `,

    home: `
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>
    `,

    search: `
        <circle cx="11" cy="11" r="7"/>
        <path d="m20 20-4-4"/>
    `,

    bookmark: `
        <path d="M6 4h12v17l-6-4-6 4z"/>
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

const genres = [
    { id: "acao", name: "Ação", icon: "clapperboard" },
    { id: "drama", name: "Drama", icon: "drama" },
    { id: "ficcao", name: "Ficção científica", icon: "orbit" },
    { id: "romance", name: "Romance", icon: "heart" },
    { id: "comedia", name: "Comédia", icon: "smile" },
    { id: "terror", name: "Terror", icon: "ghost" }
];

function renderGenres() {
    return genres.map((genre) => `
        <button
            type="button"
            class="filter-option genre-option"
            data-filter="genre"
            data-value="${genre.id}"
            aria-pressed="false"
        >
            <span class="filter-option-icon">
                ${icon(genre.icon, 25)}
            </span>

            <span>${genre.name}</span>
        </button>
    `).join("");
}

function renderBottomNav() {
    return `
        <nav class="bottom-nav" aria-label="Navegação principal">

            <a href="/home" class="nav-item">
                ${icon("home", 25)}
                <span>Início</span>
            </a>

            <a href="/search" class="nav-item">
                ${icon("search", 25)}
                <span>Buscar</span>
            </a>

            <a
                href="/filters"
                class="nav-item active"
                aria-current="page"
            >
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

export function renderFilters() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <main class="filters-screen">

            <header class="filters-header">

                <a
                    href="/results"
                    class="filters-back"
                    aria-label="Voltar"
                >
                    ${icon("arrowLeft", 27)}
                </a>

                <div>
                    <h1>Filtros</h1>
                    <p>
                        Refine sua busca e encontre o filme ideal
                    </p>
                </div>

            </header>

            <div class="filters-content">

                <!-- GÊNERO -->

                <section class="filter-section">

                    <div class="filter-section-header">

                        <div class="filter-title">
                            ${icon("clapperboard", 25)}
                            <h2>Gênero</h2>
                        </div>

                        <button
                            type="button"
                            class="filter-clear"
                            data-clear="genre"
                        >
                            Limpar
                        </button>

                    </div>

                    <div class="genre-grid">
                        ${renderGenres()}
                    </div>

                </section>


                <!-- ANO -->

                <section class="filter-section">

                    <div class="filter-section-header">

                        <div class="filter-title">
                            ${icon("calendar", 25)}
                            <h2>Ano de lançamento</h2>
                        </div>

                        <button
                            type="button"
                            class="filter-clear"
                            data-clear="year"
                        >
                            Limpar
                        </button>

                    </div>

                    <div class="year-grid">

                        <label class="year-field">
                            <span>De</span>

                            <select
                                id="year-from"
                                aria-label="Ano inicial"
                            >
                                <option value="">Qualquer</option>
                                <option value="1990">1990</option>
                                <option value="2000">2000</option>
                                <option value="2010">2010</option>
                                <option value="2015">2015</option>
                                <option value="2020">2020</option>
                            </select>
                        </label>

                        <label class="year-field">
                            <span>Até</span>

                            <select
                                id="year-to"
                                aria-label="Ano final"
                            >
                                <option value="">Qualquer</option>
                                <option value="2010">2010</option>
                                <option value="2015">2015</option>
                                <option value="2020">2020</option>
                                <option value="2024">2024</option>
                                <option value="2026">2026</option>
                            </select>
                        </label>

                    </div>

                </section>


                <!-- AVALIAÇÃO -->

                <section class="filter-section">

                    <div class="filter-section-header">

                        <div class="filter-title">
                            ${icon("star", 26)}
                            <h2>Avaliação mínima</h2>
                        </div>

                        <button
                            type="button"
                            class="filter-clear"
                            data-clear="rating"
                        >
                            Limpar
                        </button>

                    </div>

                    <div class="rating-grid">

                        <button
                            type="button"
                            class="filter-choice active"
                            data-filter="rating"
                            data-value=""
                            aria-pressed="true"
                        >
                            Qualquer
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="rating"
                            data-value="7"
                            aria-pressed="false"
                        >
                            7,0+
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="rating"
                            data-value="8"
                            aria-pressed="false"
                        >
                            8,0+
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="rating"
                            data-value="9"
                            aria-pressed="false"
                        >
                            9,0+
                        </button>

                    </div>

                </section>


                <!-- ORDENAÇÃO -->

                <section class="filter-section">

                    <div class="filter-section-header">

                        <div class="filter-title">
                            ${icon("sliders", 25)}
                            <h2>Ordenar por</h2>
                        </div>

                        <button
                            type="button"
                            class="filter-clear"
                            data-clear="sort"
                        >
                            Limpar
                        </button>

                    </div>

                    <div class="sort-grid">

                        <button
                            type="button"
                            class="filter-choice active"
                            data-filter="sort"
                            data-value="relevance"
                            aria-pressed="true"
                        >
                            Mais relevantes
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="sort"
                            data-value="rating"
                            aria-pressed="false"
                        >
                            Melhor avaliação
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="sort"
                            data-value="recent"
                            aria-pressed="false"
                        >
                            Mais recentes
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="sort"
                            data-value="alphabetical"
                            aria-pressed="false"
                        >
                            Ordem alfabética
                        </button>

                    </div>

                </section>


                <!-- DISPONIBILIDADE -->

                <section class="filter-section">

                    <div class="filter-section-header">

                        <div class="filter-title">
                            ${icon("play", 26)}
                            <h2>Disponibilidade</h2>
                        </div>

                        <button
                            type="button"
                            class="filter-clear"
                            data-clear="availability"
                        >
                            Limpar
                        </button>

                    </div>

                    <div class="availability-grid">

                        <button
                            type="button"
                            class="filter-choice active"
                            data-filter="availability"
                            data-value="all"
                            aria-pressed="true"
                        >
                            Todos
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="availability"
                            data-value="streaming"
                            aria-pressed="false"
                        >
                            Em streaming
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="availability"
                            data-value="rent"
                            aria-pressed="false"
                        >
                            Para alugar
                        </button>

                        <button
                            type="button"
                            class="filter-choice"
                            data-filter="availability"
                            data-value="buy"
                            aria-pressed="false"
                        >
                            Para comprar
                        </button>

                    </div>

                </section>


                <!-- AÇÕES -->

                <section class="filter-actions">

                    <button
                        type="button"
                        class="apply-filters-button"
                        id="apply-filters"
                    >
                        <strong>Ver resultados</strong>
                        <span>9 filmes encontrados</span>
                    </button>

                    <button
                        type="button"
                        class="clear-all-button"
                        id="clear-all-filters"
                    >
                        Limpar todos os filtros
                    </button>

                </section>

            </div>

            ${renderBottomNav()}

        </main>
    `;

    setupFilterInteractions();
}

function setupFilterInteractions() {

    /*
     * Seleções dos botões.
     * Cada grupo aceita apenas uma opção selecionada.
     */
    document.querySelectorAll("[data-filter]").forEach((button) => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            document
                .querySelectorAll(`[data-filter="${filter}"]`)
                .forEach((item) => {
                    item.classList.remove("active");
                    item.setAttribute("aria-pressed", "false");
                });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");
        });

    });


    /*
     * Limpar uma seção específica.
     */
    document.querySelectorAll("[data-clear]").forEach((button) => {

        button.addEventListener("click", () => {

            const section = button.dataset.clear;

            if (section === "genre") {
                clearButtonGroup("genre");
            }

            if (section === "rating") {
                resetGroup("rating", "");
            }

            if (section === "sort") {
                resetGroup("sort", "relevance");
            }

            if (section === "availability") {
                resetGroup("availability", "all");
            }

            if (section === "year") {
                document.querySelector("#year-from").value = "";
                document.querySelector("#year-to").value = "";
            }

        });

    });


    /*
     * Limpar tudo.
     */
    document
        .querySelector("#clear-all-filters")
        .addEventListener("click", resetAllFilters);


    /*
     * Ir para a interface de resultados.
     */
    document
        .querySelector("#apply-filters")
        .addEventListener("click", () => {

            const params = new URLSearchParams();

            const genre =
                document.querySelector(
                    '[data-filter="genre"].active'
                )?.dataset.value;

            const rating =
                document.querySelector(
                    '[data-filter="rating"].active'
                )?.dataset.value;

            const sort =
                document.querySelector(
                    '[data-filter="sort"].active'
                )?.dataset.value;

            const availability =
                document.querySelector(
                    '[data-filter="availability"].active'
                )?.dataset.value;

            const yearFrom =
                document.querySelector("#year-from").value;

            const yearTo =
                document.querySelector("#year-to").value;

            if (genre) {
                params.set("genre", genre);
            }

            if (rating) {
                params.set("rating", rating);
            }

            if (sort && sort !== "relevance") {
                params.set("sort", sort);
            }

            if (availability && availability !== "all") {
                params.set("availability", availability);
            }

            if (yearFrom) {
                params.set("from", yearFrom);
            }

            if (yearTo) {
                params.set("to", yearTo);
            }

            const query = params.toString();

            window.location.href =
                query
                    ? `/results?${query}`
                    : "/results";
        });
}

function clearButtonGroup(group) {

    document
        .querySelectorAll(`[data-filter="${group}"]`)
        .forEach((button) => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });
}

function resetGroup(group, defaultValue) {

    clearButtonGroup(group);

    const defaultButton =
        document.querySelector(
            `[data-filter="${group}"][data-value="${defaultValue}"]`
        );

    if (defaultButton) {
        defaultButton.classList.add("active");
        defaultButton.setAttribute("aria-pressed", "true");
    }
}

function resetAllFilters() {

    clearButtonGroup("genre");

    resetGroup("rating", "");
    resetGroup("sort", "relevance");
    resetGroup("availability", "all");

    document.querySelector("#year-from").value = "";
    document.querySelector("#year-to").value = "";
}