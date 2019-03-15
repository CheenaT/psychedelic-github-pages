import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components';

import IndexPage from '../Pages/Index';
import AboutPage from '../Pages/About';
import SettingsPage from '../Pages/Settings';

import Header from '../Components/Header';
import LeftSidebar from '../Components/Left-Sidebar';
import MainBody from '../Components/Main-Body';
import Sidebar from '../Components/Sidebar';
import Menu from '../Components/Menu';
import VerticalLine from '../Components/Lines/index.jsx'
import GorizontalLine from '../Components/Lines/gorizontal.jsx'

const Button = styled.button``;
// export default Button;

class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  getDerivedStatesFromProps() {
    console.log('getDerivedStatesFromProps');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div className="App">
        { console.log('render') }
        <GorizontalLine />
        <Header />
        <LeftSidebar />
        <VerticalLine />

        <MainBody />

        <Button>I'm styled components button</Button>
        <Menu />

        <Sidebar isOpen={true} fontSize={40}>
            <div>
              <a href="#">!!!!!Sidebar!!!! </a>
            </div>
        </Sidebar>


        <section>
            <Route exact path="/" component={IndexPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/settings" component={SettingsPage} />
        </section>
      </div>
    );
  }
}

export default App;
