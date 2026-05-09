# Roadmap — Лендинг HR-агентства недвижимости

> Перенос готового дизайна во фронтенд под ключ.
> Стек: **Next.js 16 (App Router) + TypeScript**, Swiper.js, GSAP + ScrollTrigger, cheerio.
> Подход: **mobile-first на каждом блоке** (не финальным проходом). Деплой: **Vercel**.

---

## 0. Конвенции проекта (зафиксировано)

- [x] Стили: **global CSS в `app/globals.css`** (без CSS Modules — чистые имена в DevTools)
- [x] Нейминг: **Finsweet client-first** — `block`, `block_element`, `block_element-modifier`. Примеры: `.section_hero`, `.hero_heading`, `.hero_clients-title-rotor`, `.site-header_nav`
- [x] Брейкпоинты: mobile <768, tablet 768–1279, desktop ≥1280 (figma exact)
- [x] Шрифты: `next/font/local` с `display: swap`
- [x] Анимации: scroll-listener + `requestAnimationFrame` + `passive: true` + `will-change: transform`. GSAP ScrollTrigger зарезервирован для блока «Как мы делаем»
- [x] SEO-семантика: один `<h1>` на странице, `<h2>` для подзаголовков секций
- [x] A11y: `:focus-visible`, `aria-label` на nav, `alt=""` для декоративных изображений

---

## 1. Инициализация Next.js проекта

- [x] Удалить vanilla-структуру (`index.html`, `css/`, `js/`)
- [x] `create-next-app` (TS, App Router, без src/, без Tailwind)
- [x] Папки `assets/{fonts,icons,img,video}` перенесены в `public/`
- [x] Зависимости: `swiper`, `gsap`, `cheerio`
- [x] `next.config.ts`, `tsconfig.json` (paths `@/*`)
- [x] ESLint config (default)
- [ ] `.env.local` для секретов (`TG_BOT_TOKEN`, `TG_CHAT_ID`, `TG_CHANNEL`, `NEXT_PUBLIC_SITE_URL`)
- [x] `.gitignore` (включая `.env*.local`)
- [ ] Инициализировать git repo
- [ ] Свериться с актуальной докой Next.js 16 / Cache Components перед каждой новой фичей

---

## 2. Базовые стили и токены

- [x] `app/globals.css`: reset, CSS-переменные (`--bg`, `--limon`, `--white`, `--gray`)
- [x] Локальные шрифты через `next/font/local` (ALS Hauss Regular/Medium, GT America Compressed Bold Italic)
- [x] `app/layout.tsx`: метатеги, OG, twitter, robots, JSON-LD Organization
- [x] Базовая типографика и контейнер
- [ ] Утилитарные классы (если понадобятся): `.padding-global`, `.container-large` в стиле finsweet

---

## 3. Структура страниц и роутов

- [x] `app/page.tsx` — главная (лендинг)
- [ ] `app/privacy/page.tsx` — политика конфиденциальности
- [ ] `app/offer/page.tsx` — оферта (если в дизайне)
- [x] Общие `Header` и (TBD) `Footer` как отдельные компоненты в `components/`

---

## 4. Шапка (Header) — mobile-first ✅ pixel-perfect под figma

- [x] Mobile (<768): логотип + TG-иконка справа (полная nav скрыта; бургер — TODO когда появится дизайн)
- [x] Tablet (768–1279): полная nav компактным размером (14px)
- [x] Desktop (≥1280): figma exact — nav GT America CB Italic 18px, gap 68, padding right 80, padding-bottom 10
- [x] Sticky-поведение через `position: fixed`
- [x] Scroll-морф логотипа: big (figma 295.6×163.2 / native) → small (figma 72.4×40) за 150px скролла, viewport-aware параметры
- [x] Плавная прокрутка по якорям через `scroll-behavior: smooth`
- [x] `:focus-visible` для клавиатуры
- [ ] Бургер-меню для phone (overlay со ссылками + TG) — когда будет мобильный фрейм figma

---

## 5. Главный блок (Hero) — mobile-first ✅ pixel-perfect под figma

