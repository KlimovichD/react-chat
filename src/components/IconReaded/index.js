import React from 'react';

import PropTypes from 'prop-types';
import readedSvg from '../../img/readed.svg';
import noReadedSvg from '../../img/noreaded.svg';

function IconReaded({ isMe, isReaded }) {
  return (
    isMe &&
    (isReaded ? (
      <img className="message__icon-readed" src={readedSvg} alt="check" />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noReadedSvg}
        alt="check"
      />
    ))
  );
}
IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default IconReaded;
