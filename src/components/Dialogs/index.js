import React from 'react';
import orderBy from 'lodash/orderBy';

import '../Dialogs/Dialogs.scss';
import DialogItem from '../DialogItem';

function Dialogs({ items, userId }) {
  return (
    <div className="dialogs">
      {orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem key={item._id} isMe={item.user.id === userId} {...item} />
      ))}
    </div>
  );
}

export default Dialogs;
