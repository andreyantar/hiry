export default function Footer() {
  return (
    <footer id="contacts" className="section_footer" data-reveal>
      <div className="footer_main">
        <div className="footer_avatar-block">
          <div className="footer_avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/avatar.png" alt="Егор Грачев" />
          </div>
          <div className="footer_avatar-info">
            <div className="footer_avatar-caption">
              <p>Егор Грачев</p>
              <p className="footer_avatar-caption-role">партнер</p>
            </div>
            <a
              href="https://t.me/egorgrch"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_btn footer_btn--primary"
            >
              Написать Егору
            </a>
          </div>
        </div>

        <div className="footer_content">
          <h2 className="footer_heading">
            <span className="footer_heading-line">Напишите пару слов о задаче,</span>
            <span className="footer_heading-line">а мы подберём дизайнеров, которые помогут усилить вашу команду</span>
          </h2>

          <div className="footer_ctas">
            <a
              href="https://forms.gle/7GabvomyNwwX6HUC8"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_btn footer_btn--primary"
            >
              Нужны дизайнеры
            </a>
            <a
              href="https://forms.gle/85QEMHzQuMoBb6j7A"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_btn footer_btn--ghost"
            >
              Дизайнер, ищу работу
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_divider" aria-hidden />
        <div className="footer_legal">
          <span>Хайри 2026 – ИП Александров Олег Валерьевич</span>
          <a href="/privacy">Политика обработки персональных данных</a>
          <a href="/consent">Согласие на обработку перс. данных</a>
          <a href="/cookies">Политика использования куки-файлов</a>
        </div>
      </div>
    </footer>
  );
}
