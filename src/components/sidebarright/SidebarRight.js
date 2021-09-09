import React, { Component } from 'react';
import Style from './sidebar.module.scss';
import Arrow from './arrow/Arrow';
export default class SidebarRight extends Component{
  render(){
    return(
      <div className={ Style.sidebarRight + " d-flex align-items-center justify-content-center" }>
        <Arrow />
      </div>    
    )
  }
}