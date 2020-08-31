import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'


class Services extends Component {
    render() {
        const {t}= this.props;
        return (
            <div>
                 <section className="page-section bg-light" id="services">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase"> {t("practices")} </h2>
                        <h3 className="section-subheading text-muted"> {t("industiries_text")} </h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-business-time fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading"> {t("industries_1")} </h4>
                            <p className="text-muted"> {t("industries_1_content")} </p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="far fa-handshake fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="service-heading"> {t("industries_2")} </h4>
                            <p className="text-muted"> {t("industries_2_content")} </p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fal fa-money-check-alt fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="service-heading"> {t("industries_3")} </h4>
                            <p className="text-muted"> {t("industries_3_content")} </p>
                        </div>
                    </div>
                    <div className="row text-center second_row">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-phone-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading"> {t("industries_4")} </h4>
                            <p className="text-muted"> {t("industries_4_content")} </p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="far fa-building fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="service-heading"> {t("industries_5")} </h4>
                            <p className="text-muted"> {t("industries_5_content")} </p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-user-friends fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="service-heading"> {t("industries_6")} </h4>
                            <p className="text-muted"> {t("industries_6_content")} </p>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withTranslation()(Services);
