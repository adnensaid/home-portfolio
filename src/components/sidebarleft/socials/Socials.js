import React, { Component } from 'react';
import Style from './socials.module.scss';
import git from '../../../assets/images/github.svg';
import linkedin from '../../../assets/images/linkedin.svg';
import fcb from '../../../assets/images/facebook.svg';

export default  class Socials extends Component{
  render(){
    return(
      <div className={ Style.socials }>
        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          className={ Style.socialsElemImg }
          href="https://github.com/adnensaid"
          target="_blank"
          rel="noreferrer"
          >
            <img src={git} alt="git" />
          </a>
        </div>

        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          href="https://www.linkedin.com/in/adnensaid83/"
          target="_blank"
          rel="noreferrer"
          className={ Style.socialsElemImg }
          >
            <img src={linkedin} alt="in" />
          </a>
        </div>

        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          className={ Style.socialsElemImg }
          href="https://www.facebook.com/adnenso/"
          target="_blank"
          rel="noreferrer"
          >
            <img src={ fcb } alt='fcb' />
          </a>
        </div>
      </div>    
    )        
  }
}