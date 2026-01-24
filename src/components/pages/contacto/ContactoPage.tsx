<!doctype html>
<html lang="es-ES">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contacto | SaludMark</title>
    <meta name="description"
        content="Contacte con SaludMark en Barcelona. Estamos listos para ayudarle a digitalizar su práctica médica." />
</head>
<body>
    <div id="app">
        <header id="header" class="header"></header>
        <main>
            <section class="page-header section text-center">
                <div class="container">
                    <h1 class="section-title">Hablemos</h1>
                    <p class="section-subtitle">Estamos a un mensaje de distancia de transformar su presencia digital.
                    </p>
                </div>
            </section>
            <!-- Reuse Contact Component Logic or Structure, but statically here for SEO -->
            <section class="contact-section section container">
                <div class="contact-grid">
                    <div class="contact-info">
                        <h3>Información de Contacto</h3>
                        <p class="mb-sm">📍 Carrer de la Marina, 123, 08013 Barcelona, España</p>
                        <p class="mb-sm">📞 +34 93 123 45 67</p>
                        <p class="mb-sm">✉️ info@saludmark.es</p>
                        <div class="map-placeholder">
                            <!-- Map iframe would go here -->
                            <div
                                style="background: #e0e0e0; width: 100%; height: 250px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #666;">
                                Mapa de Barcelona (Google Maps)</div>
                        </div>
                    </div>
                    <div class="contact-form-wrapper">
                        <form class="contact-form" onsubmit="event.preventDefault(); alert('Mensaje enviado (demo)');">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input type="text" id="name" placeholder="Su nombre" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="su@email.com" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Teléfono</label>
                                <input type="tel" id="phone" placeholder="+34 600 000 000">
                            </div>
                            <div class="form-group">
                                <label for="message">Mensaje</label>
                                <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarle?"
                                    required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-full">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </section>
            <section class="faq-section section container">
                <h2 class="section-title text-center mb-md">Preguntas Frecuentes</h2>
                <!-- Static FAQ for SEO -->
                <div class="faq-list">
                    <details class="faq-item"
                        style="padding: 1rem; border: 1px solid #eee; margin-bottom: 0.5rem; background: var(--color-surface); border-radius: var(--radius-sm);">
                        <summary style="cursor: pointer; font-weight: 600;">¿Ofrecen exclusividad geográfica?</summary>
                        <p class="mt-2 text-gray-600" style="margin-top: 0.5rem; color: var(--color-text-light);">Sí,
                            para servicios de SEO, solo trabajamos con una clínica por especialidad en cada código
                            postal para evitar conflictos de interés.</p>
                    </details>
                    <details class="faq-item"
                        style="padding: 1rem; border: 1px solid #eee; margin-bottom: 0.5rem; background: var(--color-surface); border-radius: var(--radius-sm);">
                        <summary style="cursor: pointer; font-weight: 600;">¿Tienen permanencia?</summary>
                        <p class="mt-2 text-gray-600" style="margin-top: 0.5rem; color: var(--color-text-light);">No
                            creemos en las ataduras. Nuestros clientes se quedan por los resultados, no por contrato.
                        </p>
                    </details>
                </div>
            </section>
        </main>
        <footer id="footer" class="footer"></footer>
        <div id="chatbot-container"></div>
        <div id="booking-modal-container"></div>
    </div>
    <script type="module" src="/src/js/global.js"></script>
</body>
</html>
