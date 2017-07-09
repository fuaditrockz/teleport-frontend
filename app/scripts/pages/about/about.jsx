import React from 'react';

const listStyles = {
    float:"left",
    listStyle: "none"
}

const titleStyles = {
    textAlign: "center",
    marginBottom: 2 + "px",
    marginTop: 25 + "px",
}

const subtitleStyles = {
    textAlign: "center"
}

const par = {
    textAlign: "center",
    marginTop: "-" + 14 + "px",
    marginBottom: "-" + 8 + "px",
    padding: 23 + "px"
}

class About extends React.Component {
    render() {
        return(
            <div className="scroll">
                <main id="tg-main" className="tg-main tg-paddingzero tg-haslayout">
                    <section className="tg-main-section tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                                    <div className="tg-sectionhead">
                                        <div className="tg-sectiontitle">
                                            <h2>Amazing History of Teleport</h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>Our project started with the name 33planet. And we’ve also been covered by some media and blogs whose keyword can be found as ‘33planet’ on Google. Staying in the same field, that is social empowerment in the field of tourism. However, now we find a name that feels more comfortable which is ‘Teleport’. Teleport means transportation in an instant way from one place to another, regardless of distance. We would like our user to feel “local” wherever they went. explore the unexplored with a companion to guide you through, this is tourism redefined. Indonesia’s first tourism marketplace.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="tg-main-section tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                                    <div className="tg-sectionhead">
                                        <div className="tg-sectiontitle">
                                            <h2>The Team</h2>
                                        </div>
                                        <div className="tg-description">
                                            <div className="container-team">
                                                <div className="row team-row">
                                                    <div className="col-lg-6 col-md-6 team">
                                                        <div className="teamimg">
                                                            <img src="images/teammembers/adit.jpg" />
                                                        </div>
                                                        <h4 style={titleStyles}>Fuadit Muhammad</h4>
                                                        <p style={subtitleStyles}>CEO / Founder of Teleport</p>
                                                        <p style={par}>Adit was the first to spark a trip based on technology. Adit has a background as a designer and software engineer at the startup company before. From the hands of an Adit is all of product design, business design and technology design from Teleport was born.</p>
                                                        <div className="teamsocial">
                                                            <ul>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Facebook">
                                                                        <div className="facebook-team">
                                                                            <i className="fa fa-facebook"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Twitter">
                                                                        <div className="twitter-team"><i className="fa fa-twitter"></i></div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Google">
                                                                        <div className="google-team">
                                                                            <i className="fa fa-google-plus"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Pinterest">
                                                                        <div className="linkedin-team">
                                                                            <i className="fa fa-linkedin"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 team">
                                                        <div className="teamimg">
                                                            <img src="images/teammembers/yosef.jpg" />
                                                        </div>
                                                        <h4 style={titleStyles}>Yosef Ernesto</h4>
                                                        <p style={subtitleStyles}>COO / Co Founder of Teleport</p>
                                                        <p style={par}>Yosef has a considerable background in finance and business development. Before building Teleport, he was the man behind the success of a startup company called Bildeco.<br /><br /><br /></p>
                                                        <div className="teamsocial">
                                                            <ul>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Facebook">
                                                                        <div className="facebook-team">
                                                                            <i className="fa fa-facebook"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Twitter">
                                                                        <div className="twitter-team"><i className="fa fa-twitter"></i></div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Google">
                                                                        <div className="google-team">
                                                                            <i className="fa fa-google-plus"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Pinterest">
                                                                        <div className="linkedin-team">
                                                                            <i className="fa fa-linkedin"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row team-row">
                                                    <div className="col-lg-6 col-md-6 team">
                                                    <div className="teamimg">
                                                        <img src="images/teammembers/ersan.jpg" />
                                                    </div>
                                                        <h4 style={titleStyles}>Ersan Gusdianto</h4>
                                                        <p style={subtitleStyles}>Head of Marketing / Co Founder of Teleport</p>
                                                        <p style={par}>Ut tincidunt sollicitudin arcu, non bibendum mi adipiscing sit amet. Nulla et facilisis orci. Fusce bibendum leo sodales, sollicitudin turpis eu, scelerisque nulla. Aliquam et urna ac felis ornare consectetur at vitae libero. Donec nec
                                                            quam ut odio suscipit aliquam. Nulla sit amet tortor molestie, blandit justo non, imperdiet velit.</p>
                                                        <div className="teamsocial">
                                                            <ul>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Facebook">
                                                                        <div className="facebook-team">
                                                                            <i className="fa fa-facebook"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Twitter">
                                                                        <div className="twitter-team"><i className="fa fa-twitter"></i></div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Google">
                                                                        <div className="google-team">
                                                                            <i className="fa fa-google-plus"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Pinterest">
                                                                        <div className="linkedin-team">
                                                                            <i className="fa fa-linkedin"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 team">
                                                    <div className="teamimg">
                                                        <img src="images/teammembers/reinaldy.jpg" />
                                                    </div>
                                                        <h4 style={titleStyles}>Reinaldy Agung</h4>
                                                        <p style={subtitleStyles}>Public Relations and Community Head /Co Founder of Teleport</p>
                                                        <p style={par}>Ut tincidunt sollicitudin arcu, non bibendum mi adipiscing sit amet. Nulla et facilisis orci. Fusce bibendum leo sodales, sollicitudin turpis eu, scelerisque nulla. Aliquam et urna ac felis ornare consectetur at vitae libero. Donec nec
                                                            quam ut odio suscipit aliquam. Nulla sit amet tortor molestie, blandit justo non, imperdiet velit.</p>
                                                        <div className="teamsocial">
                                                            <ul>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Facebook">
                                                                        <div className="facebook-team">
                                                                            <i className="fa fa-facebook"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Twitter">
                                                                        <div className="twitter-team"><i className="fa fa-twitter"></i></div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Google">
                                                                        <div className="google-team">
                                                                            <i className="fa fa-google-plus"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li style={listStyles}>
                                                                    <a href="#" title="Pinterest">
                                                                        <div className="linkedin-team">
                                                                            <i className="fa fa-linkedin"></i>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default About;