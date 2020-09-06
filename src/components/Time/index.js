import React, { Fragment } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

function Time({ date }) {
  return (
    <Fragment>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })}</Fragment>
  );
}

export default Time;
