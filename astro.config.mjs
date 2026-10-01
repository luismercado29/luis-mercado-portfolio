import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://luis-mercado-portfolio.vercel.app",
  trailingSlash: "ignore",
  security: {
    // Genera una Content-Security-Policy con hashes de cada script y estilo.
    csp: {
      algorithm: "SHA-256",
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
    },
  },
});
