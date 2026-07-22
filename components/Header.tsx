"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const LOGO_BIG_W = 295.626;
const LOGO_BIG_H = 163.234;
const SHRINK_DISTANCE = 150;

type Layout = {
  bigX: number;
  bigY: number;
  bigScale: number;
  smallX: number;
  smallY: number;
  smallScale: number;
};

function computeLayout(vw: number): Layout {
  if (vw >= 1280) {
    const u = Math.min(vw / 1280, 1.5);
    return {
      bigX: 116 * u, bigY: 40 * u, bigScale: 1 * u,
      smallX: 115 * u, smallY: 10 * u, smallScale: (72.442 / LOGO_BIG_W) * u,
    };
  }
  if (vw >= 768) {
    return {
      bigX: 60, bigY: 32, bigScale: 0.7,
      smallX: 60, smallY: 12, smallScale: 60 / LOGO_BIG_W,
    };
  }
  // mobile
  const maxBig = Math.min(0.55, (vw - 60) / LOGO_BIG_W);
  return {
    bigX: 20, bigY: 20, bigScale: Math.max(0.32, maxBig),
    smallX: 20, smallY: 12, smallScale: 50 / LOGO_BIG_W,
  };
}

export default function Header() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const isCompact = pathname !== "/";

  useEffect(() => {
    let layout = computeLayout(window.innerWidth);
    let ticking = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = () => {
      ticking = false;
      // On reduced motion: lock to small/compact state, no scroll-based morph
      const progress = reduced || isCompact
        ? 1
        : Math.min(1, Math.max(0, window.scrollY / SHRINK_DISTANCE));
      const scale = layout.bigScale + (layout.smallScale - layout.bigScale) * progress;
      const x = layout.bigX + (layout.smallX - layout.bigX) * progress;
      const y = layout.bigY + (layout.smallY - layout.bigY) * progress;
      if (logoRef.current) {
        logoRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    const onResize = () => {
      layout = computeLayout(window.innerWidth);
      apply();
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isCompact]);

  return (
    <>
      <header className="site-header">
        <div className="site-header_inner">
          <a
            ref={logoRef}
            href="/"
            aria-label="Хайри — на главную"
            className="site-header_logo"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/Hiry_Logo.svg"
              alt="Хайри"
              width={LOGO_BIG_W}
              height={LOGO_BIG_H}
            />
          </a>
          <a
            className="site-header_tg-mobile"
            href="https://t.me/hiry_agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram-канал Хайри"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Telegram_logo.png" alt="" className="site-header_tg-icon" />
          </a>
        </div>
      </header>
      {/* Root-level so mix-blend-mode blends against the page, not the fixed header */}
      <nav className="site-header_nav" aria-label="Основная навигация">
        <a className="site-header_link" href="/#cases">Кейсы</a>
        <a className="site-header_link" href="/#how">Этапы работы</a>
        <a className="site-header_link" href="/#contacts">Контакты</a>
        <a
          className="site-header_link site-header_tg"
          href="https://t.me/hiry_agency"
          target="_blank"
          rel="noopener noreferrer"
        >
          Мы в
        </a>
      </nav>
      {/* Telegram icon kept separate from the blended nav so it stays its brand color */}
      <a
        className="site-header_tg-fixed"
        href="https://t.me/hiry_agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram-канал Хайри"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/Telegram_logo.png" alt="" className="site-header_tg-icon" />
      </a>
    </>
  );
}
