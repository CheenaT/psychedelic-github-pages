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
import CreditIcon from "../../img/credit.png";
import AccountIcon from "../../img/account.png";
import CardIcon from "../../img/card.png";
import LinkedCardIcon from "../../img/linked-card-lg.svg";

import styled from "styled-components";

const cards = [
  { balance: 190000.99, name: `Вклад "Двери открыты"`, productImageSRC: require("../../img/deposit.svg") },
  { balance: 1458000.1, name: "Счет *5536", productImageSRC: require("../../img/account.svg") },
  { balance: -1456485.01, name: "Ипотека", productImageSRC: require("../../img/mortgage.svg") }
];

const List = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

class LeftSidebar extends React.Component {
  onClickHandler = () => {
    var els = document.querySelectorAll(".hide-balance");

    if (getComputedStyle(els[0], "").display === "none") {
      document.querySelector(".hide-balance-text").innerHTML = "Скрыть балансы";
      els.forEach(el => (el.style.display = "inline-block"));
    } else {
      document.querySelector(".hide-balance-text").innerHTML =
        "Показать балансы";
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
        {/* <Cards /> */}
        <Card separatorFlag={true} name={"Зарплатная карта *1575"} balance={1458000.99}
          imageSRC={require("./../../img/gold.png")} paymentSystemImageSRC={require("./../../img/mir.svg")}/>
                <img className="left-sidebar__linked-card" src={LinkedCardIcon} alt="" width="20px" height="20px"/>
        <Card marginTopFlag={true} name={"Карта сына *6675"} separatorFlag={true} balance={23405.99}
          imageSRC={require("./../../img/default.svg")} paymentSystemImageSRC={require("./../../img/jcb.svg")}/>
        <Card marginTopFlag={true} name={"Кредитная карта *6675"} width={'108px'} debtNoteInt={15000}
          debtNoteResidue={56} balance={32000.99}
          imageSRC={require("./../../img/platinum@2x.png")} paymentSystemImageSRC={require("./../../img/visa.svg")}
        /> {/* TODO Separator | почему работает при width={108} без px */}
        <List>
          {cards.map(({ balance, name, productImageSRC }) => (
            <li key={name}>
              <Card balance={balance} name={name} productImageSRC={productImageSRC}/>
            </li>
          ))}
        </List>
        <div className="left-sidebar__add-product">
          <img
            className="left-sidebar__icon"
            src={PlusIcon}
            alt=""
            width="32px"
            height="32px"
          />
          <img
            className="left-sidebar__icon"
            src={DepositIcon}
            alt=""
            width="32px"
            height="32px"
          />
          <img
            className="left-sidebar__icon"
            src={CreditIcon}
            alt=""
            width="32px"
            height="32px"
          />
          <img
            className="left-sidebar__icon"
            src={AccountIcon}
            alt=""
            width="32px"
            height="32px"
          />
          <img
            className="left-sidebar__icon"
            src={CardIcon}
            alt=""
            width="32px"
            height="32px"
          />
          <div className="add-product__button">Добавить новый продукт</div>
          <div className="add-product__note">
            Откройте новую карту, счет или подайте заявку на кредит
          </div>
        </div>
        <img
          className="left-sidebar__store-icon"
          src={AppleStoreIcon}
          alt=""
          width="150px"
          height="44px"
        />
        <img
          className="left-sidebar__store-icon"
          src={PlayMarketIcon}
          alt=""
          width="150px"
          height="44px"
        />
      </div>
    );
  }
}

export default LeftSidebar;
