# DU10 Adventure

A data‑driven **text adventure** inspired by the Ming‑dynasty tale *杜十娘怒沉百宝箱* (from *警世通言*).  The project demonstrates how to pair a modern Vue 3 front‑end with AI agents that auto‑generate dialogue, artwork, and code.

---

## ✨ Features

| Phase                              | Status | Highlights                                                                                                   |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| **Phase 1 ‑ Skeleton**             | ✅ Done | Vite + Vue 3 + TypeScript + Pinia, basic routing, sample scenes, Playwright smoke test, CI on GitHub Actions |
| **Phase 2 ‑ Multi‑Agent Pipeline** | 🚧     | StoryDirector & ArtPainter agents (CrewAI/AutoGen), automatic JSON scenes + image assets                     |
| **Phase 3 ‑ Content Sprint**       | ⏳      | Full chapter coverage, branching choices, CG refinement                                                      |
| **Phase 4 ‑ Release**              | ⏳      | Deploy to Cloudflare Pages, cost tracking, analytics                                                         |

---

## 🛠 Tech Stack

* **Frontend**  Vite 5 · Vue 3 · TypeScript · Pinia
* **Testing**    Playwright
* **CI/CD**     GitHub Actions → Cloudflare Pages (or Vercel)
* **AI Agents** CrewAI / AutoGen (GPT‑4o, Leonardo.ai, etc.)

---

## ⚡ Quick Start

```bash
# Node 18+, pnpm 8+
pnpm install
pnpm run dev            # http://localhost:5173/
```

Run smoke tests:

```bash
npx playwright test      # headless chromium
```

Build for production:

```bash
pnpm run build           # output in dist/
```

---

## 📂 Directory Layout

```
├─ public/            # static assets served as‑is
├─ src/
│  ├─ assets/         # bg & char placeholder images
│  ├─ pages/          # Title.vue, Game.vue, Save.vue
│  ├─ router/         # vue‑router definitions
│  ├─ stores/         # pinia stores (game state)
│  ├─ types/          # TypeScript interfaces (Scene, GameState…)
│  ├─ utils/          # helper modules (assetLoader…)
│  └─ main.ts         # app entry
├─ tests/             # Playwright E2E specs
└─ vite.config.ts     # Vite + path aliases
```

---

## 🔄 Roadmap

* **Write `chap01.json`** · migrate hard‑coded sample scenes to external JSON
* **Integrate StoryDirector agent** · function‑calling schema validation
* **Hook ArtPainter agent** · background & character image generation
* **State persistence** · multiple save slots, autosave
* **Polish UI** · dialogue typing effect, history log, skip/auto mode

---

## 🤝 Contributing

1. Fork & clone
2. Create feature branch: `git checkout -b feat/awesome`
3. Commit & push: `git commit -am "feat: awesome" && git push`
4. Open Pull Request — ensure Playwright tests pass.

> **Coding style**  Prefer Composition API & `<script setup>`, follow Prettier default.

---

## 📝 License

MIT © 2025 the DU10 Adventure contributors
