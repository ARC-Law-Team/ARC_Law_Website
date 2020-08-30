import React, { Component } from 'react'
import Arrow from '../../assets/img/down-arrow.png'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container">
                    <div className="intro-text">
                        <div className="intro-heading">ARC Avukatlık</div>
                        <div className="intro-lead-in">Çözüm ortağınız olarak, etkin, yenilikçi ve sonuç odaklı çözümler öneriyoruz.</div>
                        <a className="js-scroll-trigger" href="#services"><img className="blink-image" height="40px" src={Arrow} alt="Arrow icon"></img></a>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}
