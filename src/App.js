import React, { Component } from 'react';
import { SidebarLeft, SidebarRight, Main } from './components';
export default class App extends Component{
  render(){
    return(
      <div className="App d-flex flex-row">
        <SidebarLeft />
        <Main />
        <SidebarRight />
      </div>
    )
  }
}
