import { FC } from "react";

import "./IconButton.scss";

interface IProps {
  onClick: () => void,
  icon: string,
  withBackground?: boolean,
}

const IconButton: FC<IProps> = ({ onClick, icon, withBackground = true }) => (
  <div onClick={ onClick } className={ `icon-button ${ withBackground && "with-background" }` }>
    <img src={ icon } alt="icon" />
  </div>
);

export default IconButton;
