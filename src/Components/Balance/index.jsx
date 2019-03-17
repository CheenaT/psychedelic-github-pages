import React from 'react';
import HideBalanceField from "../Hide-Balance-Field";
import AmountWithCents from "../Amount-with-cents";

class Balance extends React.Component {
  render() {
    return(
      <div className="Balance">
        {/* <div className="balance__main-amount">123 123.13 ₽</div>
        <div className="balance__main-note">sdfskdfjk</div> */}
        <AmountWithCents className={"amount-with-cents"} integerPart={1111110} residuePart={99}/>
      </div>
    );
  }
}

export default Balance;
