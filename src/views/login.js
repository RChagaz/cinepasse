export function renderLogin() {

    const app = document.querySelector("#app");

    app.innerHTML = `
        <section class="login-screen">

            <div class="login-container">

                <div class="logo">
                    CinePasse
                </div>

                <h1>Bem-vindo de volta</h1>

                <p>
                    Entre para continuar assistindo
                </p>

                <form>

                    <label for="email">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                    >

                    <label for="password">
                        Senha
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                    >

                    <button type="submit">
                        Entrar
                    </button>

                </form>

                <a href="#">
                    Esqueci minha senha
                </a>

                <p>
                    Não tem conta?
                    <a href="#">
                        Criar conta
                    </a>
                </p>

            </div>

        </section>
    `;
}