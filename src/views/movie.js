const icons = {
    arrowLeft: `
        <path d="M19 12H5"/>
        <path d="m12 19-7-7 7-7"/>
    `,

    bookmark: `
        <path d="M6 4h12v17l-6-4-6 4z"/>
    `,

    play: `
        <path d="m8 5 12 7-12 7z"
              fill="currentColor"
              stroke="none"/>
    `,

    home: `
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>
    `,

    search: `
        <circle cx="11" cy="11" r="7"/>
        <path d="m20 20-4-4"/>
    `,

    sliders: `
        <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>
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

export function renderMovie() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <main class="movie-screen">

            <!-- Cabeçalho -->

            <header class="movie-header">

                <a
                    href="/home"
                    class="movie-back"
                    aria-label="Voltar para a página inicial"
                >
                    ${icon("arrowLeft", 27)}
                </a>

                <h1>Detalhes do filme</h1>

                <button
                    class="movie-header-bookmark"
                    type="button"
                    aria-label="Adicionar Interestelar à minha lista"
                >
                    ${icon("bookmark", 26)}
                </button>

            </header>


            <!-- Banner -->

            <section class="movie-hero">

                <img
                    class="movie-backdrop"
                    src="/images/banners/interestelar.jpg"
                    alt=""
                    aria-hidden="true"
                />

                <div class="movie-hero-gradient"></div>

            </section>


            <!-- Informações principais -->

            <section class="movie-main-info">

                <img
                    class="movie-detail-poster"
                    src="/images/posters/interestelar.webp"
                    alt="Pôster do filme Interestelar"
                />

                <div class="movie-info-text">

                    <h2>Interestelar</h2>

                    <div class="movie-meta">
                        <span>2014</span>
                        <span aria-hidden="true">•</span>
                        <span>2h 49min</span>
                        <span aria-hidden="true">•</span>
                        <span>Ficção científica</span>
                    </div>

                    <div class="movie-age-rating">
                        <span class="age-badge">12</span>
                        <span>Não recomendado para menores de 12 anos</span>
                    </div>

                </div>

            </section>


            <!-- Avaliações -->

            <section
                class="movie-ratings"
                aria-label="Avaliações do filme"
            >

                <article class="rating-card">

                    <span class="rating-source imdb">
                        IMDb
                    </span>

                    <div class="rating-value">
                        <span class="rating-star">★</span>
                        <strong>8,7</strong>
                        <span>/10</span>
                    </div>

                    <span class="rating-description">
                        Avaliação dos usuários
                    </span>

                </article>


                <article class="rating-card">

                    <span class="rating-source rotten">
                        <span aria-hidden="true">🍅</span>
                        Rotten Tomatoes
                    </span>

                    <div class="rating-value">
                        <strong>73%</strong>
                    </div>

                    <span class="rating-description">
                        Tomatometer
                    </span>

                </article>

            </section>


            <!-- Ações -->

            <section class="movie-actions">

                <button
                    class="trailer-button"
                    type="button"
                >
                    ${icon("play", 21)}
                    <span>Assistir trailer</span>
                </button>

                <button
                    class="list-button"
                    type="button"
                    aria-label="Adicionar à minha lista"
                >
                    ${icon("bookmark", 22)}
                    <span>Minha lista</span>
                </button>

            </section>


            <!-- Sinopse -->

            <section class="movie-content-section">

                <h2>Sinopse</h2>

                <p class="movie-synopsis">
                    As reservas naturais da Terra estão chegando ao fim.
                    Um grupo de astronautas recebe a missão de explorar
                    possíveis planetas capazes de receber a humanidade,
                    enquanto Cooper precisa deixar sua família para trás
                    e embarcar em uma jornada através do espaço.
                </p>

                <button
                    class="text-action synopsis-toggle"
                    type="button"
                >
                    Ver mais
                </button>

            </section>


            <!-- Elenco -->

            <section class="movie-content-section">

                <div class="movie-section-heading">

                    <h2>Elenco principal</h2>

                    <button
                        class="text-action cast-toggle"
                        type="button"
                    >
                        Ver elenco completo
                    </button>

                </div>

                <div class="cast-list">

                    <span class="cast-member">
                        Matthew McConaughey
                    </span>

                    <span class="cast-member">
                        Anne Hathaway
                    </span>

                    <span class="cast-member">
                        Jessica Chastain
                    </span>

                    <span class="cast-member">
                        Michael Caine
                    </span>

                </div>

            </section>


            <!-- Informações adicionais -->

            <section class="movie-content-section movie-details">

                <h2>Informações</h2>

                <dl>

                    <div>
                        <dt>Direção</dt>
                        <dd>Christopher Nolan</dd>
                    </div>

                    <div>
                        <dt>Gêneros</dt>
                        <dd>
                            Ficção científica, Drama e Aventura
                        </dd>
                    </div>

                    <div>
                        <dt>Lançamento</dt>
                        <dd>2014</dd>
                    </div>

                </dl>

            </section>


            <!-- Navegação inferior -->

            <nav
                class="bottom-nav"
                aria-label="Navegação principal"
            >

                <a href="/home" class="nav-item active">
                    ${icon("home", 25)}
                    <span>Início</span>
                </a>

                <a href="/search" class="nav-item">
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

        </main>
    `;

    setupMovieInteractions();
}


function setupMovieInteractions() {

    /* Sinopse */

    const synopsis = document.querySelector(".movie-synopsis");
    const synopsisButton = document.querySelector(".synopsis-toggle");

    synopsisButton?.addEventListener("click", () => {

        synopsis.classList.toggle("expanded");

        const expanded = synopsis.classList.contains("expanded");

        synopsisButton.textContent =
            expanded ? "Ver menos" : "Ver mais";
    });


    /* Minha lista */

    const listButtons = document.querySelectorAll(
        ".list-button, .movie-header-bookmark"
    );

    listButtons.forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelector(".list-button")
                ?.classList.toggle("selected");

            document
                .querySelector(".movie-header-bookmark")
                ?.classList.toggle("selected");

        });

    });

}