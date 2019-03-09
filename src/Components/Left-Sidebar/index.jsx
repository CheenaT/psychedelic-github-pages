import React from 'react';
import User from '../User';
import Balance from '../Balance';
import Cards from '../Cards';

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className="LeftSidebar">
        <User />
        <Balance />
        <Cards />
      </div>
    );
  }
}

export default LeftSidebar;
