import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → out/ folder, заливается на обычный хостинг (reg.ru)
  output: "export",
  // next/image без серверной оптимизации (нужно для статики)
  images: { unoptimized: true },
  // Папка-маршруты (/privacy/index.html) — надёжно отдаётся Apache на shared-хостинге
  trailingSlash: true,
};

export default nextConfig;
