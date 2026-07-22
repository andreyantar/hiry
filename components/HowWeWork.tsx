"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const row = rowRef.current;
    if (!gallery || !row) return;

    const ctx = gsap.context(() => {
      gsap.set(row, { xPercent: -50, yPercent: -50, rotation: -1.38 });
      const distance = () => window.innerWidth * 0.25;
      gsap.fromTo(
        row,
        { x: () => distance() },
        {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: gallery,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, gallery);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how" className="section_how" data-reveal>
      <div className="how_top">
        <div className="how_title-wrap">
          <div className="how_title-inner">
            <div className="how_title-rotor">
              <h2 className="how_title">КАК МЫ ЭТО ДЕЛАЕМ?</h2>
            </div>
          </div>
        </div>
        <div className="how_gallery" ref={galleryRef}>
          <div className="how_gallery-row" ref={rowRef}>
            {Array.from({ length: 3 }).flatMap((_, i) => [
              /* eslint-disable @next/next/no-img-element */
              <img key={`a-${i}`} className="how_gallery-img how_gallery-img--01" src="/img/made_01.jpg" alt="" loading="lazy" aria-hidden={i !== 1 || undefined} />,
              <img key={`b-${i}`} className="how_gallery-img how_gallery-img--02" src="/img/made_02.jpg" alt="" loading="lazy" aria-hidden={i !== 1 || undefined} />,
              <img key={`c-${i}`} className="how_gallery-img how_gallery-img--03" src="/img/made_03.jpg" alt="" loading="lazy" aria-hidden={i !== 1 || undefined} />,
              <img key={`d-${i}`} className="how_gallery-img how_gallery-img--04" src="/img/made_04.jpg" alt="" loading="lazy" aria-hidden={i !== 1 || undefined} />,
              /* eslint-enable @next/next/no-img-element */
            ])}
          </div>
          <div className="how_gallery-overlay" aria-hidden />
        </div>
      </div>

      <div className="how_content">
        <div className="how_description">
          <div className="how_description-text">
            <p className="how_description-main">
              {`Через закрытые telegram чаты, каналы, vc, instagram*, threads* и нетворк. Мы выкладываем рилсы,  статьи. Даем щедрые комиссии за рефералку. Всё, чтобы привлекать внимание и находить вам лучших кандидатов`}
            </p>
            <p className="how_description-footnote">*запрещенные в РФ организации</p>
          </div>
        </div>

        <div className="how_cards">
          <article className="how_card how_card--first">
            <div className="how_card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/made_card_01.jpg" alt="" loading="lazy" />
            </div>
            <div className="how_card-text">
              <p>
                <span className="how_card-text--w">Двойная гарантия замены</span>{" "}
                <span className="how_card-text--g">Если кандидат вышел на работу</span>
              </p>
              <p className="how_card-text--g">и не прошел испытательный,</p>
              <p className="how_card-text--g">мы найдем замену.</p>
              <p className="how_card-text--g">И так до двух раз</p>
            </div>
          </article>

          <article className="how_card how_card--second">
            <div className="how_card-text">
              <p className="how_card-text--w">Можем подобрать</p>
              <p>
                <span className="how_card-text--w">
                  и одного супер дизайнера или создать отдел дизайна{" "}
                </span>
                <span className="how_card-text--g">
                  Например, Самолету мы вывели 25 человек.
                </span>
              </p>
            </div>
            <div className="how_card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/made_card_02.jpg" alt="" loading="lazy" />
            </div>
          </article>

          <article className="how_card how_card--third">
            <div className="how_card-image how_card-image--wide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/made_card_03.jpg" alt="" loading="lazy" />
            </div>
            <div className="how_card-text">
              <p className="how_card-text--w">А первый кандидат через 48 часов ➹️</p>
              <p className="how_card-text--g">
                У нас дизайнеры ищут дизайнеров. Так мы быстрее попадаем
              </p>
              <p className="how_card-text--g">в портрет</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
