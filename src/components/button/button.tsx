import React, {FC} from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

import './button.scss';

const Button: FC<ButtonProps> = (props) => {
  const { type = 'primary' } = props;

  return (
    <AntButton {...props} type={type} className="button" />
  );
};

export default Button;
