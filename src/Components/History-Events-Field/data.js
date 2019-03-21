import EventIcon from "../../img/beeline.png";
import EventIconYaTaxi from "../../img/yandex-taxi.png";
import StatusIconLocked from "../../img/status-lock.png";
import StatusIconError from "../../img/status-error-16.svg";
import EventIconTravelTickets from "../../img/payment-transport.svg";
import styled from "styled-components";

export const data = [
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

export const date = [
  { day: "26", month: "march", year: "2018" },
  { day: "25", month: "march", year: "2018" }
];

export const List = styled.ul`
  position: absolute;
  margin-top: 256px;
  @media screen and (max-width: 320px) {
    margin-top: 140px;
  }
  list-style: none;
  padding-left: 0px;
`;

export const List2 = styled.ul`
  position: absolute;
  margin-top: 512px;
  list-style: none;
  padding-left: 0px;
  @media screen and (max-width: 320px) {
    margin-top: 388px;
  }
`;
