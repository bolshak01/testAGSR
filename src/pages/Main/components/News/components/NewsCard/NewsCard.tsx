import { FC } from "react";

import image from "common/assets/images/avatar.png"
import calendarIcon from "common/assets/images/calendar-icon.svg";

import "./NewsCard.scss";
const NewsCard: FC = () => {
  return (
    <div className="news-card">
      <img src={ image } alt="News Text" />
      <p className="title">Технические работы 30.05.2022</p>
      <p className="date"><img src={ calendarIcon } alt="Date" /> 30.05.2022</p>
      <p className="news-description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перебои питания.</p>
    </div>
  )
}

export default NewsCard;
