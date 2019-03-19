import React from "react";
import EventSeparator from "../History-Event-Separator";
import { ReactComponent as DepositIcon } from "../../img/deposit.svg";
import OtherIcon from "../../img/other.svg";
import AmountWithCents from "../Amount-with-cents";
import GoldCardIcon from "../../img/gold.png";

class Card extends React.Component {
  render() {
    return (
      <div
        className="Card"
        style={{
          marginTop: this.props.marginTopFlag ? "0px" : "",
          height: this.props.width ? this.props.width : ""
        }}
      >
        {/* <DepositIcon className="card__deposit__icon" /> */}
        { this.props.imageSRC && <div><img
          alt=""
          src={this.props.imageSRC}
          className="card__gold-icon"
        />
        <img
          alt=""
          src={this.props.paymentSystemImageSRC}
          className="card__payment-system-icon"
        /></div> }
        { this.props.productImageSRC && <div><img
          alt=""
          src={this.props.productImageSRC}
          className="card__deposit__icon"
        /></div>}
        {/* <OtherIcon className="card__other__icon"/>*/}
        <img className="card__other__icon" src={OtherIcon} alt="" />
        {/* <div className="balance__amount">{this.props.balance}</div>

                <div className="balance__note">{this.props.name}</div> */ console.log( Math.trunc(this.props.balance % 1 * 100))}
        {!this.props.debtNoteInt &&
        <AmountWithCents
          className={"balance__amount hide-balance"}
          integerPart={Math.trunc(this.props.balance)}
          residuePart={Math.trunc(this.props.balance % 1 * 100)}
        />}
        {this.props.debtNoteInt && (
          <div style={{ fontSize: "16px" }} className="balance__debt-note">
            <AmountWithCents
              className={"amount-with-cents debt-note"}
              integerPart={this.props.debtNoteInt}
              residuePart={this.props.debtNoteResidue}
            />{" "}
            задолженность
          </div>
        )}
        <div className="balance__note">{this.props.name}</div>
        {this.props.separatorFlag && (
          <EventSeparator
            style={{
              width: "260px",
              position: "absolute",
              top: "82px",
              left: "100px"
            }}
          />
        )}
      </div>
    );
  }
}

export default Card;
