import React from "react";
import { ReactComponent as SearchIcon } from "../../img/search-24.svg";
import { ReactComponent as GasLogoIcon } from "../../img/05-logo-icon-blue.svg";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from '../../App/App.js';
import Main from '../../Pages/Main/index.js';
import Offers from '../../Pages/Offers';
import Products from '../../Pages/Products';
import MenuButton from '../Menu-Button';

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
          <GasLogoIcon className="NavMenu__Logo"/>
          <MenuButton />
        <div className="NavMenu__Offers">
          <div className="offers__counter">5</div>
        </div>
        <div className="NavMenu__search__icon">
          <SearchIcon />
        </div>
        <BrowserRouter>
        <div className="navmenu__page-list">
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/payments/">Платежи</Link></li>
            <li><Link to="/products/">Наши продукты</Link></li>
            <li><Link to="/offers/">Предложения</Link></li>
            <li>
              <input
                className="search-field"
                type="text"
                placeholder={this.state.width <= 1024 ? "" : "Поиск"}
              />
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        {/* <Route path="/payments/" component={App} /> на этом моменте страница начала уничтожать оперативку*/}
        <Route path="/products/" component={Products} />
        <Route path="/offers/" component={Offers} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default NavMenu;
