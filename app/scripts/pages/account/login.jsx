import React from 'react';

class Account extends React.Component {
    render() {
        return(
            <div className="scroll">
                <main id="tg-main" className="tg-main tg-paddingzero tg-haslayout">
                    <div className="tg-main-section tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div id="tg-content" className="tg-content">
                                    <form className="tg-themeform tg-formlogin-register">
                                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                                            <div className="tg-heading">
                                                <h2>Register As</h2>
                                            </div>
                                            <fieldset>
                                                <ul className="tg-tabnav" role="tablist">
                                                    <li role="presentation" className="active">
                                                        <a href="#regularuser" data-toggle="tab">
                                                            <span className="lnr lnr-user"></span>
                                                            <div className="tg-navcontent">
                                                                <h3>Regular User</h3>
                                                                <span>Register As Tourist</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a href="#company" data-toggle="tab">
                                                            <span className="lnr lnr-briefcase"></span>
                                                            <div className="tg-navcontent">
                                                                <h3>Host(Alien)</h3>
                                                                <span>Register As Guide Provider</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="tg-themetabcontent tab-content">
                                                    <div className="tab-pane active fade in" id="regularuser">
                                                        <div className="form-group">
                                                            <div className="tg-registeras">
                                                                <span>Already have an account?<a href="#"> Login Now</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="text" className="form-control" placeholder="Your Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="tg-select">
                                                                <select>
                                                                    <option>Gender</option>
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="text" className="form-control" placeholder="Mobile" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" name="email" className="form-control" placeholder="Email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="password" className="form-control" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="retype-password" className="form-control" placeholder="Retype Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="tg-checkbox">
                                                                <input type="checkbox" id="terms" />
                                                                <label htmlFor="terms">I have read the <a href="#">Terms &amp; Conditions</a> and accept them</label>
                                                            </div>
                                                        </div>
                                                        <button className="tg-btn" type="submit">Register Now</button>
                                                    </div>
                                                    <div className="tab-pane fade in" id="company">
                                                        <div className="form-group">
                                                            <div className="tg-registeras">
                                                                <span>Register As:</span>
                                                                <div className="tg-radio">
                                                                    <input type="radio" id="business" name="register" defaultChecked={true} />
                                                                    <label htmlFor="business">Tourism Business</label>
                                                                </div>
                                                                <div className="tg-radio">
                                                                    <input type="radio" id="professional" name="register" />
                                                                    <label htmlFor="professional">Pro Traveler/Local Guide</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="tg-select">
                                                                <select>
                                                                    <option>Tourism Category</option>
                                                                    <option>Room Service</option>
                                                                    <option>Travel Package</option>
                                                                    <option>Travel Guide</option>
                                                                    <option>Tourism Ticket</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="tg-select">
                                                                <select>
                                                                    <option>Tourism Sub Category</option>
                                                                    <option>Tourism Sub Category</option>
                                                                    <option>Tourism Sub Category</option>
                                                                    <option>Tourism Sub Category</option>
                                                                    <option>Tourism Sub Category</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="text" className="form-control" placeholder="First Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="text" className="form-control" placeholder="Last Name" />
                                                        </div>
                                                        <div className="form-group tg-inputwithicon">
                                                            <input type="text" name="geolocation" className="form-control" placeholder="Geo Location" />
                                                            <i className="fa fa-crosshairs tg-icon"></i>
                                                            <i className="fa fa-angle-down tg-icon"></i>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" name="email" className="form-control" placeholder="Email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="password" className="form-control" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="retype-password" className="form-control" placeholder="Retype Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="tg-checkbox">
                                                                <input type="checkbox" id="conditions" />
                                                                <label htmlFor="conditions">I have read the <a href="#">Terms &amp; Conditions</a> and accept them</label>
                                                            </div>
                                                        </div>
                                                        <button className="tg-btn" type="submit">Register Now</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                            <div className="tg-loginarea">
                                                <div className="tg-bordertitle">
                                                    <h3>Login Now</h3>
                                                </div>
                                                <fieldset>
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" name="password" className="form-control" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="tg-btn tg-btn-lg" type="submit">Login Now</button>
                                                    </div>
                                                    <a className="tg-btnforgotpass" href="#">Forgot your password?</a>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Account;