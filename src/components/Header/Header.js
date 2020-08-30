import React, { Component } from 'react'
import Arrow from '../../assets/img/arrow.png'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">ARC Avukatlık Firması</div>
                        <div className="intro-heading text-uppercase">Profesyonel Tecrübe</div>
                        <a className="js-scroll-trigger" href="#services"><img className="blink-image" height="50px" src={Arrow} alt="Arrow icon"></img></a>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}
