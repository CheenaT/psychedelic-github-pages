import React from 'react';
import NavMenu from '../NavMenu'
import Slider from '../Slider'
import EventHistory from '../Event-History';

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
