import { FC } from "react";

import {
  Description,
  News,
  Questions,
  Documents,
  Registries,
} from "./components";

import "./Main.scss";

const Main: FC = () => {
  return (
    <div className="main">
      <Description />
      <Registries />
      <News />
      <Documents />
      <Questions />
    </div>
  )
}

export default Main;
