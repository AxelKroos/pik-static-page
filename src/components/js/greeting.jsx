import logo from "./../media/svgs/logo.svg";
import { Link } from "react-scroll";

export default function Greeting() {
  return (
    <div className="greeting">
      <div className="content">
        <img src={logo} />
        <h1>
          Стройте будущее.
          <br />
          ПИК делится самым ценным
        </h1>
        <p>
          Мы предлагаем комплексные решения по управлению девелоперским
          бизнесом, эскроу и проектному финансированию, управлению проектами и
          технологиями строительного производства.
        </p>
        <div className="button">
          <Link
            to="form"
            smooth={true}
            duration={1000}
          >
            Подать заявку
          </Link>
        </div>
      </div>
    </div>
  );
}
