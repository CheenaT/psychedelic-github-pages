import React from "react";
import { ReactComponent as ArrowDownIcon } from "../../img/angle-arrow-down-primary.svg";
import { ReactComponent as ButtonRoundSmall } from "../../img/button-round-small.svg";
import Input from "../Input";

export default function HistoryHeader(props) {
  return (
    <div className=""> {/* */}
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
      <div style={{ width: "93px" }} className="event-history__line-container">
        <div className="event-history__line2" />
      </div>
      <ButtonRoundSmall className="event-history__button-round-small" />
      <div className="event-history__upload-report-label">Выгрузить отчет</div>
      <Input className={"event-history__input"} />
    </div>
  );
}
