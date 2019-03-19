import React from 'react';
import HideBalanceField from "../Hide-Balance-Field";
import AmountWithCents from "../Amount-with-cents";

class Balance extends React.Component {
  render() {
    return(
      <div className="Balance">
        {/* <div className="balance__main-amount">123 123.13 ₽</div>
        <div className="balance__main-note">sdfskdfjk</div> */}
        <AmountWithCents className={"amount-with-cents hide-balance"} integerPart={1111110} residuePart={99}/>
        <div className="main-balance__note">Расчетная сумма средств по всем продуктам по курсу ЦБ. Не включает кредитные средства</div>
      </div>
    );
  }
}

export default Balance;
