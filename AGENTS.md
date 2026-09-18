<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Styling conventions

Tailwind CSS v4, CSS-first. All design tokens live in `app/globals.css` — there is no `tailwind.config`.

## No arbitrary values

**Do not write arbitrary `[...]` values in `className`.** They bypass the design system and the editor flags them. In order of preference:

1. **A standard Tailwind utility.** The v4 spacing scale is dynamic, so `h-120` (30rem), `max-w-68` (17rem), `size-4.5`, `border-y-3` and `scale-105` all work without config. Don't reach for `h-[30rem]`.
2. **An existing theme token** from the `@theme` block — colours (`bg-sabi-cobalt`, `text-sabi-yellow-soft`), type (`text-display`, `text-headline`, `text-body`, `text-meta`, `text-micro`), tracking (`tracking-eyebrow`, `tracking-label`), shadow (`shadow-yellow-lift`), easing (`ease-sabi`).
3. **A new token** in `@theme`, if the value is reusable. Name it for its role, not its size.
4. **A custom `@utility`**, if no namespace fits (`hero-frame`, `auto-rows-tile`, `hero-key-light`, `transition-visual`).

Before assuming a utility doesn't exist, check — v4 generates far more from the dynamic scales than v3 did. `auto-rows-*` is one that genuinely has no spacing namespace, which is why `auto-rows-tile` exists.

Watch the `--color-*` / `--text-*` collision: if both `--color-x` and `--text-x` exist, `text-x` resolves to the **colour**. Keep the namespaces distinct.

## Colour rules (from the brand guideline, contrast-computed)

- **Pumpkin Orange `#F16514` fields take BLACK type only.** White is 3.18:1 and yellow 2.25:1 — both fail.
- **Sabi Yellow `#FFD600` fields take BLACK type only.** White is 1.41:1.
- Orange at text size fails on white too; use `text-sabi-orange-deep` for labels on light fields.
- Never introduce a colour outside the brand palette and its `-deep` / `-soft` derivatives. The pre-redesign site used an invented cyan/navy — don't reintroduce them.

## Motion

- Scroll reveals use `.reveal` / `.reveal-scale` + `useScrollAnimation()`; stagger with inline `transitionDelay`.
- Every animation must respect `prefers-reduced-motion` — the global guard forces revealed content visible, so never rely on animation to make content appear.
- **The navbar and footer are deliberately un-animated.** No scroll listeners, no reveals, no entrance animation.
- Never call `setState` synchronously in an effect body (lint enforces this); defer with `requestAnimationFrame`.

## Fonts

Montserrat (headings, `font-heading`), Poppins (body, `font-sans`), Archivo (display/poster, `font-display`) standing in for the brand's licensed Agrandir Wide. The font block **must** stay `@theme inline` — a plain `@theme` substitutes at `:root` and the fonts silently die if the classes move off `<html>`.
