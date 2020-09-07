import React, { Component } from 'react'
import Arrow from '../../assets/img/arrow.png'
import './Header.css'
import { withTranslation } from 'react-i18next'


class Header extends Component {
    render() {
        const {t} = this.props;
        return (
            <div id="top">
                <header className="masthead">
                    <div className="container">
                    <div className="intro-text">
                        <div className="intro-heading">{t("arc_law")}</div>
                        <div className="intro-lead-in">{t("motto")}</div>
                        <a className="js-scroll-trigger" href="#about"><img className="blink-image" height="40px" src={Arrow} alt="Arrow icon"></img></a>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default withTranslation()(Header);
