import React from 'react';

class CheckInModal extends React.Component {
  render () {
    return (
      <div className="modal-container">
        <div className="modal-close"
          onClick={() => this.props.closeModal()}>
          X
        </div>
        <iframe
          className="repl"
          width="100%"
          height="100%"
          frameborder="0"
          src={`https://repl.it/${this.props.url}?lite=true`}>
        </iframe>
      </div>
    );
  }
}

export default CheckInModal;
