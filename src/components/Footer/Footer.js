import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

class Footer extends Component {
    render() {
        const {t} = this.props;
        return (
            <div>
                 <footer className="footer">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <span className="copyright">Copyright &copy; {t("arc_law")} 2020</span>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">  
                            {
                                // eslint-disable-next-line
                            }<a href="#"
                            rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            {
                                // eslint-disable-next-line
                            }<a href="#"
                            rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            {
                                // eslint-disable-next-line
                            }<a href="#"
                            rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://www.linkedin.com/company/arc-avukatlik-b%C3%BCrosu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4 developer">
                            {t("developer")} <a target="_blank" rel="noopener noreferrer" href="https://www.nurhakaltin.com">www.nurhakaltin.com</a>
                        </div>
                    </div>
                    </div>
                </footer> 
            </div>
        )
    }
}

export default withTranslation()(Footer);