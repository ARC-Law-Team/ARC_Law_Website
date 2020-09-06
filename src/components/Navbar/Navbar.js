import React, { Component } from 'react'
import Logo from '../../assets/img/logos/arc-ing.svg'
import './Navbar.css';
import {withTranslation} from "react-i18next";
import i18n from '../../i18n';

class Navbar extends Component {
    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          status: "top"
        };

    }
    
    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
            if (this.state.status !== "scrolled") {
                this.setState({ status: "scrolled" });
            }
            } else {
            if (this.state.status !== "top") {
                this.setState({ status: "top" });
            }
            }
        });
    }

    onSelectLang(countryCode) {
        console.log("called");
        switch (countryCode) {
            case "TR":
                i18n.changeLanguage('tr');
                window.location.reload(false);
                break;
            case "EN":
                i18n.changeLanguage('en');
                window.location.reload(false);
                break;
            default:
                i18n.changeLanguage('en');
                window.location.reload(false);
        }
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {
        const { t } = this.props;
        let classes = "navbar navbar-expand-lg navbar-dark fixed-top";
        let scroll = "";
        if(this.state.status !== "top"){
            classes = "navbar navbar-expand-lg navbar-dark fixed-top scrolled" 
            scroll = "scrolled";

        }
        return (
            <div>
                <nav className={classes} id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href=".">
                            <img className="mx-auto" width="150px" src={Logo} alt=""/>
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className={"navbar-nav text-uppercase ml-auto " + scroll}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#about">{t("about")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#industries">{t("industries")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#team">{t("team")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#articles">{t("artics_letter")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#contact">{t("contact")}</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link js-scroll-trigger lang sep" onClick={() => this.onSelectLang('EN')}>EN</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link js-scroll-trigger lang lang-tr" onClick={() => this.onSelectLang('TR')}>TR</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withTranslation()(Navbar);