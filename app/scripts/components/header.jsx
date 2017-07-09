import React from 'react';
import { Link } from 'react-router';

class Logo extends React.Component {
    render(){
        return(
            <div className="tg-logo logo-33planet">
                <a href=""><img src="images/teleport/teleport2.png" alt="teleport-logo" /></a>
            </div>
        )
    }
}

const Header = (props) => {
        return(
            <header id="tg-header" className="tg-header tg-haslayout">
                <div className="tg-navigationarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12">
                                <Logo />
                                <div className="tg-rightarea">
                                    <nav id="tg-nav" className="tg-nav">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                        <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                            <ul>
                                                <li className="current-menu-item"><Link to="/home">Home</Link></li>
                                                <li><a href="aboutus.php">Search</a></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><a href="">Help</a></li>
                                                <li className="menu-item-has-children">
                                                    <Link to="/account">Account</Link>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link to="/login">Register</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/login">Login</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <Link className="tg-btn tg-btnpostanewjob" to="/teleporter">Become an Teleporter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
};

export default Header;