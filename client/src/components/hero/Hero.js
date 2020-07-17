import React, { Component } from 'react'
import Bounce from 'react-reveal/Bounce';

import NewsletterForm from '../forms/NewsletterForm';

class Hero extends Component {
  componentDidMount() {
  }

  render() {
    const {title, content} = this.props;
    const Illustration = this.props.illustration;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <Bounce left>
                <div className="container-sm">
                  <h1 className="hero-title h2-mobile mt-0">{title}</h1>
                  <p className="hero-paragraph">{content}</p>
                </div>
              </Bounce>
              <NewsletterForm/>
            </div>

            <div className="hero-illustration">
              <Illustration/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
