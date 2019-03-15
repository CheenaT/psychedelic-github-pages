import React from "react";
import User from "../User";
import Balance from "../Balance";
import Cards from "../Cards";
import NavMenu from "../NavMenu";
import Card from "../Card";
import HideBalanceField from "../Hide-Balance-Field";
import DepositIcon from "../../img/deposit.png";
import PlayMarketIcon from "../../img/greyPM.png";
import AppleStoreIcon from "../../img/greyAS.png";
import PlusIcon from "../../img/plus.png";
import CreditIcon  from "../../img/credit.png";
import AccountIcon from "../../img/account.png";
import CardIcon from "../../img/card.png";

import styled from 'styled-components';

const cards = [
  { balance: "123 123.23", name: `Вклад "Двери открыты"` },
  { balance: "123 231.23", name: "Счет *5536" },
  { balance: "123 310.23", name: "Ипотека" }
];

const List = styled.ul`
  list-style: none;
  padding-left: 0px;
`

class LeftSidebar extends React.Component {
  onClickHandler = () => {
    var els = document.querySelectorAll(".balance__amount");

    if (getComputedStyle(els[0], "").display === 'none') {
      document.querySelector('.hide-balance-text').innerHTML = 'Скрыть балансы';
      els.forEach(el => (el.style.display = "inline-block"));
    } else {
      document.querySelector('.hide-balance-text').innerHTML = 'Показать балансы';
      els.forEach(el => (el.style.display = "none"));
    }
  };

  render() {
    return (
      <div className="LeftSidebar">
        <div className="LeftSidebar__NavMenu">
          <NavMenu />
        </div>
        <User />
        <HideBalanceField onClick={this.onClickHandler} />
        <Balance />
        <Cards />
        {/* <Card />
        <Card />
        <Card /> */}
        <List>
          {cards.map(({balance, name}) => (
            <li key={name}>
              <Card balance={balance} name={name} />
            </li>
          ))}
        </List>
        <div className="left-sidebar__add-product">
            <img className="left-sidebar__icon" src={PlusIcon} alt="" width="32px" height="32px" />
            <img className="left-sidebar__icon" src={DepositIcon} alt="" width="32px" height="32px" />
            <img className="left-sidebar__icon" src={CreditIcon} alt="" width="32px" height="32px" />
            <img className="left-sidebar__icon" src={AccountIcon} alt="" width="32px" height="32px" />
            <img className="left-sidebar__icon" src={CardIcon} alt="" width="32px" height="32px" />
          <div className="add-product__button">Добавить новый продукт</div>
          <div className="add-product__note">Откройте новую карту, счет или подайте заявку на кредит</div>
        </div>
        <img className="left-sidebar__store-icon" src={AppleStoreIcon} alt="" width="150px" height="44px" />
        <img className="left-sidebar__store-icon" src={PlayMarketIcon} alt="" width="150px" height="44px" />
      </div>
    );
  }
}

export default LeftSidebar;
