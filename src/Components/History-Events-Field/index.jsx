import React from 'react';
import HistoryEvent from '../History-Event';
import EventSeparator from '../History-Event-Separator';
import StatusIcon from '../../img/status-error-16.svg';

const testStr = 'wrong';

class EventHistory extends React.Component {
  render() {
    return(
      <div className="EventHistory">
        <HistoryEvent status={StatusIcon}/> {/* also work with <HistoryEvent status={''}/> */}
        <EventSeparator />
      </div>
    );
  }
}

export default EventHistory;
