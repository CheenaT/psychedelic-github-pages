import React from 'react';
import User from '../User';
import Balance from '../Balance';
import Cards from '../Cards';
import NavMenu from '../NavMenu';
import Card from '../Card';
import HideBalanceField from '../Hide-Balance-Field';

class LeftSidebar extends React.Component {
  onClickHandler = () => {
    var els = document.querySelectorAll('.balance__amount');
    els.forEach( (el) => el.style.display = 'none' )
  }

  render() {
    return (
      <div className="LeftSidebar">
        <div className="LeftSidebar__NavMenu">
          <NavMenu />
        </div>
        <User />
        <HideBalanceField onClick = {this.onClickHandler}/>
        <Balance />
        <Cards />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default LeftSidebar;
