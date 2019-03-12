import React from 'react';
import { ReactComponent as EyeClosed } from '../../img/eye-closed-24.svg'; // wrote "Failed to execute 'createElement' on 'Document': The tag name provided svg" w/o ReactComponent

const HideBalanceField = (props) => (
  <div className="HideBalanceField">
    <EyeClosed className="eye-closed" onClick = {props.onClick}/>
    <div className="hide-balance-text" onClick = {props.onClick}>Скрыть балансы</div>
  </div>
)

export default HideBalanceField;
