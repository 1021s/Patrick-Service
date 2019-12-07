/* eslint-disable react/prop-types */
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sourcesModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('body-modal');
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.body.classList.remove('body-modal');
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClick(event) {
    const { toggleModal } = this.props;
    event.preventDefault();
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      toggleModal(event);
    }
  }

  render() {
    const { toggleModal, listing } = this.props;
    return (
      <div className="modal" ref={this.setWrapperRef}>
        <div className="modal-content">
          <div className="modal-title">
            Home Facts by Data Source
          </div>
          <div className="grid-container-one">
            <span className="grid-item">
              &#8203;
            </span>
            <span className="grid-item">
              ALL SOURCES COMBINED &#8203;
              <img src="/images/question.png" alt="" id="question" height="12px" width="12px" />
            </span>
            <span className="grid-item">
              COUNTY RECORDS
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Beds:
            </span>
            <span className="grid-item">
              {listing.interiorDetails.bedroomsAndBathrooms.bedrooms}
            </span>
            <span className="grid-item">
              {listing.interiorDetails.bedroomsAndBathrooms.bedrooms}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Baths:
            </span>
            <span className="grid-item">
              {listing.interiorDetails.bedroomsAndBathrooms.bathrooms}
            </span>
            <span className="grid-item">
              {listing.interiorDetails.bedroomsAndBathrooms.bathrooms}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Sqft:
            </span>
            <span className="grid-item">
              {`${listing.lot} / ${listing.propertyDetails.lot.lotSize}`}
            </span>
            <span className="grid-item">
              {`${listing.lot} / ${listing.propertyDetails.lot.lotSize}`}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Type:
            </span>
            <span className="grid-item">
              {listing.type}
            </span>
            <span className="grid-item">
              {listing.type}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Year Built:
            </span>
            <span className="grid-item">
              {listing.yearBuilt}
            </span>
            <span className="grid-item">
              {listing.yearBuilt}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Last Sold:
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Parking:
            </span>
            <span className="grid-item">
              {listing.parking}
            </span>
            <span className="grid-item">
              {listing.parking}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Cooling:
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Heating:
            </span>
            <span className="grid-item">
              {listing.heating}
            </span>
            <span className="grid-item">
              {listing.heating}
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Fireplace:
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              Days on Zillow:
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              MLS #:
            </span>
            <span className="grid-item">
              {listing.other.sourceDetails.mlsId}
            </span>
            <span className="grid-item">
              {listing.other.sourceDetails.mlsId}
            </span>
          </div>
          <div className="grid-container-two">
            <span className="grid-item" style={{ fontWeight: 500, fontSize: 23 }}>
              Other facts
            </span>
            <span className="grid-item" style={{ fontWeight: 500, fontSize: 23 }}>
              &#8203;
            </span>
            <span className="grid-item" style={{ fontWeight: 500, fontSize: 23 }}>
              &#8203;
            </span>
            <span className="grid-item" style={{ fontWeight: 'bold' }}>
              More information:
            </span>
            <span className="grid-item">
              --
            </span>
            <span className="grid-item">
              --
            </span>
          </div>
        </div>
        <button className="close-modal" type="button" onClick={toggleModal}>X</button>
      </div>
    );
  }
}

export default Modal;
