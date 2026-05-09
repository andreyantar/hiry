"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Client = {
  src: string;
  alt: string;
  imgW: number;
  imgH: number;
  itemGap: number;
  captionW: number;
  captionAlign: "center" | "left";
  captionLines: string[];
};

const clientsRow1: Client[] = [
  {
    src: "/icons/wildberries.png",
    alt: "Wildberries",
    imgW: 216,
    imgH: 43,
    itemGap: 15,
    captionW: 141,
    captionAlign: "center",
    captionLines: ["4 дизайнера", "и 1 руководитель"],
  },
  {
    src: "/icons/winline.png",
    alt: "Winline",
    imgW: 180,
    imgH: 43,
    itemGap: 14,
    captionW: 180,
    captionAlign: "center",
    captionLines: ["Арт-Директор"],
  },
  {
    src: "/icons/vkusvill.png",
    alt: "ВкусВилл",
    imgW: 176,
    imgH: 43,
    itemGap: 14,
    captionW: 123,
    captionAlign: "left",
    captionLines: ["4 продуктовых и 2 графических"],
  },
  {
    src: "/icons/vk.png",
    alt: "ВКонтакте",
    imgW: 240,
    imgH: 43,
    itemGap: 13,
    captionW: 195,
    captionAlign: "center",
    captionLines: ["2 продуктовых дизайнера"],
  },
  {
    src: "/icons/samolet.png",
    alt: "Самолёт",
    imgW: 176,
    imgH: 42,
    itemGap: 14,
    captionW: 176,
    captionAlign: "center",
    captionLines: ["25 дизайнеров"],
  },
];

const clientsRow2 = [
  { src: "/icons/x5.png", alt: "X5 Group", w: 171, h: 52 },
  { src: "/icons/lavka.png", alt: "Яндекс Лавка", w: 252, h: 39 },
  { src: "/icons/zvook.png", alt: "Звук", w: 134, h: 40 },
];

const PHOTO_FACTOR = 0.9;
const HEADING_FACTOR = 0.7;
const STATS_FACTOR = 0.85;

export default function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const isDesktop = window.innerWidth >= 1280;
      if (!isDesktop) {
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
          <div className="hero_clients-row">
            {clientsRow1.map((c) => (
              <div
                key={c.alt}
                className="hero_client"
                style={{
                  width: `calc(${c.imgW} * var(--u))`,
                  gap: `calc(${c.itemGap} * var(--u))`,
                }}
              >
                <div
                  className="hero_client-logo"
                  style={{ height: `calc(${c.imgH} * var(--u))` }}
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={c.imgW}
                    height={c.imgH}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <div
                  className="hero_client-caption"
                  style={{
                    width: `calc(${c.captionW} * var(--u))`,
                    textAlign: c.captionAlign,
                  }}
                >
                  {c.captionLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hero_clients-row hero_clients-row-secondary">
            {clientsRow2.map((c) => (
              <Image
                key={c.alt}
                src={c.src}
                alt={c.alt}
                width={c.w}
                height={c.h}
                style={{
                  width: `calc(${c.w} * var(--u))`,
                  height: `calc(${c.h} * var(--u))`,
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
