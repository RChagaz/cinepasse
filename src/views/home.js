export function renderHome() {

    const app = document.querySelector("#app");

    app.innerHTML = `

        <section class="home-screen">

            <header class="app-header">

                <h1>CinePasse</h1>

                <button class="search-button">
                    🔍
                </button>

            </header>

            <section class="featured">

                <h2>Em destaque</h2>

                <div class="poster-grid">

                    <img src="/images/posters/poster-1.jpg">
                    <img src="/images/posters/poster-2.jpg">

                </div>

            </section>

        </section>

    `;
}