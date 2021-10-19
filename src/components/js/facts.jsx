import db from "./../db.json";

export default function Facts() {
  const content = db.stats.map((el, i) => {
    return (
      <div className="fact" key={i}>
        <h3>{el.title}</h3>
        <p>{el.desc}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="facts">
      <div className="content">
        <div className="info">
          <h2>Факты о ПИК</h2>
          <div className="stats">{content}</div>
          <div className="desc">
            <div className="text">
              <span>ПИК Франшиза</span> — это сервис группы компаний ПИК,
              которая больше 25 лет работает на рынке девелопмента и строит
              современные дома по всей России.
            </div>
            <div className="text">
              <span>Франшиза от ПИК</span> — это гарантия того, что вы построите
              проект по современным стандартам с использованием лучших
              технологических решений на рынке.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
