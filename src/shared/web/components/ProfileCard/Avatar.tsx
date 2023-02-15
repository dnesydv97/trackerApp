import React from "react";
import { Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sizes } from "../../../../packages/web/src/utils/theme";

const ProfileAvatar = (props) => {
  const { size, icon, style, className, color } = props;

  return (
    <Avatar
      size={size}
      icon={<FontAwesomeIcon icon={icon} color={color} />}
      style={style}
    />
  );
};

export default ProfileAvatar;
