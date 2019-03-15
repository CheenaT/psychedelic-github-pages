import React from 'react';

const HistoryEventDate = (props) => (
  <div className={props.className}>{props.date.day} {props.date.month} {props.date.year}</div>
)

export default HistoryEventDate;
