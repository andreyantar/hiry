"use client";

import { useEffect, useRef } from "react";

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
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let layout = computeLayout(window.innerWidth);
    let ticking = false;

    const apply = () => {
      ticking = false;
      const progress = Math.min(1, Math.max(0, window.scrollY / SHRINK_DISTANCE));
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
  }, []);

  return (
    <header className="site-header">
      <div className="site-header_inner">
        <div ref={logoRef} className="site-header_logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/Hiry_Logo.svg"
            alt="Хайри"
            width={LOGO_BIG_W}
            height={LOGO_BIG_H}
          />
        </div>
        <nav className="site-header_nav" aria-label="Основная навигация">
          <a className="site-header_link" href="#cases">Кейсы</a>
          <a className="site-header_link" href="#how">Этапы работы</a>
          <a className="site-header_link" href="#contacts">Контакты</a>
          <a
            className="site-header_link site-header_tg"
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Мы в</span>
            <TelegramIcon className="site-header_tg-icon" />
          </a>
        </nav>
        <a
          className="site-header_tg-mobile"
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram-канал Хайри"
        >
          <TelegramIcon className="site-header_tg-icon" />
        </a>
      </div>
    </header>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#229ED9" />
      <path
        d="M5.4 11.6 17.2 7c.8-.3 1.5.2 1.3 1.4l-2 9.4c-.2.9-.7 1.1-1.4.7l-3.9-2.9-1.9 1.8c-.2.2-.4.4-.8.4l.3-4 7.4-6.7c.3-.3-.1-.4-.5-.2l-9.1 5.8L2.7 12c-.8-.3-.8-.8.2-1.2Z"
        fill="#fff"
      />
    </svg>
  );
}
