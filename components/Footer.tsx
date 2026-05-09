export default function Footer() {
  return (
    <footer id="contacts" className="section_footer">
      <div className="footer_main">
        <div className="footer_avatar-block">
          <div className="footer_avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/avatar.png" alt="Егор Грачев" />
          </div>
          <div className="footer_avatar-caption">
            <p>Егор Грачев</p>
            <p className="footer_avatar-caption-role">партнер</p>
          </div>
        </div>

        <div className="footer_content">
          <h2 className="footer_heading">
            <span className="footer_heading-line">Напишите пару слов о задаче,</span>
            <span className="footer_heading-line">а мы подберём дизайнеров, которые помогут усилить вашу команду</span>
          </h2>

          <div className="footer_ctas">
            <a href="#" className="footer_link footer_link--cta1">
              <span>Нужны дизайнеры</span>
            </a>
            <a href="#" className="footer_link footer_link--cta2">
              <span>Я дизайнер, ищу работу</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_divider" aria-hidden />
        <div className="footer_legal">
          <span>Хайри 2026 – ИП Александров Олег Валерьевич</span>
          <a href="/offer">Оферта и прочая хуйня</a>
          <a href="/privacy">Политика сфиктериальности</a>
        </div>
      </div>
    </footer>
  );
}
