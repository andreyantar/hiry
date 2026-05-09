import * as cheerio from "cheerio";

export type CaseMediaType = "round" | "strip" | "stacked";

export type CasePost = {
  id: string;
  url: string;
  title: string;
  description: string[];
  mediaType: CaseMediaType;
  mediaUrl: string | null;
};

const CHANNEL = process.env.TG_CHANNEL || "hiry_agency";
const POSTS_LIMIT = 5;
const MAX_DESC_CHARS = 400;

function truncateDescription(lines: string[], maxChars: number): string[] {
  const joined = lines.join("\n");
  if (joined.length <= maxChars) return lines;
  const cut = joined.slice(0, maxChars).replace(/\s+\S*$/, "");
  return (cut + "…").split("\n");
}

const extractBgUrl = (style?: string): string | null => {
  const m = style?.match(/url\(['"]?([^'")]+)['"]?\)/);
  return m?.[1] ?? null;
};

export async function fetchCasePosts(): Promise<CasePost[]> {
  try {
    const res = await fetch(`https://t.me/s/${CHANNEL}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];

    const $ = cheerio.load(await res.text());
    const posts: CasePost[] = [];

    $(".tgme_widget_message_wrap").each((_, el) => {
      const $el = $(el);
      const id = $el.find(".tgme_widget_message").attr("data-post");
      if (!id) return;

      const textHtml = $el.find(".tgme_widget_message_text").html() || "";
      const text = textHtml
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
      const lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      if (lines.length === 0) return;

      const title = lines[0];
      const description = truncateDescription(lines.slice(1), MAX_DESC_CHARS);

      const roundUrl = extractBgUrl(
        $el.find(".tgme_widget_message_roundvideo_thumb").attr("style"),
      );
      const photoUrl = extractBgUrl(
        $el.find(".tgme_widget_message_photo_wrap").attr("style"),
      );
      const videoUrl = extractBgUrl(
        $el.find(".tgme_widget_message_video_thumb").attr("style"),
      );

      let mediaType: CaseMediaType = "strip";
      let mediaUrl: string | null = null;

      if (roundUrl) {
        mediaType = "round";
        mediaUrl = roundUrl;
      } else if (photoUrl || videoUrl) {
        mediaType = "strip";
        mediaUrl = photoUrl || videoUrl;
      }

      posts.push({
        id,
        url: `https://t.me/${id}`,
        title,
        description,
        mediaType,
        mediaUrl,
      });
    });

    return posts.slice(-POSTS_LIMIT).reverse();
  } catch {
    return [];
  }
}

export const fallbackCasePosts: CasePost[] = [
  {
    id: "samolet",
    url: "https://t.me/hiry_agency",
    title: "Самолет",
    description: ["Наняли 25 дизайнеров включая руководителей за 5,5 месяцев"],
    mediaType: "stacked",
    mediaUrl: "/icons/tg_03.png",
  },
  {
    id: "wildberries",
    url: "https://t.me/hiry_agency",
    title: "Wildberries",
    description: [
      "8 закрытых вакансий за 3 мес. вывели старшего дизайнера за 9 дней 🚀",
    ],
    mediaType: "strip",
    mediaUrl: "/icons/tg_02.png",
  },
  {
    id: "relate",
    url: "https://t.me/hiry_agency",
    title: "Relate–Барселона",
    description: [
      "Вывели арт-директора за неделю. Руководитель до сих пор работает в компании, прошло 2 года",
    ],
    mediaType: "round",
    mediaUrl: "/icons/tg_01.png",
  },
  {
    id: "fallback-4",
    url: "https://t.me/hiry_agency",
    title: "Кейс 4",
    description: ["Скоро здесь будет реальный пост из Telegram-канала"],
    mediaType: "strip",
    mediaUrl: "/icons/tg_02.png",
  },
  {
    id: "fallback-5",
    url: "https://t.me/hiry_agency",
    title: "Кейс 5",
    description: ["Скоро здесь будет реальный пост из Telegram-канала"],
    mediaType: "round",
    mediaUrl: "/icons/tg_01.png",
  },
];
