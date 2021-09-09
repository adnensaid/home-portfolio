import React, { Component } from 'react';
import Style from './main.module.scss';
export default class Main extends Component{
  render(){
    return(
      <div className={ Style.main }>
        <div className={ Style.about+" flex-fill d-flex flex-column justify-content-center" }>
          <div className="container">
            <div className={ Style.aboutContent+" d-flex flex-column align-items-center" }>
              <h1 className={ Style.title }>Hi, je m'appelle Adnen</h1>
              <p className={ Style.text }>
                <strong>Intégrateur</strong>  sénior et <strong> développeur web </strong> junior,
                <strong>responsive</strong> pixel perfect,
                une liste de mes dernières projets
                dans la page portfolio.
              </p>
              <div className={ Style.lienUtiles }>
                <button className="btn btn-primary shadow-lg rounded">VOIR MON CV</button>
                <button className="btn btn-secondary shadow-lg rounded">LAST REACT APP</button>    
              </div>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}