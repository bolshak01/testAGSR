import { FC } from "react";

import { IconButton } from "components";
import filterIcon from "common/assets/images/filter-icon.svg";
import menuIcon from "common/assets/images/menu-icon.png";

import "./Registries.scss";

const Registries: FC = () => {
  const handleFilter = () => {
    alert("Filtered!");
  }

  return (
    <div className="registries">
      <div className="registries-header">
        <h2>Реестры</h2>
        <div className="buttons">
          <IconButton onClick={ handleFilter } icon={ filterIcon } withBackground={ false } />
          <IconButton onClick={ handleFilter } icon={ menuIcon } withBackground={ false } />
        </div>
      </div>
    </div>
  )
}

export default Registries;
