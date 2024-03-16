import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer__row">
      <div className="logo">
        <span>Chao CAFE</span>
      </div>
      
      <div className="info__row">
        <p className="tel">095-XXX-XX-XX</p>
        <p className="street">вул. Перемоги 9А</p>
      </div>
      <div className="dev__row">
        <p className="by">Created by</p>
        <p className="dev">MenuSTORE</p>
      </div>
    </div>
  );
};
