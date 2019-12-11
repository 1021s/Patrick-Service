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
import Other from './Other';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      expanded: false,
      modal: false,
      appClass: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.expand = this.expand.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const parsedUrl = new URL(window.location.href);
    axios.get(
      `/listings/${parsedUrl.href.slice(-3)}`,
    )
      .then((data) => {
        this.setState({
          listing: data.data[0],
        });
      })
      .catch((err) => err);
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

  toggleModal(event) {
    event.preventDefault();
    const { modal } = this.state;
    if (!modal) {
      this.setState({
        modal: !modal,
        appClass: 'app-modal',
      });
    } else {
      this.setState({
        modal: !modal,
        appClass: 'app-modal',
      });
    }
  }

  render() {
    const {
      listing, expanded, modal, appClass,
    } = this.state;
    if (expanded === false) {
      return (
        <div className="App">
          <h1 className="title-line">Facts and features</h1>
          <GraphicsHeader listing={listing} />
          <div className="link" onClick={this.expand} tabIndex={0} onKeyPress={this.expand} role="button">
            <img src="https://img.icons8.com/ultraviolet/40/000000/circled-chevron-down.png" alt="" height="20px" width="20px" />
            See more facts and features
          </div>
        </div>
      );
    }
    if (expanded === true && modal === true) {
      return (
        <div>
          <Modal show={modal} toggleModal={this.toggleModal} listing={listing} />
          <div className={appClass}>
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
            <div className="details">Other</div>
            <Other listing={listing.other} toggleModal={this.toggleModal} />
            <div className="link" onClick={this.expand} tabIndex={0} onKeyPress={this.expand} role="button">
              <img src="https://img.icons8.com/ultraviolet/40/000000/circled-chevron-up.png" alt="" height="20px" width="20px" />
              See less facts and features
            </div>
          </div>
        </div>
      );
    }
    if (expanded === true && modal === false) {
      return (
        <div className="App">
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
          <div className="details">Other</div>
          <Other listing={listing.other} toggleModal={this.toggleModal} />
          <div className="link" onClick={this.expand} tabIndex={0} onKeyPress={this.expand} role="button">
            <img src="https://img.icons8.com/ultraviolet/40/000000/circled-chevron-up.png" alt="" height="20px" width="20px" />
            See less facts and features
          </div>
        </div>
      );
    }
  }
}

export default App;
