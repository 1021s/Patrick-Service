import React from 'react';

class Modal extends React.Component {
  componentDidMount() {
    document.body.classList.add('body-modal');
  }

  componentWillUnmount() {
    document.body.classList.remove('body-modal');
  }

  render() {
    const { toggleModal } = this.props;
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-title">Home Facts by Data Source</div>
          <div className="modal-list">
            <div className="all-sources">
              ALL SOURCES COMBINED
            </div>
            <div className="county-records">
              County Records
            </div>
          </div>
        </div>
        <button className="close-modal" type="button" onClick={toggleModal}>X</button>
      </div>
    );
  }
}

export default Modal;
