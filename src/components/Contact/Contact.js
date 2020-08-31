import React, { Component } from 'react'

export default class Contact extends Component {
    componentDidMount(){
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
        mapboxgl.accessToken = 'pk.eyJ1IjoibnVyaGFrYWx0aW4iLCJhIjoiY2tlajJwaTNiMThldTJ1bHBqdWM4OGl3eCJ9.IaqEb1kZes6f890cXu1a0A';
         // eslint-disable-next-line
        let map = new mapboxgl.Map({
        container: 'googlemap',
        style: 'mapbox://styles/mapbox/streets-v11'
        });
    }
    render() {
        return (
            <div>
                  <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div id="googlemap" style={{height:"350px"}}></div>
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
