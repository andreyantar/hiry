export default function HowWeWork() {
  return (
    <section id="how" className="section_how">
      <div className="how_top">
        <h2 className="how_title">КАК МЫ ЭТО ДЕЛАЕМ?</h2>
        <div className="how_gallery">
          <div className="how_gallery-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="how_gallery-img how_gallery-img--01" src="/icons/made_01.jpg" alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="how_gallery-img how_gallery-img--02" src="/icons/made_02.jpg" alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="how_gallery-img how_gallery-img--03" src="/icons/made_03.jpg" alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="how_gallery-img how_gallery-img--04" src="/icons/made_04.jpg" alt="" loading="lazy" />
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/arrows-down.svg"
            alt=""
            className="how_description-arrows"
            width={53}
            height={34}
          />
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
