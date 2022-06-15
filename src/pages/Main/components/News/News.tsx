import { FC } from "react";

import { NewsCard } from "./components";

import "./News.scss";

const News: FC = () => {
  return (
    <div className="news">
      <h2>Новости реестра</h2>
      <NewsCard />
      <button className="show-all">Показать все</button>
    </div>
  )
}

export default News;
