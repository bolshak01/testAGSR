import { FC } from "react";

import logo from "common/assets/images/logo.svg";

import "./Footer.scss";

const Footer: FC = () => {
  const handleClick = (): void => {
    alert("clicked");
  }

  return (
    <div className="footer">
      <div className="footer-info">
        <div className="column">
          <img className="logo" src={ logo } alt="logo" />
          <p>
            Открытое акционерное общество &quot;Реестр ПО&quot; начало практическую деятельность с 1 марта 2014 г
          </p>
          <h6>Разработчик</h6>
          <p>ОАО &quot;Агенство сервисизации и реинжиниринга&quot;</p>
          <p className="light">
            Минск, улица Клары Цеткин, 24
          </p>
        </div>
        <div className="column">
          <h3>
            Информация
          </h3>
          <p className="dark" onClick={ handleClick }>Реестры</p>
          <p className="dark" onClick={ handleClick }>Новости</p>
          <p className="dark" onClick={ handleClick }>Документы</p>
          <p className="dark" onClick={ handleClick }>Вопросы</p>
        </div>
        <div className="column">
          <h3>
            Техническая поддержка
          </h3>
          <p>Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
          <div className="divider" />
          <p className="dark">+375 25 111 22 33</p>
          <p className="dark">+375 29 222 44 55</p>
          <p className="dark">ReestrPOsupport@mail.ru</p>
        </div>
        <div className="column">
          <h3>
            Контакты
          </h3>
          <p className="dark">+375 25 111 22 33</p>
          <p className="dark">+375 29 222 44 55</p>
          <p className="dark">ReestrPOsupport@mail.ru</p>
          <p className="dark">220004 г. Минск, ул. Карла Маркса, 38</p>
          <button className="service-button">Связаться с поддержкой</button>
        </div>
      </div>
      <div className="divider" />
      <p className="light">© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
    </div>
  )
}

export default Footer;
