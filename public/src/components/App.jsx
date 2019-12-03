import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GraphicsHeader from './GraphicsHeader';
import InteriorDetails from './InteriorDetails';
import PropertyDetails from './PropertyDetails';
import ConstructionDetails from './ConstructionDetails';
import UtilitiesDetails from './UtilitiesDetails';
import CommunityDetails from './CommunityDetails';
import HoaDetails from './HoaDetails';
import OtherDetails from './OtherDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // having issues with serving static asset, will fix
    // const query = window.location.search.substring(1);
    axios.get(
      `http://localhost:3001/028`,
    )
      .then((data) => {
        this.setState({
          listing: data.data[0],
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className="title-line">Facts and features</h1>
        <GraphicsHeader listing={this.state.listing} />
        <h3 className="details">Interior details</h3>
        <InteriorDetails listing={this.state.listing.interiorDetails} />
        <h3 className="details">Property details</h3>
        <PropertyDetails listing={this.state.listing.propertyDetails} />
        <h3 className="details">Construction details</h3>
        <ConstructionDetails listing={this.state.listing.constructionDetails} />
        <h3 className="details">Utilities / Green Energy Details</h3>
        <UtilitiesDetails listing={this.state.listing.utilitiesGreenEnergyDetails} />
        <h3 className="details">Community and Neighborhood Details</h3>
        <CommunityDetails listing={this.state.listing.communityAndNeighborhoodDetails} />
        <h3 className="details">HOA and financial details</h3>
        <HoaDetails listing={this.state.listing.hoaAndFinancialDetails} />
        <h3 className="details">Other</h3>
        <OtherDetails listing={this.state.listing} />
      </div>
    );
  }
}

export default App;
