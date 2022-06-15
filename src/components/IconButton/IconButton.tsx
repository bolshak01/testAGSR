import { FC } from "react";

import "./IconButton.scss";

interface IProps {
  onClick: () => void,
  icon: string,
}

const IconButton: FC<IProps> = ({ onClick, icon }) => (
  <div onClick={ onClick } className="icon-button">
    <img src={ icon } alt="icon" />
  </div>
);

export default IconButton;
