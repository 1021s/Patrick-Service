/* eslint-disable consistent-return */
import React from 'react';
import axios from 'axios';
import GraphicsHeader from './GraphicsHeader';
import InteriorDetails from './InteriorDetails';
import PropertyDetails from './PropertyDetails';
import ConstructionDetails from './ConstructionDetails';
import UtilitiesDetails from './UtilitiesDetails';
import CommunityDetails from './CommunityDetails';
import HoaDetails from './HoaDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
      expanded: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.expand = this.expand.bind(this);
  }

  componentDidMount() {
    // having issues with serving static asset, will fix
    // const query = window.location.search.substring(1);
    axios.get(
      'http://localhost:3001/028',
    )
      .then((data) => {
        this.setState({
          listing: data.data[0],
        });
      });
  }

  expand(event) {
    event.preventDefault();
    const { expanded } = this.state;
    if (expanded === false) {
      this.setState({
        expanded: true,
      });
    } else {
      this.setState({
        expanded: false,
      });
    }
  }

  render() {
    const {
      listing, expanded,
    } = this.state;
    if (expanded === false) {
      return (
        <div>
          <h1 className="title-line">Facts and features</h1>
          <GraphicsHeader listing={listing} />
          <div className="link" onClick={this.expand} tabIndex={0} onKeyPress={this.handleKeyPress} role="button">See more facts and features</div>
        </div>
      );
    }
    if (expanded === true) {
      return (
        <div>
          <h3 className="title-line">Facts and features</h3>
          <GraphicsHeader listing={listing} />
          <div className="details">Interior details</div>
          <InteriorDetails listing={listing.interiorDetails} />
          <div className="details">Property details</div>
          <PropertyDetails listing={listing.propertyDetails} />
          <div className="details">Construction details</div>
          <ConstructionDetails listing={listing.constructionDetails} />
          <div className="details">Utilities / Green Energy Details</div>
          <UtilitiesDetails listing={listing.utilitiesGreenEnergyDetails} />
          <div className="details">Community and Neighborhood Details</div>
          <CommunityDetails listing={listing.communityAndNeighborhoodDetails} />
          <div className="details">HOA and financial details</div>
          <HoaDetails listing={listing.hoaAndFinancialDetails} />
          <div className="link" onClick={this.expand} tabIndex={0} onKeyPress={this.handleKeyPress} role="button">See less facts and features</div>
        </div>
      );
    }
  }
}

export default App;
