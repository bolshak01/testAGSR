import { FC } from "react";

import { IconButton, UserSelect } from "components";
import logo from "common/assets/images/logo.svg";
import calendarIcon from "common/assets/images/calendar-icon.svg";
import ringIcon from "common/assets/images/ring-icon.svg";

import "./Header.scss";

const Header: FC = () => {
  const handleClickOnCalendar = (): void => {
    alert("Calendar opened");
  }

  const handleClickOnRing = (): void => {
    alert("Calendar opened");
  }

  return (
    <div className="header">
      <div className="left-side">
        <img className="logo" src={ logo } alt="logo" />
        <input className="input" placeholder="Поиск"/>
      </div>
      <div className="right-side">
        <IconButton onClick={ handleClickOnCalendar } icon={ calendarIcon } />
        <IconButton onClick={ handleClickOnRing } icon={ ringIcon } />
        <div className="header-divider" />
        <UserSelect />
      </div>
    </div>
  )
}

export default Header;
