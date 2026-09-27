import { renderLogin } from "../views/login.js";
import { renderHome } from "../views/home.js";
import { renderMovie } from "../views/movie.js";
import { renderSearch } from "../views/search.js";
import { renderFilters } from "../views/filters.js";
import { renderResults } from "../views/results.js";

export function router() {

    const path = window.location.pathname;

    switch (path) {

        case "/login":
            renderLogin();
            break;

        case "/home":
            renderHome();
            break;

        case "/movie":
            renderMovie();
            break;

        case "/search":
            renderSearch();
            break;

        case "/filters":
            renderFilters();
            break;

        case "/results":
            renderResults();
            break;

        default:
            window.history.replaceState({}, "", "/login");
            renderLogin();
    }
}