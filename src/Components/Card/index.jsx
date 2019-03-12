import React from 'react';
import { ReactComponent as DepositIcon } from '../../img/deposit.svg';
import { ReactComponent as OtherIcon } from '../../img/other.svg';

class Card extends React.Component {
  render() {
    return(
      <div className="Card">
        <DepositIcon className="card__deposit__icon"/>
        <OtherIcon className="card__other__icon"/>
        <div className="balance__amount">123 123.13</div>

        <div className="balance__note">sdfskdfjk</div>
      </div>
    );
  }
}

export default Card;
