import React from "react";
import { ReactComponent as SearchIcon } from "../../img/search-24.svg";
import { ReactComponent as GasLogoIcon } from "../../img/05-logo-icon-blue.svg";

class NavMenu extends React.Component {
  state = { width: window.screen.width };
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ width: window.screen.width });
    });
  }

  render() {
    return (
      <div className="NavMenu">
        {console.log(
          "body width : ",
          window.screen.width,
          "state : ",
          this.state.width
        )}
        <div className="NavMenu__Logo">
          <GasLogoIcon />
        </div>
        <div className="NavMenu__Offers">
          <div className="offers__counter">5</div>
        </div>
        <div className="NavMenu__search__icon">
          <SearchIcon />
        </div>
        <nav>
          <ul>
            <li>Главная</li>
            <li>Платежи</li>
            <li>Наши продукты</li>
            <li>Предложения</li>
            <li>
              <input
                className="search-field"
                type="text"
                placeholder={this.state.width <= 1024 ? "" : "Поиск"}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavMenu;
