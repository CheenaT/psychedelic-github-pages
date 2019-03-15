import React from 'react';
// import EventIcon from '../../img/beeline.png';

var test = {
  display: 'inline-block',
  marginLeft: '4px',
  position: 'relative',
  top: '2px',
  width: '16px',
  height: '16px',
}

const HistoryEvent = (props) => (
  <div className="history-event">
    <img className="history-event__icon" src={props.icon} alt="beeline icon" width="32" height="32"/>
    <div className="history-event__type">{props.type}</div>
    <div className="history-event__name">{props.name}</div>
    <div className="history-event__card-from">{props.cardFrom}</div>
    <div className="history-event__sum">
      <div className="sum__integer-part">{props.integerPart}</div>
      <div className="sum__residue-part">{props.residuePart}</div>
      { props.status &&
          <img style={test} src={props.status} />
      }
    </div>
  </div>
)

export default HistoryEvent;
