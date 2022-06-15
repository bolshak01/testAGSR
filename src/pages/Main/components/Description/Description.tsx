import { FC } from "react";

import image from "common/assets/images/office-work.png"

import "./Description.scss";

const Description: FC = () => {
  return (
    <div className="description">
      <div className="left-side">
        <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
        <div className="group">
          <span>
            Единый реестр программ для электронных вычислительных машин и баз данных
          </span>
        </div>
        <div className="group">
          <span>
            Включено ПО в реестр: <b>13 438</b>
          </span>
          <br/>
          <span>
            Правообладателей: <b>4 272</b>
          </span>
        </div>
        <input className="input large" placeholder="Искать реестр..." />
        <button className="search-button">Искать</button>
      </div>
      <div className="right-side">
        <img src={ image } alt="Office Work" />
      </div>
    </div>
  )
}

export default Description;
