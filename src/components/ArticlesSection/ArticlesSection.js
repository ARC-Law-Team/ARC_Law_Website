import React, { Component } from 'react';
import i18n from '../../i18n';
import './ArticleSection.css';
import { withTranslation } from 'react-i18next';

class ArticlesSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: props.cards,
      defaultLang: i18n.language
    }
  }

  render() {
    const { defaultLang, cards} = this.state;
    const { t } = this.props;
    let artics ="";
    if(defaultLang === 'tr'){
      artics = cards && cards.articles.map(function(article, index){
        return(
          <div key={index} className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" target="_blank" rel="noopener noreferrer" href={article.link_tr}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <div>
                  <p className="summary">
                    {article.summary_tr}
                  </p>
                </div>
            </a>
            <div className="portfolio-caption">
                <h4>{ article.title_tr }</h4>
            </div>
        </div>);
      })
    } else {
      artics = cards && cards.articles.map(function(article, index){
        return(
          <div key={index} className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link"  target="_blank" rel="noopener noreferrer"  href={article.link_en}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <div>
                  <p className="summary">
                    {article.summary_en}
                  </p>
                </div>
            </a>
            <div className="portfolio-caption">
                <h4>{ article.title_en }</h4>
            </div>
        </div>);
      })
    }
    
    return (
      <section className="page-section" id="articles">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase"> {t("artics_letter")} </h2>
            <h3 className="section-subheading text-muted">{t("articles_info")}</h3>
          </div>
        </div>
        <div className="row">
          {artics}
        </div>
      </div>
    </section>
    );
  }
}

export default withTranslation()(ArticlesSection);
