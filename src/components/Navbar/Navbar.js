import React, { Component } from 'react'
import Logo from '../../assets/img/logos/arc-ing.svg'
import './Navbar.css';

export default class Navbar extends Component {
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

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {
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
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            <img className="mx-auto" width="150px" src={Logo} alt=""/>
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className={"navbar-nav text-uppercase ml-auto " + scroll}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger sep" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger lang sep" href="#contact">EN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger lang lang-tr" href="#contact">TR</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
