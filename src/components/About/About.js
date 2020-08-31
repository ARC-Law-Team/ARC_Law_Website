import React, { Component } from 'react';
import './About.css';
import { withTranslation } from 'react-i18next'

class About extends Component {
    render() {
        const {t} = this.props;
        return (
            <section id="feature" className="ab_feature roomy-100">
                <div className="container">
                    <div className="row">
                        <div className="main_ab_feature">

                            <div className="col-md-12">
          
                                <div className="head_title">
                                    <h2> {t("about")} </h2>
                                    <div className="separator_left"></div>
                                </div>

                                <div className="ab_feature_content wow fadeIn m-top-40">
                                    <p> {t("about_1")} </p>
                                    <p> {t("about_2")} </p>
                                    <p> {t("about_3")} </p>
                                    <p> {t("about_4")} </p>
                                </div>
                                <div className="head_title value_title">
                                    <h2> {t("values")} </h2>
                                    <div className="separator_left"></div>
                                </div>

                                <div className="ab_feature_content wow fadeIn m-top-40">
                                    <p> <b>{t("value_1")}</b> {t("value_1_content")} </p>
                                    <p> <b>{t("value_2")}</b> {t("value_2_content")} </p>
                                    <p> <b>{t("value_3")}</b> {t("value_3_content")} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(About);