import Video from "./video";
import check from "./../media/svgs/li-check.svg";
import db from "./../db.json";

export default function Agitation() {
  const content = db.agitations.map((el, i) => {
    return (
      <li key={i}>
        <img src={check} />
        <p>{el}</p>
        <hr />
      </li>
    );
  });

  return (
    <div className="agitation">
      <div className="background">
        <Video />
      </div>
      <div className="text">
        <h2>
          Стройте по ПИК-Стандарту <br /> в вашем городе
        </h2>
        <div className="advantages">
          <ul>{content}</ul>
        </div>
      </div>
      <div className="content">
        <div className="mobile-text">
          <h2>
            Стройте по ПИК-Стандарту <br /> в вашем городе
          </h2>
          <div className="advantages">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
