type Brand =
  | "vkusvill"
  | "samolet"
  | "winline"
  | "wb"
  | "vk-round"
  | "vk-box";

type StaticCase = {
  id: string;
  brand: Brand;
  description: string[];
  href: string;
};

const row1: StaticCase[] = [
  {
    id: "vkusvill",
    brand: "vkusvill",
    description: ["Вывели 4 продуктовых и 2 графических за 3 месяца"],
    href: "https://t.me/hiry_agency/224",
  },
  {
    id: "samolet",
    brand: "samolet",
    description: ["Наняли 25 дизайнеров включая руководителей", "за 5,5 месяцев"],
    href: "https://t.me/hiry_agency/216",
  },
  {
    id: "winline",
    brand: "winline",
    description: ["Вывели Арт-директора в отдел киберспорта за 1 месяц"],
    href: "https://t.me/hiry_agency/223",
  },
];

const row2: StaticCase[] = [
  {
    id: "wb",
    brand: "wb",
    description: [
      "8 закрытых вакансий за 3 месяца.",
      "Старшего дизайнера вывели за 9 дней",
    ],
    href: "https://t.me/hiry_agency/219",
  },
  {
    id: "vk-round",
    brand: "vk-round",
    description: [
      "Вывели арт-директора за 7 дней. Более 2х лет работает в компании по сей день!",
    ],
    href: "https://t.me/s/hiry_agency",
  },
  {
    id: "vk-box",
    brand: "vk-box",
    description: ["Вывели 6 продуктовых дизайнеров за 3 месяца в разные направления"],
    href: "https://t.me/s/hiry_agency",
  },
];

function Logo({ brand }: { brand: Brand }) {
  const wrapClass = `cases_static-logo cases_static-logo--${brand}`;

  if (brand === "wb") {
    return (
      <div className={wrapClass}>
        <div className="cases_static-logo-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/figma-cases/wb.png" alt="Wildberries" />
        </div>
      </div>
    );
  }

  if (brand === "vk-round") {
    return (
      <div className={wrapClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/figma-cases/vk_avatar.png" alt="Арт-директор" />
      </div>
    );
  }

  if (brand === "vk-box") {
    return (
      <div className={wrapClass}>
        <div className="cases_static-logo-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/figma-cases/vk_box.svg" alt="ВКонтакте" />
        </div>
      </div>
    );
  }

  const src =
    brand === "vkusvill"
      ? "/icons/figma-cases/vkusvill.png"
      : brand === "samolet"
        ? "/icons/figma-cases/samolet.png"
        : "/icons/figma-cases/winline.png";
  const alt =
    brand === "vkusvill" ? "ВкусВилл" : brand === "samolet" ? "Самолёт" : "Winline";

  return (
    <div className={wrapClass}>
      <div className="cases_static-logo-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

function Card({ data }: { data: StaticCase }) {
  return (
    <article className={`cases_card-static cases_card-static--${data.brand}`}>
      <Logo brand={data.brand} />
      <div className="cases_static-text">
        {data.description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <a href={data.href} className="cases_static-link">
        <span>Читать</span>
      </a>
    </article>
  );
}

export default function CasesStatic() {
  return (
    <section id="cases" className="section_cases" data-reveal>
      <div className="cases_inner">
        <h2 className="cases_title">КЕЙСЫ</h2>
        <div className="cases_grid">
          <div className="cases_grid-row cases_grid-row--top">
            {row1.map((c) => (
              <Card key={c.id} data={c} />
            ))}
          </div>
          <div className="cases_grid-row cases_grid-row--bottom">
            {row2.map((c) => (
              <Card key={c.id} data={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