- [x] H1 («Закрываем дизайнерские вакансии за 2–4 недели»), H2 («КЛИЕНТЫ») — семантика для SEO
- [x] Главное фото через `next/image` (`priority`, WebP/AVIF автоматом)
- [x] Параллакс scroll-listener + rAF: photo (factor 0.5) / heading (0.7) / stats (0.85)
- [x] Логотип ХАЙРИ не пересекается с heading (морф = 150px, факторы выровнены)
- [x] Mobile (<768): стек heading → photo → stats → clients, paddings 20px, типографика 32/96/56
- [x] Tablet (768–1279): стек 60px, типографика 44/140
- [x] Desktop (≥1280): figma absolute layout — heading@(116, 231) 52/56.326, stats@(837.79, 404), photo@(383, 90, 502×630), clients@(82, 803, 1116)
- [x] Сетка клиентов 5+3 с per-item gap (15/14/14/13/14) и per-caption width (141/180/123/195/176)
- [x] Vkusvill caption — text-left (как в figma), остальные text-center
- [x] КЛИЕНТЫ — rotated -9° текст в обёртке absolute centered

---

## 6. Кейсы — Telegram-парсер + Swiper

- [x] Статическая вёрстка секции pixel-perfect под figma 2001:15 (white bg, 1280×877, 3 cards bottom-aligned)
- [x] H2 «КЕЙСЫ» GT America CB Italic 84.093/66.63 на десктопе, 56px на mobile
- [x] 3 типа card-media: `stacked` (276×282 для Самолёт), `strip` (319×86 r-8 для WB), `round` (200×203 r-98 для Relate)
- [x] Per-card gap (16/17/16 outer, 14/16/26 content) + per-card alignment (start/end/start)
- [x] Кнопка «Читать»: bg limon, rounded-999, асимметричный padding 20/16/24
- [x] Mobile-first: cards стек вертикально на <1280, гориз. в ряд на ≥1280
- [x] Finsweet нейминг: `.section_cases`, `.cases_card`, `.cases_card-media-stacked` etc.
- [x] Подключено к `app/page.tsx` после Hero
- [x] `lib/telegram.ts`: `fetchCasePosts()` — fetch `t.me/s/<channel>` + cheerio, лимит 5
- [x] Извлекает: `id`, `url`, `title` (1-я строка), `description` (остальные), `mediaType`, `mediaUrl`
- [x] `next: { revalidate: 86400 }` — обновление раз в сутки
- [x] Fallback на 5 figma-постов при ошибке/пустом ответе
- [x] Cases server component async: грузит данные → в `<CasesSwiper>`
- [x] Маппинг `imageType`: `roundvideo_thumb` → `round`, `photo_wrap`/`video_thumb` → `strip`
- [x] Client `<CasesSwiper>`: Swiper v12 init, `loop: posts.length > 3`, 5 постов, навигация + пагинация
- [x] Слайд: превью медиа + текст + кнопка «Читать» → `t.me/<channel>/<post_id>`
- [x] Адаптив: 1 / 2 / 3 слайда (mobile / tablet / desktop), spaceBetween 24/32/44
- [ ] Видео-превью: `muted`, `playsinline`, `loop`, autoplay (если в посте видео)
- [ ] Кастомные стрелки/dots свайпера под дизайн (когда будет фрейм)
- [ ] `TG_CHANNEL` в `.env.local` и Vercel env (по умолчанию `hiry_agency`)
- [ ] Реальный handle канала в JSON-LD `sameAs`

---

## 7. Блок «Как мы это делаем?» (ScrollTrigger)

- [ ] `<HowWeWork>` (`'use client'`) — секция с горизонтальной галереей
- [ ] Оптимизация изображений в `public/img/`
- [ ] Mobile: горизонтальный нативный скролл (без pin)
- [ ] Desktop: GSAP ScrollTrigger — справа налево с pin
- [ ] Наклон ряда `transform: rotate(1.38deg)`
- [ ] Overlay поверх изображений
- [ ] Описание + три карточки: mobile стек, desktop в ряд
- [ ] Mobile-first проход + Finsweet нейминг **в процессе разработки блока**
- [ ] Производительность: `will-change`, transform-only

---

## 8. Футер

- [ ] Фото + текстовая подпись
- [ ] Основной текст
- [ ] CTA: «Я ищу дизайнера» / «Я ищу работу» → модалка с предзаполненным типом
- [ ] Ссылки на `/privacy` и `/offer`
- [ ] Копирайт с динамическим годом
- [ ] Mobile-first проход + Finsweet нейминг **в процессе разработки блока**

---

## 9. Модалка + форма заявки

