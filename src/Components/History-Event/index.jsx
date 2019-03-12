import React from 'react';
import EventIcon from '../../img/beeline.png';

var test = {
  display: 'inline-block',
  marginLeft: '4px',
  position: 'relative',
  top: '2px'
}

const HistoryEvent = (props) => (
  <div className="history-event">
    <img className="history-event__icon" src={EventIcon} alt="beeline icon" width="32" height="32"/>
    <div className="history-event__type">Cellular service</div>
    <div className="history-event__name">Phone biling</div>
    <div className="history-event__card-from">Salary card *0322</div>
    <div className="history-event__sum">
      <div className="sum__integer-part">-10 200</div>
      <div className="sum__residue-part">.00 ₽</div>
      { props.status &&
          <img style={test} src={props.status} />
      }

    </div>
  </div>
)

export default HistoryEvent;
