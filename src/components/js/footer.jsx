import facebook from "./../media/svgs/Facebook.svg";
import instagram from "./../media/svgs/Instagram.svg";
import vk from "./../media/svgs/Vk.svg";
import SocialNetworks from "./socialNetworks";

export default function Footer() {
  const desktopContent = (
    <div className="title">
      <div className="text">
        <p>ПИК-Франшиза</p>
        <p>Есть вопросы?</p>
      </div>
      <div className="number">
        <div className="arrow">
          <div></div>
        </div>
        <a href="tel:+74952299023">8 (495) 229-90-23</a>
      </div>
      <SocialNetworks />
    </div>
  );

  const mobileContent = (
    <div className="mobile">
      <div className="mobile-title">
        <div className="mobile-social-networks">
          <a href="https://www.pik.ru" target="_blank">
            <img src={facebook} alt="svg" />
          </a>
          <a href="https://www.pik.ru" target="_blank">
            <img src={instagram} alt="svg" />
          </a>
          <a href="https://www.pik.ru" target="_blank">
            <img src={vk} alt="svg" />
          </a>
        </div>
      </div>
      <p>
        Есть вопросы? <a href="tel:+74952299023">8 (495) 229-90-23</a>
      </p>
    </div>
  );

  return (
    <div className="footer">
      <div className="info">
        {desktopContent}
        {mobileContent}
      </div>
    </div>
  );
}
