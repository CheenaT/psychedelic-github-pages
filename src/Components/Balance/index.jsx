import React from 'react';
import HideBalanceField from "../Hide-Balance-Field";
import AmountWithCents from "../Amount-with-cents";
import OtherIcon from "../../img/other.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    position: relative;
    top: -4px !important; {/* как лучше сделать, отдельный класс? */}
  }
`

class Balance extends React.Component {
  render() {
    return(
      <div className="Balance">
        {/* <div className="balance__main-amount">123 123.13 ₽</div>
        <div className="balance__main-note">sdfskdfjk</div> */}
        <AmountWithCents className={"amount-with-cents hide-balance"} integerPart={1111110} residuePart={99}/>
        <div className="main-balance__note">Расчетная сумма средств по всем продуктам по курсу ЦБ. Не включает кредитные средства</div>
        <Wrapper><img className="card__other__icon" src={OtherIcon} alt="" /></Wrapper>
      </div>
    );
  }
}

export default Balance;
