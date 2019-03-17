import React from 'react';
import { ReactComponent as DepositIcon } from '../../img/deposit.svg';
import OtherIcon from '../../img/other.svg';
import AmountWithCents from '../Amount-with-cents';

class Card extends React.Component {
  render() {
    return(
      <div className="Card">
        <DepositIcon className="card__deposit__icon"/>
        {/* <OtherIcon className="card__other__icon"/>*/}
        <img className="card__other__icon" src={OtherIcon} alt=""/>
        {/* <div className="balance__amount">{this.props.balance}</div>

        <div className="balance__note">{this.props.name}</div> */}
        <AmountWithCents className={"balance__amount"} integerPart={1231231} residuePart={99} />
        <div className="balance__note">{this.props.name}</div>
      </div>
    );
  }
}

export default Card;
