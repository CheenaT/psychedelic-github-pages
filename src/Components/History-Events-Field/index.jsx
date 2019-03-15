import React from "react";
import HistoryEvent from "../History-Event";
import EventSeparator from "../History-Event-Separator";
import StatusIconError from "../../img/status-error-16.svg";
import EventIcon from "../../img/beeline.png";
import StatusIconLocked from "../../img/status-lock.png";
import EventIconYaTaxi from "../../img/yandex-taxi.png";
import EventIconTravelTickets from "../../img/payment-transport.svg";
import Input from "../Input";
import HistoryEventDate from "../History-Event-Date";
import { ReactComponent as ArrowDownIcon } from "../../img/angle-arrow-down-primary.svg";
import { ReactComponent as ButtonRoundSmall } from "../../img/button-round-small.svg";

import styled from "styled-components";
import uniqueId from "lodash/uniqueId";

const data = [
  {
    icon: EventIcon,
    type: "Cellular service",
    name: "Phone biling",
    cardFrom: "Salary card *0322",
    integerPart: "-10 200",
    residuePart: ".00 ₽",
    status: ""
  },
  {
    icon: EventIconYaTaxi,
    type: "Transport",
    name: "YANDEX TAXI",
    cardFrom: "Salary card *0322",
    integerPart: "-546",
    residuePart: ".00 ₽",
    status: StatusIconLocked
  },
  {
    icon: EventIconTravelTickets,
    type: "RAILWAY AND AIR TICKETS",
    name: "Aeroflot - tikets to Sochi",
    cardFrom: "Salary card *0322",
    integerPart: "-10 000",
    residuePart: ".00 ₽",
    status: StatusIconError
  }
];

const date = [
  { day: "26", month: "march", year: "2018" },
  { day: "25", month: "march", year: "2018" }
  ];

const List = styled.ul`
  position: absolute;
  margin-top: 256px;
  list-style: none;
  padding-left: 0px;
`;

const List2 = styled.ul`
  position: absolute;
  margin-top: 512px;
  list-style: none;
  padding-left: 0px;
`;

class EventHistory extends React.Component {
  state = {
    dataLength: data.length,
  };
  render() {
    return (
      <div className="EventHistory">
        <div className="event-history__label">История событий</div>
        <div className="event-history__product-sorting">По всем продуктам</div>
        <div className="event-history__line-container">
          <div className="event-history__line" />
        </div>
        <ArrowDownIcon className="event-history__arrow-down-icon" />
        <div className="event-history__time-sorting">За все время</div>
        <ArrowDownIcon
          className="event-history__arrow-down-icon"
          style={{ left: "302px" }}
        />
        <div
          style={{ width: "93px" }}
          className="event-history__line-container"
        >
          <div className="event-history__line2" />
        </div>
        <ButtonRoundSmall className="event-history__button-round-small" />
        <div className="event-history__upload-report-label">
          Выгрузить отчет
        </div>
        <div className="event-history__input">
          <Input />
        </div>
        {/* <HistoryEventDate className="event-history__last-date" date={date[0]} /> */}
        <List>
          <HistoryEventDate
            className="event-history__last-date"
            date={date[0]}
          />
          {data.map( (data, i) => (
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
              { (i !== this.state.dataLength - 1) && <EventSeparator />}
            </li>
          ))}
        </List>
        <List2>
          <HistoryEventDate
            className="event-history__last-date"
            date={date[1]}
          />
          {console.log(data.length)}
          {data.map( (data, i) => (
            <li key={uniqueId()}>
            {console.log('i : ', i, 'data.length : ', this.state.dataLength)}
              <HistoryEvent
                icon={data.icon}
                type={data.type}
                name={data.name}
                cardFrom={data.cardFrom}
                integerPart={data.integerPart}
                residuePart={data.residuePart}
                status={data.status}
              />
              { (i !== this.state.dataLength - 1) && <EventSeparator />}
            </li>
          ))}
        </List2>
        {/*
          <HistoryEvent status={StatusIcon} />{" "} also works with <HistoryEvent status={''}/>
          <EventSeparator />
        */}
        <button className="event-history__show-more-button">Посмотреть еще</button>
      </div>
    );
  }
}

export default EventHistory;
