"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* Clients data and layout — moved to JSX (per-item asymmetric paddings, complex logo composition). See render in section. */

const PHOTO_FACTOR = 0.9;
const HEADING_FACTOR = 0.7;
const STATS_FACTOR = 0.85;

export default function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      ticking = false;
      const isDesktop = window.innerWidth >= 1280;
      if (!isDesktop || reduced) {
        if (photoRef.current) photoRef.current.style.transform = "";
        if (headingRef.current) headingRef.current.style.transform = "";
        if (statsRef.current) statsRef.current.style.transform = "";
        return;
      }
      const Y = Math.max(0, window.scrollY);
      const photoOffset = Y * (1 - PHOTO_FACTOR);
      const headingOffset = Y * (1 - HEADING_FACTOR);
      const statsOffset = Y * (1 - STATS_FACTOR);
      if (photoRef.current) {
        photoRef.current.style.transform = `translate3d(0, ${photoOffset}px, 0)`;
      }
      if (headingRef.current) {
        headingRef.current.style.transform = `translate3d(0, ${headingOffset}px, 0)`;
      }
      if (statsRef.current) {
        statsRef.current.style.transform = `translate3d(0, ${statsOffset}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="section_hero">
      <div className="hero_main">
        <h1 ref={headingRef} className="hero_heading">
          Закрываем дизайнерские вакансии<br />за 2–4 недели
        </h1>

        <div ref={photoRef} className="hero_photo">
          <Image
            src="/img/Hero.jpg"
            alt=""
            width={502}
            height={630}
            priority
          />
        </div>

        <div ref={statsRef} className="hero_stats">
          <p className="hero_stats-label">Конверсия в закрытие</p>
          <div className="hero_stats-big">
            <p className="hero_stats-value">
              90<span className="hero_stats-value-pct">%</span>
            </p>
            <a href="#" className="hero_stats-proof">Пруф. дашборд с позициями</a>
          </div>
        </div>
      </div>

      <div className="hero_clients">
        <div className="hero_clients-title-wrap">
          <div className="hero_clients-title-inner">
            <div className="hero_clients-title-rotor">
              <h2 className="hero_clients-title">КЛИЕНТЫ</h2>
            </div>
          </div>
        </div>

        <div className="hero_clients-content">
          {/* Row 1: 5 clients (items-start) */}
          <div className="hero_clients-row1">
            <div className="hero_client hero_client--samolet">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/samolet.png" alt="Самолёт" />
              </div>
              <p className="hero_client-cap">25 дизайнеров</p>
            </div>

            <div className="hero_client hero_client--vk">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/vk_square.svg" alt="ВКонтакте" />
              </div>
              <p className="hero_client-cap">
                2 продуктовых<br />дизайнера
              </p>
            </div>

            <div className="hero_client hero_client--wb">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/wb_mark.png" alt="Wildberries" />
              </div>
              <p className="hero_client-cap">
                4 дизайнера<br />и 1 руководитель
              </p>
            </div>

            <div className="hero_client hero_client--winline">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/winline.png" alt="Winline" />
              </div>
              <p className="hero_client-cap">Арт-Директор</p>
            </div>

            <div className="hero_client hero_client--zvuk">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/zvook.png" alt="Звук" />
              </div>
              <p className="hero_client-cap">NDA</p>
            </div>
          </div>

          {/* Row 2: 4 clients (items-center) */}
          <div className="hero_clients-row2">
            <div className="hero_client hero_client--x5">
              <div className="hero_client-logo hero_client-logo--x5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/x5_group_v2.svg" alt="X5 Group" />
              </div>
              <p className="hero_client-cap">NDA</p>
            </div>

            <div className="hero_client hero_client--pragmatica">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/pragmatica.png" alt="Pragmatica" />
              </div>
              <p className="hero_client-cap">NDA</p>
            </div>

            <div className="hero_client hero_client--lavka">
              <div className="hero_client-logo hero_client-logo--lavka">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/lavka_heart.png" alt="" className="hero_client-logo-lavka-heart" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/lavka_text.svg" alt="" className="hero_client-logo-lavka-text" />
              </div>
              <p className="hero_client-cap">NDA</p>
            </div>

            <div className="hero_client hero_client--vkusvill">
              <div className="hero_client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/vkusvill_mark.png" alt="ВкусВилл" />
              </div>
              <p className="hero_client-cap">
                4 продуктовых<br />и 2 графических
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
