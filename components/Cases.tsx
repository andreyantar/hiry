import CasesSwiper from "./CasesSwiper";
import { fallbackCasePosts, fetchCasePosts } from "@/lib/telegram";

export default async function Cases() {
  const posts = await fetchCasePosts();
  const data = posts.length > 0 ? posts : fallbackCasePosts;

  return (
    <section id="cases" className="section_cases">
      <div className="cases_inner">
        <h2 className="cases_title">КЕЙСЫ</h2>
        <CasesSwiper posts={data} />
      </div>
    </section>
  );
}
