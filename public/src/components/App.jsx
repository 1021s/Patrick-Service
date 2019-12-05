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
          <button className="link" onClick={this.expand} type="button">See more facts and features</button>
        </div>
      );
    }
    if (expanded === true) {
      return (
        <div>
          <h1 className="title-line">Facts and features</h1>
          <GraphicsHeader listing={listing} />
          <h3 className="details">Interior details</h3>
          <InteriorDetails listing={listing.interiorDetails} />
          <h3 className="details">Property details</h3>
          <PropertyDetails listing={listing.propertyDetails} />
          <h3 className="details">Construction details</h3>
          <ConstructionDetails listing={listing.constructionDetails} />
          <h3 className="details">Utilities / Green Energy Details</h3>
          <UtilitiesDetails listing={listing.utilitiesGreenEnergyDetails} />
          <h3 className="details">Community and Neighborhood Details</h3>
          <CommunityDetails listing={listing.communityAndNeighborhoodDetails} />
          <h3 className="details">HOA and financial details</h3>
          <HoaDetails listing={listing.hoaAndFinancialDetails} />
          <button className="link" onClick={this.expand} type="button">See less facts and features</button>
        </div>
      );
    }
  }
}

export default App;
