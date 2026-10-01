# PORTFOLIO.EXE — Luis Mercado

Portafolio personal con estética retro tipo Windows 9x, hecho con [Astro](https://astro.build).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Editar contenido

Todo el contenido (proyectos, experiencia, stack, contacto) está en `src/data/site.ts`, en español e inglés.

- **Foto:** pon tu imagen en `public/` y asigna `photo: "/foto.jpg"` en `site.ts`.
- **LinkedIn:** asigna `linkedin: "https://linkedin.com/in/..."` y aparecerá la tarjeta.
- **Capturas de proyectos:** reemplaza los archivos en `public/projects/`.
- **CV:** reemplaza `public/CV_Luis_Mercado.pdf`.

Cada `git push` a `main` se publica automáticamente en Vercel.