- [ ] `<RequestModal>` (`'use client'`) — overlay + контейнер + крестик
- [ ] Глобальное состояние открытия (Context) с предзаполнением типа заявки
- [ ] Поля: имя, телефон (маска), email, селект типа, чекбокс согласия
- [ ] Валидация (Zod + react-hook-form или ручная)
- [ ] Honeypot-поле для антиспама
- [ ] Состояния: idle / loading / success / error
- [ ] Закрытие: overlay / крестик / Esc, блокировка скролла body, focus-trap, `aria-modal`
- [ ] **Backend**: `app/api/lead/route.ts` (POST) → Zod validate → Telegram Bot API
- [ ] Telegram-бот через @BotFather, токен и chat_id
- [ ] Env: `TG_BOT_TOKEN`, `TG_CHAT_ID`
- [ ] Форматированное сообщение в TG (имя, контакты, тип заявки, UTM, источник)
- [ ] Rate limiting (in-memory или Vercel KV)
- [ ] Mobile-first проход + Finsweet нейминг

---

## 10. Страницы политики и оферты

- [ ] `/privacy`: общий Header + H1 + текст от заказчика
- [ ] `/offer` по аналогии
- [ ] Стили текстовых страниц
- [ ] Mobile-first

---

## 11. Анимации и интерактив

- [x] Hover-состояния `:hover` на nav-ссылках (limon)
- [x] Плавные переходы по якорям через `scroll-behavior: smooth`
- [x] Параллакс в hero
- [x] Scroll-морф логотипа
- [ ] Появление секций при скролле (GSAP) — для блоков ниже
- [ ] `@media (hover: hover)` — отделить hover от touch
- [ ] Поддержка `prefers-reduced-motion` (отключение параллакса/морфа)

---

## 12. Адаптив и кросс-браузерность

- [x] Mobile 360 / 375 / 414 — Hero и Header адаптированы
- [x] Tablet 768 — Hero и Header адаптированы
- [x] Desktop 1280 — pixel-perfect figma
- [ ] Laptop 1024 (между tablet и desktop — проверить)
- [ ] Desktop 1440 / 1920 — проверить, что figma 1280 центрируется/масштабируется корректно
- [ ] Chrome, Safari, Firefox, Edge — финальная проверка
- [ ] iOS Safari, Android Chrome — на реальных устройствах
- [ ] Touch-жесты свайпера

---

## 13. Доступность (a11y)

- [x] Семантические теги (`header`, `section`, `nav`, `h1`, `h2`)
- [x] Alt у всех изображений (декоративные — `alt=""`)
- [x] `aria-label` на nav, `aria-hidden` на декоративных SVG
- [x] Видимый `:focus-visible` на nav-ссылках
- [ ] Aria-атрибуты для модалки, бургера, свайпера
- [ ] Полная навигация с клавиатуры (Tab/Enter/Esc)
- [ ] `prefers-reduced-motion`

---

## 14. Производительность и SEO

- [x] `next/image` для всех картинок (логотип SVG через `<img>` — отдельно)
- [x] `next/font` для шрифтов (`display: swap`)
- [x] Metadata API: title/description, OpenGraph, Twitter, robots, canonical
- [x] `app/sitemap.ts` → `/sitemap.xml`
- [x] `app/robots.ts` → `/robots.txt`
- [x] JSON-LD Organization schema через `<Script>` в layout
- [x] H1 / H2 семантика
- [ ] OG-картинка 1200×630 (сейчас Hero.jpg 502×630 — для крупных платформ обрежется)
- [ ] Lazy для нижних секций (через `loading="lazy"` на images вне фолда)
- [ ] Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95

---

## 15. Деплой на Vercel

- [ ] Привязать репозиторий к Vercel
- [ ] Прописать env: `TG_BOT_TOKEN`, `TG_CHAT_ID`, `TG_CHANNEL`, `NEXT_PUBLIC_SITE_URL`
- [ ] Подключить домен заказчика и SSL
- [ ] Редиректы (www → без www, http → https)
- [ ] Проверить ISR-парсинг TG на проде
- [ ] Проверить отправку формы → заявка падает в TG
- [ ] Smoke-test всех CTA, модалки, свайпера, скролл-анимаций
- [ ] Проверка на реальных мобильных устройствах
- [ ] Передача исходников, доступов, инструкций заказчику
