import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
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
          frameBorder="0"
          src={`https://repl.it/${this.props.url}?lite=true`}>
        </iframe>
      </div>
    );
  }
}

export default Modal;
