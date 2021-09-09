import React, { Component } from 'react';
import Style from './arrow.module.scss';
export default class Arrow extends Component{
  render(){
    return(
        <div className={ Style.icon}>
          <div
          className={ Style.iconDirection+" "+ Style.right }
          onClick={ this.onClick }
          to={ this.props.to } 
          >
            <div className={ Style.barBottom}>
            </div>
            <div className={ Style.barTop}>
            </div>
            <div className={ Style.iconDirectionTitre }>
            <p
            >{ this.props.title}</p>
            </div>

          </div>    
        </div>
    )
  }
}