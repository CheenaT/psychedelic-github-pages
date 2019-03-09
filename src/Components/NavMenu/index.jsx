import React from 'react';

class NavMenu extends React.Component {
  render() {
    return (
      <div className="NavMenu">
        <nav>
          <ul>
            <li>Главная</li>
            <li>Платежи</li>
            <li>Наши продукты</li>
            <li>Предложения</li>
            <li><input className="search-field" type="text" placeholder="Поиск"/></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavMenu;
