import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

import readedSvg from '../../img/readed.svg';
import noReadedSvg from '../../img/noreaded.svg';
import '../Message/Message.scss';

function Message({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) {
  return (
    <div
      className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__content">
        <div>
          {isMe &&
            (isReaded ? (
              <img className="message__icon-readed" src={readedSvg} alt="check" />
            ) : (
              <img
                className={classNames('message__icon-readed message__icon-readed--no', {
                  'message__icon-readed--invisible': !isMe,
                })}
                src={noReadedSvg}
                alt="check"
              />
            ))}
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div class="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          )}
          <div className="message__attachments">
            {attachments &&
              attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          {date && (
            <span className="message__date">
              {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
