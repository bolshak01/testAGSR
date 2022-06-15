import { FC } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";

import avatar from "common/assets/images/avatar.png";

import "./UserSelect.scss";

const UserSelect: FC = () => {
  return (
    <div className="user-select">
      <img className="avatar" src={ avatar } alt="Алексей Большаков" />
      <DropdownButton
        title="Алексей Большаков"
        variant="secondary"
        align="end"
      >
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Log Out</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default UserSelect;
