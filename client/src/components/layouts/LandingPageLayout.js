import React from 'react';

import './landingPage.scss'
import blog1 from '../../assets/images/blog-1.jpg'
import blog2 from '../../assets/images/blog-2.jpg'
import blog3 from '../../assets/images/blog-3.jpg'
import mobile1 from '../../assets/images/mobile-1.jpg'
import mobile2 from '../../assets/images/mobile-2.jpg'
import cover1 from '../../assets/images/cover_img_1.jpg'
import person1 from '../../assets/images/person1.jpg'
import person2 from '../../assets/images/person2.jpg'
import person3 from '../../assets/images/person3.jpg'
import dashboardBoard1 from '../../assets/images/dashboard_full_1.jpg'
import dashboardBoard2 from '../../assets/images/dashboard_full_2.jpg'

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <div className="colorlib-loader"></div>

      <div id="page">
        <nav className="colorlib-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div id="colorlib-logo"><a href="index.html">Unapp</a></div>
                </div>
                <div className="col-md-10 text-right menu-1">
                  <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li className="has-dropdown">
                      <a href="work.html">Works</a>
                      <ul className="dropdown">
                        <li><a href="work-grid.html">Works grid with text</a></li>
                        <li><a href="work-grid-without-text.html">Works grid w/o text</a></li>
                      </ul>
                    </li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <section id="home" className="video-hero" data-section="home">
          <div className="overlay"></div>
          <a className="player"
             data-property="{videoURL:'https://www.youtube.com/watch?v=vqqt5p0q-eU',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>
          <div className="display-t text-center">
            <div className="display-tc">
              <div className="container">
                <div className="col-md-12 col-md-offset-0">
                  <div className="animate-box">
                    <h2>Take on your biggest projects and goals</h2>
                    <p>with Unapp's high quality features</p>
                    <p><a href="gallery.html" className="btn btn-primary btn-lg btn-custom">Get premium</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="colorlib-featured">
          <div className="row animate-box">
            <div className="featured-wrap">
              <div className="owl-carousel">
                <div className="item">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="featured-entry">
                      <img className="img-responsive" src={dashboardBoard1} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-services colorlib-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center animate-box">
                <div className="services">
							<span className="icon">
								<i className="icon-browser"></i>
							</span>
                  <div className="desc">
                    <h3>Create your own template</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services">
							<span className="icon">
								<i className="icon-download"></i>
							</span>
                  <div className="desc">
                    <h3>Automatic Backup Data</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services">
							<span className="icon">
								<i className="icon-layers"></i>
							</span>
                  <div className="desc">
                    <h3>Page Builder</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-intro">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>Collaborate with your design team in a new way</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                  life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                  far World of Grammar.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <span className="play"><a href="https://vimeo.com/channels/staffpicks/93951774"
                                          className="pulse popup-vimeo"><i className="icon-play3"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-work-featured colorlib-bg-white">
          <div className="container">
            <div className="row mobile-wrap">
              <div className="col-md-5 animate-box">
                <div className="mobile-img" style={{ backgroundImage: mobile1 }}></div>
              </div>
              <div className="col-md-7 animate-box">
                <div className="desc">
                  <h2>Real template creation</h2>
                  <div className="features">
                    <span className="icon"><i className="icon-lightbulb"></i></span>
                    <div className="f-desc">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                        decided to leave for the far World of Grammar.</p>
                    </div>
                  </div>
                  <div className="features">
                    <span className="icon"><i className="icon-circle-compass"></i></span>
                    <div className="f-desc">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name</p>
                    </div>
                  </div>
                  <div className="features">
                    <span className="icon"><i className="icon-beaker"></i></span>
                    <div className="f-desc">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                        decided to leave for the far World of Grammar.</p>
                    </div>
                  </div>
                  <p><a href="#" className="btn btn-primary btn-outline with-arrow">Start collaborating <i
                    className="icon-arrow-right3"></i></a></p>
                </div>
              </div>
            </div>
            <div className="row mobile-wrap">
              <div className="col-md-5 col-md-push-7 animate-box">
                <div className="mobile-img" style={{ backgroundImage: mobile2 }}></div>
              </div>
              <div className="col-md-7 col-md-pull-5 animate-box">
                <div className="desc">
                  <h2>Finish template creation</h2>
                  <div className="features">
                    <span className="icon"><i className="icon-lightbulb"></i></span>
                    <div className="f-desc">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                        decided to leave for the far World of Grammar.</p>
                    </div>
                  </div>
                  <div className="features">
                    <span className="icon"><i className="icon-circle-compass"></i></span>
                    <div className="f-desc">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name</p>
                    </div>
                  </div>
                  <div className="features">
                    <span className="icon"><i className="icon-beaker"></i></span>
                    <div className="f-desc">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                        decided to leave for the far World of Grammar.</p>
                    </div>
                  </div>
                  <p><a href="#" className="btn btn-primary btn-outline with-arrow">Start collaborating <i
                    className="icon-arrow-right3"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="colorlib-counter" className="colorlib-counters" style={{ backgroundImage: cover1 }}
             data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-4 col-sm-4 text-center animate-box">
                  <div className="counter-entry">
                    <span className="icon"><i className="flaticon-ribbon"></i></span>
                    <div className="desc">
                      <span className="colorlib-counter js-counter" data-from="0" data-to="1500" data-speed="5000"
                            data-refresh-interval="50"></span>
                      <span
                        className="colorlib-counter-label">Of customers are satisfied with our professional support</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 text-center animate-box">
                  <div className="counter-entry">
                    <span className="icon"><i className="flaticon-church"></i></span>
                    <div className="desc">
                      <span className="colorlib-counter js-counter" data-from="0" data-to="500" data-speed="5000"
                            data-refresh-interval="50"></span>
                      <span className="colorlib-counter-label">Amazing preset options to be mixed and combined</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 text-center animate-box">
                  <div className="counter-entry">
                    <span className="icon"><i className="flaticon-dove"></i></span>
                    <div className="desc">
                      <span className="colorlib-counter js-counter" data-from="0" data-to="1200" data-speed="5000"
                            data-refresh-interval="50"></span>
                      <span className="colorlib-counter-label">Average response time on live chat support channel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>News from our Blog</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                  life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                  far World of Grammar.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <article>
                  <h2>Building the Mention Sales Application on Unapp</h2>
                  <p className="admin"><span>May 12, 2018</span></p>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life</p>
                  <p className="author-wrap"><a href="#" className="author-img"
                                                style={{ backgroundImage: person1 }}></a>
                    <a href="#" className="author">by Dave Miller</a></p>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article>
                  <h2>Building the Mention Sales Application on Unapp</h2>
                  <p className="admin"><span>May 12, 2018</span></p>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life</p>
                  <p className="author-wrap"><a href="#" className="author-img"
                                                style={{ backgroundImage: person2 }}></a> <a href="#"
                                                                                             className="author">by
                    Dave Miller</a></p>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article>
                  <h2>Building the Mention Sales Application on Unapp</h2>
                  <p className="admin"><span>May 12, 2018</span></p>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life</p>
                  <p className="author-wrap"><a href="#" className="author-img"
                                                style={{ backgroundImage: person3 }}></a> <a href="#"
                                                                                             className="author">by
                    Dave Miller</a></p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div id="colorlib-subscribe" className="colorlib-subscribe"
             style={{ backgroundImage: cover1 }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center colorlib-heading animate-box">
                <h2>Already trusted by over 10,000 users</h2>
                <p>Subscribe to receive unapp tips from instructors right to your inbox.</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-6 col-md-offset-3">
                <div className="row">
                  <div className="col-md-12">
                    <form className="form-inline qbstp-header-subscribe">
                      <div className="col-three-forth">
                        <div className="form-group">
                          <input type="text" className="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                      </div>
                      <div className="col-one-third">
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary">Subscribe Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-pricing">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>Pricing</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                  life One day however a small line of blind text by the name</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 text-center animate-box">
                <div className="pricing">
                  <h2 className="pricing-heading">Starter</h2>
                  <div className="price"><sup className="currency">$</sup>9<small>per month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.</p>
                  <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                </div>
              </div>
              <div className="col-md-3 text-center animate-box">
                <div className="pricing">
                  <h2 className="pricing-heading">Basic</h2>
                  <div className="price"><sup className="currency">$</sup>27<small>per month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.</p>
                  <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                </div>
              </div>
              <div className="col-md-3 text-center animate-box">
                <div className="pricing">
                  <h2 className="pricing-heading">Pro</h2>
                  <div className="price"><sup className="currency">$</sup>74<small>per month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.</p>
                  <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                </div>
              </div>
              <div className="col-md-3 text-center animate-box">
                <div className="pricing">
                  <h2 className="pricing-heading">Unlimited</h2>
                  <div className="price"><sup className="currency">$</sup>140<small>per month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.</p>
                  <p><a href="#" className="btn btn-primary">Select Plan</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="colorlib-footer">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-3 colorlib-widget">
                <h4>About unapp</h4>
                <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                  Bookmarksgrove right at the coast of the Semantics</p>
                <p>
                  <ul className="colorlib-social-icons">
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin"></i></a></li>
                    <li><a href="#"><i className="icon-dribbble"></i></a></li>
                  </ul>
                </p>
              </div>
              <div className="col-md-3 colorlib-widget">
                <h4>Information</h4>
                <p>
                  <ul className="colorlib-footer-links">
                    <li><a href="#"><i className="icon-check"></i> Home</a></li>
                    <li><a href="#"><i className="icon-check"></i> Gallery</a></li>
                    <li><a href="#"><i className="icon-check"></i> About</a></li>
                    <li><a href="#"><i className="icon-check"></i> Blog</a></li>
                    <li><a href="#"><i className="icon-check"></i> Contact</a></li>
                    <li><a href="#"><i className="icon-check"></i> Privacy</a></li>
                  </ul>
                </p>
              </div>

              <div className="col-md-3 colorlib-widget">
                <h4>Recent Blog</h4>
                <div className="f-blog">
                  <a href="blog.html" className="blog-img" style={{ backgroundImage: blog1 }}>
                  </a>
                  <div className="desc">
                    <h2><a href="blog.html">Photoshoot Technique</a></h2>
                    <p className="admin"><span>30 March 2018</span></p>
                  </div>
                </div>
                <div className="f-blog">
                  <a href="blog.html" className="blog-img" style={{ backgroundImage: blog2 }}>
                  </a>
                  <div className="desc">
                    <h2><a href="blog.html">Camera Lens Shoot</a></h2>
                    <p className="admin"><span>30 March 2018</span></p>
                  </div>
                </div>
                <div className="f-blog">
                  <a href="blog.html" className="blog-img" style={{ backgroundImage: blog3 }}>
                  </a>
                  <div className="desc">
                    <h2><a href="blog.html">Imahe the biggest photography studio</a></h2>
                    <p className="admin"><span>30 March 2018</span></p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 colorlib-widget">
                <h4>Contact Info</h4>
                <ul className="colorlib-footer-links">
                  <li>291 South 21th Street, <br/> Suite 721 New York NY 10016</li>
                  <li><a href="tel://1234567920"><i className="icon-phone"></i> + 1235 2355 98</a></li>
                  <li><a href="mailto:info@yoursite.com"><i className="icon-envelope"></i> info@yoursite.com</a></li>
                  <li><a href="#"><i className="icon-location4"></i> yourwebsite.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with
                    <i className="icon-heart" aria-hidden="true"></i> by
                    <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    <br/>
                    Demo Images:
                    <a href="http://unsplash.co/" target="_blank">Unsplash</a>,
                    <a href="http://pexels.com/" target="_blank">Pexels</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up2"></i></a>
      </div>

    </>
  )
};

export default LandingPageLayout;