
import { renderLogin } from "../views/login.js";
import { renderHome } from "../views/home.js";
import { renderMovie } from "../views/movie.js";
import { renderSearch } from "../views/search.js";

function renderPlaceholder(title, description) {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <main style="
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px;
            text-align: center;
            background: #0B0F17;
            color: #F5F5F5;
        ">
            <div style="
                color: #FF6B00;
                margin-bottom: 16px;
                font-size: 40px;
            ">🎬</div>

            <h1 style="font-size: 25px; margin-bottom: 10px;">
                ${title}
            </h1>

            <p style="
                max-width: 300px;
                color: #AAB4C3;
                line-height: 1.6;
            ">${description}</p>

            <a href="/home" style="
                margin-top: 24px;
                padding: 13px 22px;
                border-radius: 12px;
                background: #FF6B00;
                color: #FFFFFF;
                text-decoration: none;
                font-weight: 600;
            ">Voltar para o início</a>
        </main>
    `;
}

export function router() {
    const path = window.location.pathname;

    switch (path) {
        case "/":
        case "/login":
            renderLogin();
            break;

        case "/home":
            renderHome();
            break;

        case "/search":
            renderSearch();
            break;

        case "/filters":
            renderPlaceholder(
                "Filtros",
                "Em breve você poderá encontrar filmes por gênero, avaliação e outros critérios."
            );
            break;

        case "/movie":
            renderMovie();
            break;

        case "/results":
            renderPlaceholder(
                "Todos os filmes",
                "Aqui você poderá explorar os filmes disponíveis no CinePasse."
            );
            break;

        case "/list":
            renderPlaceholder(
                "Minha Lista",
                "Aqui ficarão os filmes que você salvar para assistir depois."
            );
            break;

        case "/profile":
            renderPlaceholder(
                "Meu perfil",
                "Aqui você poderá visualizar as informações da sua conta."
            );
            break;

        default:
            window.history.replaceState({}, "", "/login");
            renderLogin();
    }
}