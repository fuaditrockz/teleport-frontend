import React from 'react';
import HeaderBanner from './headerbanner.jsx';
import Search from './search.jsx';
import CrowdFunding from './crowdfunding.jsx';
import Personal from './personal.jsx';
import Testimonial from './testimonials.jsx';

const Home = (props) => {
    return (
      <div className="scroll">
        <HeaderBanner />
        <Search />
        <CrowdFunding />
        <Personal />
        <Testimonial />
      </div>
    );
}

export default Home;