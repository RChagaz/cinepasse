
const trendingMovies = [
    { id: "duna", title: "Duna", rating: "8.2", art: "duna", year: "2024" },
    { id: "batman", title: "Batman", rating: "8.5", art: "batman", year: "2022" },
    { id: "oppenheimer", title: "Oppenheimer", rating: "8.4", art: "oppenheimer", year: "2023" },
    { id: "top-gun", title: "Top Gun Maverick", rating: "8.3", art: "topgun", year: "2022" }
];

const newReleases = [
    { id: "deadpool", title: "Deadpool & Wolverine", rating: "8.1", art: "deadpool", year: "2024" },
    { id: "divertida-mente", title: "Divertida Mente 2", rating: "8.0", art: "insideout", year: "2024" },
    { id: "gladiador", title: "Gladiador II", rating: "7.8", art: "gladiator", year: "2024" },
    { id: "godzilla", title: "Godzilla e Kong", rating: "7.6", art: "godzilla", year: "2024" }
];

const genres = [
    { name: "Ação", icon: "clapperboard", id: "acao" },
    { name: "Comédia", icon: "smile", id: "comedia" },
    { name: "Drama", icon: "drama", id: "drama" },
    { name: "Ficção Científica", icon: "orbit", id: "ficcao-cientifica" },
    { name: "Terror", icon: "ghost", id: "terror" }
];

const icons = {
    clapperboard: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M7 5l3 5m3-5 3 5m3-5 2 5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    sliders: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>',
    bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
    play: '<path d="m8 5 12 7-12 7z" fill="currentColor" stroke="none"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    drama: '<path d="M12 3a9 9 0 1 0 9 9c0-1-1-2-2-2h-2a2 2 0 0 1-2-2V6a3 3 0 0 0-3-3Z"/><path d="M7.5 10h.01M10 7h.01M15 7h.01M17 13h.01"/>',
    orbit: '<circle cx="12" cy="12" r="3"/><path d="M2 12c0-3 4.5-5 10-5s10 2 10 5-4.5 5-10 5S2 15 2 12Z" transform="rotate(-30 12 12)"/><circle cx="19" cy="5" r="1"/>',
    ghost: '<path d="M5 21V11a7 7 0 0 1 14 0v10l-3-2-2 2-2-2-2 2-2-2z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/>'
};

function icon(name, size = 24) {
    return `
        <svg width="${size}" height="${size}"
             viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
            ${icons[name] || ""}
        </svg>
    `;
}

function movieCard(movie) {
    return `
        <article class="movie-card">
            <div class="movie-poster">
                <img
                    src="/images/posters/${movie.art}.webp"
                    alt="Pôster de ${movie.title}"
                    loading="lazy"
                />
            </div>

            <span class="movie-title">${movie.title}</span>

            <span class="movie-rating">
                <span class="rating-star">★</span>
                ${movie.rating}
            </span>
        </article>
    `;
}

function sectionHeader(title, link = "/results") {
    return `
        <div class="section-header">
            <h2>${title}</h2>
            <a href="${link}" class="see-all">
                Ver todos ${icon("arrow", 17)}
            </a>
        </div>
    `;
}

function renderGenres() {
    return genres.map(genre => `
        <a class="genre-card" href="/filters?genre=${genre.id}">
            <span class="genre-icon">
                ${icon(genre.icon, 29)}
            </span>
            <span>${genre.name}</span>
        </a>
    `).join("");
}

function renderBottomNav() {
    return `
        <nav class="bottom-nav" aria-label="Navegação principal">
            <a href="/home" class="nav-item active"
               aria-current="page">
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
            <a href="/list" class="nav-item">
                ${icon("bookmark", 25)}
                <span>Minha Lista</span>
            </a>
        </nav>
    `;
}

export function renderHome() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <main class="home-screen">

            <header class="home-header">
                <a href="/home" class="home-brand" aria-label="CinePasse - Início">
                    <span class="home-brand-icon">
                        ${icon("clapperboard", 27)}
                    </span>
                    <span class="home-brand-name">
                        Cine<span>Passe</span>
                    </span>
                </a>

                <div class="header-actions">
                    <a href="/search" class="header-icon"
                       aria-label="Buscar filmes">
                        ${icon("search", 25)}
                    </a>
                    <a href="/profile" class="profile-button"
                       aria-label="Meu perfil">
                        ${icon("user", 24)}
                    </a>
                </div>
            </header>

            
<section class="featured-section"
         aria-label="Filme em destaque">

    <div class="featured-banner">
        <img
            class="featured-image"
            src="/images/banners/interestelar.jpg"
            alt=""
            aria-hidden="true"
        />

        <div class="featured-overlay"></div>

        <div class="featured-content">
            <span class="featured-badge">EM DESTAQUE</span>

            <h1>Interestelar</h1>

            <p>
                Uma jornada épica através do espaço
                e do tempo.
            </p>

            <a href="/movie" class="featured-button">
            <span>Ver detalhes</span>
            ${icon("arrow", 20)}
            </a>
        </div>
    </div>

    <div class="carousel-indicators"
         aria-label="Destaque 1 de 4">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
    </div>

</section>

                <div class="carousel-indicators"
                     aria-label="Destaque 1 de 4">
                    <span class="indicator active"></span>
                    <span class="indicator"></span>
                    <span class="indicator"></span>
                    <span class="indicator"></span>
                </div>
            </section>

            <section class="home-section">
                ${sectionHeader("Em alta agora")}
                <div class="movie-carousel">
                    ${trendingMovies.map(movieCard).join("")}
                </div>
            </section>

            <section class="home-section">
                ${sectionHeader("Gêneros", "/filters")}
                <div class="genre-carousel">
                    ${renderGenres()}
                </div>
            </section>

            <section class="home-section releases-section">
                ${sectionHeader("Lançamentos")}
                <div class="movie-carousel">
                    ${newReleases.map(movieCard).join("")}
                </div>
            </section>

            ${renderBottomNav()}
        </main>
    `;
}