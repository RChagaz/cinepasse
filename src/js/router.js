
import { renderLogin } from "../views/login.js";

export function router() {
    const path = window.location.pathname;

    switch (path) {
        case "/":
        case "/login":
            renderLogin();
            break;

        default:
            window.history.replaceState({}, "", "/login");
            renderLogin();
            break;
    }
}