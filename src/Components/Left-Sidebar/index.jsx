import React from 'react';
import User from '../User';
import Balance from '../Balance';
import Cards from '../Cards';
import NavMenu from '../NavMenu';
import Card from '../Card';

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className="LeftSidebar">
        <div className="LeftSidebar__NavMenu">
          <NavMenu />
        </div>
        <User />
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
