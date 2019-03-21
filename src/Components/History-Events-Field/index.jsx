import React from "react";
import HistoryEvent from "../History-Event";
import EventSeparator from "../History-Event-Separator";
import HistoryEventDate from "../History-Event-Date";
import HistoryHeader from "../History-Field-Header";
import { data, date, List, List2 } from "./data.js";

import uniqueId from "lodash/uniqueId";

class EventHistory extends React.Component {
  state = {
    dataLength: data.length // как можно лучше, не сохраняя в state?
  };
  render() {
    return (
      <div className="EventHistory">
        <HistoryHeader />
        <List>
          <HistoryEventDate
            className="event-history__last-date"
            date={date[0]}
          />
          {data.map((data, i) => (
            <li key={uniqueId()}>
              <HistoryEvent
                icon={data.icon}
                type={data.type}
                name={data.name}
                cardFrom={data.cardFrom}
                integerPart={data.integerPart}
                residuePart={data.residuePart}
                status={data.status}
              />
              {i !== this.state.dataLength - 1 && <EventSeparator />}
            </li>
          ))}
        </List>
        <List2>
          <HistoryEventDate
            className="event-history__last-date"
            date={date[1]}
          />
          {data.map((data, i) => (
            <li key={uniqueId()}>
              {i !== this.state.dataLength - 1 &&
              <HistoryEvent
                icon={data.icon}
                type={data.type}
                name={data.name}
                cardFrom={data.cardFrom}
                integerPart={data.integerPart}
                residuePart={data.residuePart}
                status={data.status}
              />}
              { !i && <EventSeparator />}
            </li>
          ))}
        </List2>
        {/*
          <HistoryEvent status={StatusIcon} />{" "} also works with <HistoryEvent status={''}/>
          <EventSeparator />
        */}
        <button className="event-history__show-more-button">
          Посмотреть еще
        </button>
      </div>
    );
  }
}

export default EventHistory;
