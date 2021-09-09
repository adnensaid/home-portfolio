import React, { Component } from 'react';
import Style from './sidebar.module.scss';
import Socials from './socials/Socials';
export default class SidebarLeft extends Component{
  render(){
    return(
    <div className={ Style.sidebarLeft+ " d-flex flex-row align-items-center" }>
      <Socials />
    </div> 
    )
  }
}