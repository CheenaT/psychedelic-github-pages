import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import IndexPage from '../Pages/Index';
import AboutPage from '../Pages/About';
import SettingsPage from '../Pages/Settings';

import Header from '../Components/Header';
import LeftSidebar from '../Components/Left-Sidebar';
import MainBody from '../Components/Main-Body';
import Sidebar from '../Components/Sidebar';
import Menu from '../Components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeftSidebar />
        <MainBody />

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
