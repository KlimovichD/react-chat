import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { IconReaded, Avatar } from '../';
import '../DialogItem/DialogItem.scss';

function DialogItem({ user, created_at, text, unreaded, isMe }) {
  const getMessageTime = (created_at) => {
    if (isToday(created_at)) {
      return format(created_at, 'HH:mm');
    } else {
      return format(created_at, 'dd.MM.yyyy');
    }
  };
  return (
    <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullName}</b>
          <span>{getMessageTime(created_at)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded}</div>}
          {isMe && <IconReaded isMe={true} isReaded={false} />}
        </div>
      </div>
    </div>
  );
}

export default DialogItem;
