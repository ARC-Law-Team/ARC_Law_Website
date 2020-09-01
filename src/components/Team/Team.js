import React, { Component } from 'react'
import './Team.css';
import { withTranslation } from 'react-i18next';
import 'react-responsive-modal/styles.css';
import { SearchElement } from '../SearchElement/SearchElement';




class Team extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                 <section className="bg-light page-section" id="team">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase"> {t("team")} </h2>
                        <h3 className="section-subheading text-muted"> {t("team_text")} </h3>
                        </div>
                    </div>
                    <div className="row search">
                        <div className="col-12 d-flex justify-content-center text-center">
                            <SearchElement/>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withTranslation()(Team);