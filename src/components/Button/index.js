import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

import '../Button/Button.scss';

function Button(props) {
  return (
    <BaseButton
      {...props}
      className={classNames('button', props.className, { 'button--large': props.size === 'large' })}
    />
  );
}

export default Button;
