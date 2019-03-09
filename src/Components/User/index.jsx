import React from 'react';
import Image from '../../img/user__icon.jpg';

class User extends React.Component {
  render() {
    return(
      <div className="user">
        <div className="user__icon">
          <img src={Image} alt="user icon"/>
        </div>
      </div>
    );
  }
}

export default User;
