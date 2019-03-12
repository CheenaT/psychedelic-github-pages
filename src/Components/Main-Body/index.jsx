import React from 'react';
import NavMenu from '../NavMenu'
import Slider from '../Slider'
import EventHistory from '../History-Events-Field';

class MainBody extends React.Component {
  render() {
    return(
      <div className="MainBody">
        <NavMenu />
        <Slider />
        <EventHistory />
      </div>
    );
  }
}

export default MainBody;
