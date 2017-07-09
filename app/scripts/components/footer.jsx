import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
    render(){
        return(
            <footer id="tg-footer" className="tg-footer tg-haslayout">
                <div className="container">
                    <div className="row m-top-md">
                        <div className="tg-fourcolumns">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                <div className="tg-footercolumn">
                                    <strong className="tg-logo"><a href=""><img src="images/teleport/teleport2.png" alt="img description" /></a></strong>
                                    <div className="tg-description">
                                        <p className="white-color">Conseetur elit sed eiumod  apor incidunt ut lbore et dolore <a href="">more...</a></p>
                                    </div>
                                    <ul className="tg-contactinfo">
                                        <li className="white-color">
                                            <i className="lnr lnr-location"></i>
                                            <address>Block71 Level 8</address>
                                        </li>
                                        <li className="white-color">
                                            <i className="lnr lnr-phone-handset"></i>
                                            <span>0800 - 1234 - 562 - 6</span>
                                        </li>
                                        <li>
                                            <i className="lnr lnr-envelope"></i>
                                            <span><a href="query@domain.com">query@domain.com</a></span>
                                        </li>
                                        <li>
                                            <i className="lnr lnr-construction"></i>
                                            <span><a href="complaint@domain.com">complaint@domain.com</a></span>
                                        </li>
                                    </ul>
                                    <ul className="tg-socialicons">
                                        <li className="tg-facebook"><a href=""><i className="fa fa-facebook"></i></a></li>
                                        <li className="tg-twitter"><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li className="tg-linkedin"><a href=""><i className="fa fa-linkedin"></i></a></li>
                                        <li className="tg-googleplus"><a href=""><i className="fa fa-google-plus"></i></a></li>
                                        <li className="tg-rss"><a href=""><i className="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgettwitter">
                                    <div className="tg-widgettitle">
                                        <h3>Latest Tweets</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <ul>
                                            <li className="white-color">
                                                <div className="tg-description"><p>Sed ut perspiciatis unde omnis isteat natus error sit voluptatem</p></div>
                                                <a href="http://www.domainurl.com ">http://www.domainurl.com</a>
                                                <time dateTime="2016-08-08">2 hours ago</time>
                                            </li>
                                            <li className="white-color">
                                                <div className="tg-description"><p>Sed ut perspiciatis unde omnis isteat natus error sit voluptatem</p></div>
                                                <a href="http://www.domainurl.com ">http://www.domainurl.com</a>
                                                <time dateTime="2016-08-08">3 hours ago</time>
                                            </li>
                                            <li><a href="">view all</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgetusefullinks">
                                    <div className="tg-widgettitle">
                                        <h3>Teleport</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <ul>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><a href="">Careers</a></li>
                                            <li><a href="">Press</a></li>
                                            <li><a href="">Policies</a></li>
                                            <li><a href="">Help</a></li>
                                            <li><a href="">Trust &amp; Safety</a></li>
                                            <li><a href="">Diversity &amp; Belonging</a></li>
                                            <li><a href="">Why Alien</a></li>
                                            <li><a href="">Responsible Hosting</a></li>
                                            <li><a href="">Community Center</a></li>
                                            <li><a href="">Business Travel</a></li>
                                            <li><a href="">Gift Cards</a></li>
                                            <li><a href="">Travel Credit</a></li>
                                            <li><a href="">Testimonials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgetfreeinspection">
                                    <div className="tg-widgettitle">
                                        <h3>Offer Amazing Place</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <ul>
                                            <li>
                                                <figure><a href=""><img src="images/logos/edwin-mananta.png" alt="img description" /></a></figure>
                                                <div className="tg-contentbox">
                                                    <h4><a href="">Papua Tribes Adventure</a></h4>
                                                    <ul className="tg-matadata">
                                                        <li><span className="tg-stars"><span></span></span></li>
                                                        <li>
                                                            <i className="fa fa-thumbs-o-up"></i>
                                                            <em>99% (1009 votes)</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <figure><a href=""><img src="images/logos/profile2.jpg" alt="img description" /></a></figure>
                                                <div className="tg-contentbox">
                                                    <h4><a href="">Bali Amazing</a></h4>
                                                    <ul className="tg-matadata">
                                                        <li><span className="tg-stars"><span></span></span></li>
                                                        <li>
                                                            <i className="fa fa-thumbs-o-up"></i>
                                                            <em>99% (1009 votes)</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <figure><a href=""><img src="images/logos/profile3.jpg" alt="img description" /></a></figure>
                                                <div className="tg-contentbox">
                                                    <h4><a href="">Lombok Beach</a></h4>
                                                    <ul className="tg-matadata">
                                                        <li><span className="tg-stars"><span></span></span></li>
                                                        <li>
                                                            <i className="fa fa-thumbs-o-up"></i>
                                                            <em>99% (1009 votes)</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="">view all</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-footerbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span>Copyright &copy; 2017 All Rights Reserved - PT Planet Inovasi Indonesia</span>
                                <nav className="tg-footernav">
                                    <ul>
                                        <li><a href="">Privacy Policy</a></li>
                                        <li><a href="">Term and Conditions</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer