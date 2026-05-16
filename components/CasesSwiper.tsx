"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { CSSProperties } from "react";
import type { CasePost } from "@/lib/telegram";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = { posts: CasePost[] };

const cardGapByType = { stacked: 16, strip: 17, round: 16 } as const;
const contentGapByType = { stacked: 14, strip: 16, round: 26 } as const;

export default function CasesSwiper({ posts }: Props) {
  return (
    <Swiper
      className="cases_swiper"
      modules={[Navigation, Pagination]}
      loop={posts.length > 3}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={24}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 32 },
        1280: { slidesPerView: 3, spaceBetween: 44 },
      }}
      slidesPerView={1}
    >
      {posts.map((post, index) => {
        const cardStyle: CSSProperties = {
          ["--card-gap" as string]: cardGapByType[post.mediaType],
          ["--content-gap" as string]: contentGapByType[post.mediaType],
        };
        return (
          <SwiperSlide key={post.id} className="cases_swiper-slide">
            <article className="cases_card" style={cardStyle}>
              <div
                className={`cases_card-media cases_card-media-${post.mediaType}`}
              >
                {post.mediaUrl && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={post.mediaUrl} alt={post.title} loading="lazy" />
                )}
              </div>
              <div className="cases_card-content">
                <div className="cases_card-text">
                  <h3 className="cases_card-title">{post.title}</h3>
                  {post.description.map((line, i) => (
                    <p key={i} className="cases_card-desc">
                      {line}
                    </p>
                  ))}
                </div>
                <a
                  className={`cases_btn${index === 0 ? " cases_btn--primary" : ""}`}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Читать
                </a>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
