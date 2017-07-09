import React from 'react';

class Search extends React.Component {
    render(){
        return(
            <div className="tg-mapinnerbanner">
                <div className="tg-searchbox">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-10 col-lg-push-1">
                                <form className="tg-themeform tg-formsearch">
                                    <fieldset>
                                        <div className="form-group">
                                            <input type="text" name="keyword" className="form-control" placeholder="Some place" />
                                        </div>
                                        <div className="form-group tg-inputwithicon">
                                            <div className="locate-me-wrap">
                                                <div id="location-pickr-map" className="elm-display-none"></div>
                                                <input type="text"  autoComplete="on" id="location-address" value="" name="geo_location" placeholder="Geo location" className="form-control" />
                                                <a href="" className="geolocate"><i className="fa fa-crosshairs"></i></a>
                                                <a href="#" className="geodistance"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                                <div className="geodistance_range elm-display-none">
                                                    <div className="distance-ml">Distance in&nbsp;( Miles )<span> 50</span></div>
                                                    <input type="hidden" name="geo_distance" value="50" className="geo_distance" />
                                                    <div className="geo_distance" id="geo_distance"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="tg-select">
                                                <select>
                                                    <option value="Not Selected">Category</option>
                                                    <option value="Nature">Nature</option>
                                                    <option value="Adventure">Adventure</option>
                                                    <option value="Family">Family</option>
                                                    <option value="Horror">Horror</option>
                                                    <option value="Cleaning">Cleaning</option>
                                                    <option value="Romantic">Romantic</option>
                                                    <option value="Food &amp; Beverages">Food &amp; Beverages</option>
                                                    <option value="Social Life">Social Life</option>
                                                    <option value="Ethnic &amp; Culture">Ethnic &amp; Culture</option>
                                                    <option value="Farming">Farming</option>
                                                    <option value="Pet Care">Pet Care</option>
                                                    <option value="Night Life">Night Life</option>
                                                    <option value="Transportation">Transportation</option>
                                                </select>
                                            </span>
                                        </div>
                                        <button className="tg-btn" type="submit"><i className="lnr lnr-magnifier"></i></button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="tg-btnmapview" className="tg-btn tg-btnmapview" href="">
                    <span>Go to More Search</span>
                </a>
            </div>
        )
    }
}

export default Search