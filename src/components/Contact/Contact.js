import React, { Component } from 'react'
import './Contact.css'
import { withTranslation } from 'react-i18next';

class Contact extends Component {
    componentDidMount(){
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
        mapboxgl.accessToken = 'pk.eyJ1IjoibnVyaGFrYWx0aW4iLCJhIjoiY2tlajJwaTNiMThldTJ1bHBqdWM4OGl3eCJ9.IaqEb1kZes6f890cXu1a0A';
        // eslint-disable-next-line 
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [29.020587 , 41.109993],
            zoom: 14
          });
        
          var geojson = {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [29.020587 , 41.109993]
              },
              properties: {
                title: 'ARC Law',
                description: 'ARC Law Firm'
              }
            }]
          };

          // add markers to map
        geojson.features.forEach(function(marker) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';
        
            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
        });

    }
    render() {
        const { t } = this.props;
        return (
            <div>
                  <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading contact text-uppercase"> {t("contact_us")} </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div id="map" style={{height:"40vh"}}></div>
                                    </div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-4 justify-content-center contact-info-container">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                            <th scope="row"></th>
                                            <td><i className="fas fa-map-marker-alt fa-inverse"></i></td>
                                            <td><a target="_blank" rel="noopener noreferrer" href="http://maps.google.com/?q=1200 Maslak Mah. Maslak Meydan Sok. Beybi Giz Plaza, A Blok, No: 1, Kat: 26-27,Sarıyer/İstanbul">Maslak Mah. Maslak Meydan Sok. Beybi Giz Plaza, A Blok, No: 1, Kat: 26-27,Sarıyer/İstanbul</a></td>
                                            </tr>
                                            <tr>
                                            <th scope="row"></th>
                                            <td><i className="fas fa-phone  fa-inverse"></i></td>
                                            <td><a href="tel:+902123352649">+90 212 335 26 49</a></td>
                                            </tr>
                                            <tr>
                                            <th scope="row"></th>
                                            <td><i className="fas fa-fax fa-inverse"></i></td>
                                            <td>+90 212 335 25 00</td>
                                            </tr>
                                            <tr>
                                            <th scope="row"></th>
                                            <td><i className="fas fa-envelope-open-text fa-inverse"></i></td>
                                            <td><a target="_blank" rel="noopener noreferrer" href="mailto:info@arcavukatlik.com">info@arcavukatlik.com</a></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withTranslation()(Contact);
