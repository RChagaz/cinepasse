
export function renderLogin() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <section class="login-screen">

            <!-- Fundo cinematográfico -->
            <div class="cinema-background" aria-hidden="true">
                <div class="cinema-light"></div>
                <div class="film-strip"></div>
            </div>

            <div class="login-content">

                <!-- Identidade visual -->
                <header class="login-brand">

                    <div class="brand-icon" aria-hidden="true">
                        <svg viewBox="0 0 48 48" fill="none">
                            <rect x="6" y="9" width="36" height="30"
                                rx="3" stroke="currentColor"
                                stroke-width="3"/>
                            <path d="M6 17H42M6 31H42"
                                stroke="currentColor"
                                stroke-width="3"/>
                            <path d="M14 9L18 17M30 9L34 17"
                                stroke="currentColor"
                                stroke-width="3"/>
                            <path d="M18 21L29 24L18 29V21Z"
                                fill="currentColor"/>
                        </svg>
                    </div>

                    <h1 class="brand-name">
                        Poster<span>flix</span>
                    </h1>

                    <p class="brand-tagline">
                        A arte do cinema na palma da sua mão
                    </p>

                </header>

                <!-- Formulário -->
                <section class="login-form-section">

                    <div class="login-heading">
                        <h2 id="form-title">Bem-vindo de volta!</h2>
                        <p id="form-subtitle">
                            Faça login para continuar explorando
                            o universo do cinema.
                        </p>
                    </div>

                    <form id="login-form" novalidate>

                        <div class="signup-name" id="name-group" hidden>
                            <label for="name">Nome</label>
                            <div class="input-wrapper">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Seu nome"
                                    autocomplete="name"
                                >
                            </div>
                        </div>

                        <!-- E-mail -->
                        <div class="form-group">
                            <label for="email">E-mail ou usuário</label>

                            <div class="input-wrapper">
                                <svg class="input-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true">
                                    <rect x="3" y="5" width="18"
                                        height="14" rx="2"
                                        stroke="currentColor"
                                        stroke-width="1.8"/>
                                    <path d="M4 7L12 13L20 7"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"/>
                                </svg>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-mail ou usuário"
                                    autocomplete="email"
                                    aria-describedby="email-error"
                                    required
                                >
                            </div>

                            <small class="field-error"
                                id="email-error"></small>
                        </div>

                        <!-- Senha -->
                        <div class="form-group">
                            <label for="password">Senha</label>

                            <div class="input-wrapper">
                                <svg class="input-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true">
                                    <rect x="4" y="10" width="16"
                                        height="11" rx="2"
                                        stroke="currentColor"
                                        stroke-width="1.8"/>
                                    <path d="M8 10V7A4 4 0 0 1 16 7V10"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"/>
                                </svg>

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    autocomplete="current-password"
                                    aria-describedby="password-error"
                                    required
                                >

                                <button
                                    type="button"
                                    class="password-toggle"
                                    id="password-toggle"
                                    aria-label="Mostrar senha"
                                    aria-pressed="false"
                                >
                                    <svg viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true">
                                        <path d="M2 12S5.5 5 12 5
                                            S22 12 22 12
                                            S18.5 19 12 19
                                            S2 12 2 12Z"
                                            stroke="currentColor"
                                            stroke-width="1.7"/>
                                        <circle cx="12" cy="12" r="3"
                                            stroke="currentColor"
                                            stroke-width="1.7"/>
                                    </svg>
                                </button>
                            </div>

                            <small class="field-error"
                                id="password-error"></small>
                        </div>

                        <!-- Esqueci a senha -->
                        <div class="forgot-password" id="forgot-wrapper">
                            <button type="button" id="forgot-password">
                                Esqueci minha senha
                            </button>
                        </div>

                        <!-- Erro e feedback -->
                        <div class="form-feedback"
                            id="form-feedback"
                            role="alert"
                            aria-live="polite"
                            hidden>
                        </div>

                        <!-- Botão principal -->
                        <button type="submit" class="login-button">
                            <span id="submit-label">Entrar</span>
                            <svg viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true">
                                <path d="M4 12H20M13 5L20 12L13 19"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                        </button>

                    </form>

                    <!-- Divisor -->
                    <div class="social-divider">
                        <span></span>
                        <p>ou continue com</p>
                        <span></span>
                    </div>

                    <!-- Login social -->
                    <div class="social-buttons">

                        <button type="button"
                            class="social-button"
                            data-provider="Google">
                            <svg viewBox="0 0 48 48"
                                aria-hidden="true">
                                <path fill="#4285F4"
                                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.5 9.5 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"/>
                                <path fill="#34A853"
                                    d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"/>
                                <path fill="#FBBC05"
                                    d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"/>
                                <path fill="#EA4335"
                                    d="M24 11.9c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.9 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3c1.6-4.9 6.1-8.5 11.4-8.5Z"/>
                            </svg>
                            <span>Google</span>
                        </button>

                        <button type="button"
                            class="social-button"
                            data-provider="Apple">
                            <svg viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true">
                                <path d="M16.7 12.8c0-2.3 1.9-3.4 2-3.5a4.4 4.4 0 0 0-3.5-1.9c-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.9A4.8 4.8 0 0 0 4.2 10c-1.8 3.1-.5 7.7 1.2 10.2.8 1.2 1.8 2.6 3.1 2.5 1.2 0 1.7-.8 3.2-.8s2 .8 3.2.8c1.3 0 2.2-1.2 3-2.5a11 11 0 0 0 1.4-2.8 4.1 4.1 0 0 1-2.6-4.6ZM14.3 5.8a4.3 4.3 0 0 0 1-3.1 4.4 4.4 0 0 0-2.9 1.5 4 4 0 0 0-1 3 3.7 3.7 0 0 0 2.9-1.4Z"/>
                            </svg>
                            <span>Apple</span>
                        </button>

                    </div>

                    <!-- Cadastro -->
                    <p class="signup-prompt" id="signup-prompt">
                        Não tem uma conta?
                        <button type="button" id="signup-toggle">
                            Criar conta
                        </button>
                    </p>

                    <p class="terms-text">
                        Ao continuar, você aceita os
                        <a href="#" id="terms-link">Termos de Uso</a>
                        e a
                        <a href="#" id="privacy-link">
                            Política de Privacidade
                        </a>.
                    </p>

                </section>
            </div>
        </section>
    `;

    // Elementos
    const form = document.querySelector("#login-form");
    const password = document.querySelector("#password");
    const passwordToggle = document.querySelector("#password-toggle");
    const email = document.querySelector("#email");
    const name = document.querySelector("#name");
    const nameGroup = document.querySelector("#name-group");
    const title = document.querySelector("#form-title");
    const subtitle = document.querySelector("#form-subtitle");
    const submitLabel = document.querySelector("#submit-label");
    const signupToggle = document.querySelector("#signup-toggle");
    const signupPrompt = document.querySelector("#signup-prompt");
    const forgotWrapper = document.querySelector("#forgot-wrapper");
    const feedback = document.querySelector("#form-feedback");

    let isSignup = false;

    // Mostrar ou ocultar senha
    passwordToggle.addEventListener("click", () => {
        const isVisible = password.type === "text";

        password.type = isVisible ? "password" : "text";
        passwordToggle.setAttribute(
            "aria-label",
            isVisible ? "Mostrar senha" : "Ocultar senha"
        );
        passwordToggle.setAttribute("aria-pressed", String(!isVisible));
    });

    // Alternar entre login e cadastro
    
function toggleSignup() {
    isSignup = !isSignup;

    nameGroup.hidden = !isSignup;
    name.required = isSignup;

    title.textContent = isSignup
        ? "Crie sua conta!"
        : "Bem-vindo de volta!";

    subtitle.textContent = isSignup
        ? "Cadastre-se para explorar o universo do cinema."
        : "Faça login para continuar explorando o universo do cinema.";

    submitLabel.textContent = isSignup
        ? "Criar conta"
        : "Entrar";

    signupPrompt.innerHTML = isSignup
        ? 'Já tem uma conta? <button type="button" id="signup-toggle">Entrar</button>'
        : 'Não tem uma conta? <button type="button" id="signup-toggle">Criar conta</button>';

    signupPrompt.querySelector("#signup-toggle")
        .addEventListener("click", toggleSignup);

    forgotWrapper.hidden = isSignup;
    password.autocomplete = isSignup
        ? "new-password"
        : "current-password";

    feedback.hidden = true;
    clearErrors();
}

signupToggle.addEventListener("click", toggleSignup);
  

    // Limpar erros dos campos
    function clearErrors() {
        document.querySelector("#email-error").textContent = "";
        document.querySelector("#password-error").textContent = "";
        email.removeAttribute("aria-invalid");
        password.removeAttribute("aria-invalid");
        name.removeAttribute("aria-invalid");
    }

    // Mensagem de feedback
    function showFeedback(message, type = "error") {
        feedback.textContent = message;
        feedback.className = `form-feedback ${type}`;
        feedback.hidden = false;
    }

    // Validação demonstrativa do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        clearErrors();
        feedback.hidden = true;

        let valid = true;

        if (isSignup && !name.value.trim()) {
            name.setAttribute("aria-invalid", "true");
            valid = false;
        }

        if (!email.value.trim()) {
            document.querySelector("#email-error").textContent =
                "Informe seu e-mail.";
            email.setAttribute("aria-invalid", "true");
            valid = false;
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
        ) {
            document.querySelector("#email-error").textContent =
                "Digite um e-mail válido.";
            email.setAttribute("aria-invalid", "true");
            valid = false;
        }

        if (!password.value) {
            document.querySelector("#password-error").textContent =
                "Informe sua senha.";
            password.setAttribute("aria-invalid", "true");
            valid = false;
        } else if (password.value.length < 6) {
            document.querySelector("#password-error").textContent =
                "A senha deve ter pelo menos 6 caracteres.";
            password.setAttribute("aria-invalid", "true");
            valid = false;
        }

        if (!valid) {
            showFeedback(
                "Verifique os campos destacados e tente novamente."
            );

            form.querySelector('[aria-invalid="true"]')?.focus();
            return;
        }

        if (isSignup) {
            showFeedback(
                "Cadastro demonstrativo: a autenticação ainda não está conectada.",
                "success"
            );
        } else {
            // Acesso demonstrativo, sem validar credenciais em servidor
            window.location.href = "/home";
        }
    });

    // Recuperação de senha
    document.querySelector("#forgot-password")
        .addEventListener("click", () => {
            showFeedback(
                "A recuperação de senha estará disponível em uma versão futura.",
                "info"
            );
        });

    // Botões sociais demonstrativos
    document.querySelectorAll("[data-provider]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                showFeedback(
                    `O login com ${button.dataset.provider} é apenas ilustrativo neste protótipo.`,
                    "info"
                );
            });
        });

    // Links informativos
    document.querySelector("#terms-link").addEventListener("click", (event) => {
        event.preventDefault();
        showFeedback("Os Termos de Uso serão disponibilizados futuramente.", "info");
    });

    document.querySelector("#privacy-link").addEventListener("click", (event) => {
        event.preventDefault();
        showFeedback("A Política de Privacidade será disponibilizada futuramente.", "info");
    });
}