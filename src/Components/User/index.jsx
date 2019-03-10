import React from 'react';
import Image from '../../img/user__icon.jpg';
import { ReactComponent as SettingsIcon } from '../../img/settings-24.svg'

class User extends React.Component {
  render() {
    return(
      <div className="user">
        <div className="user__icon">
          <img src={Image} alt="user icon"/>
        </div>
        <div className="user__greetings">
          Здравствуйте,
        </div>
        <div className="user__name">
          Алиса
        </div>
        <SettingsIcon className="user__settings__icon"/>
      </div>
    );
  }
}

export default User;
