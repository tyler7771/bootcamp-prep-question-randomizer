import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sec: 0, min: 0, hour: 0, class: 'timer-under', paused: false};

    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.incrementTime(), 5000);
  }

  incrementTime() {
    const newSec = this.state.sec + 1;

    if (newSec === 60) {
      const newMin = this.state.min + 1;

      if (newMin === 60) {
        const newHour = this.state.hour + 1;
        this.setState({min: 0, hour: newHour, sec: 0});
      } else if (newMin === 15) {
        this.setState({class: 'timer-over', min: newMin, sec: 0});
      } else {
        this.setState({min: newMin, sec: 0});
      }
    } else {
      this.setState({sec: newSec});
    }

    setTimeout(() => this.incrementTime(), 1000);
  }

  handleButton() {
    if (this.state.paused) {
      this.setState({paused: false});
      this.incrementTime();
    } else {
      this.setState({paused: true});
      this.props.stopTimeout();
    }
  }

  addZero(num) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }

  render () {
    return (
      <div className='modal-container'>
        <div className='modal-close'
          onClick={() => this.props.closeModal()}>
          X
        </div>
        <div className='timer-wrapper'>
          <p className={this.state.class}>
            {this.addZero(this.state.hour)}:{this.addZero(this.state.min)}:{this.addZero(this.state.sec)}
          </p>
          <a className='pause-button' onClick={this.handleButton}>
            {this.state.paused ? 'Start' : 'Pause'}
          </a>
        </div>
        <iframe
          className='repl'
          width='100%'
          height='100%'
          frameBorder='0'
          src={`https://repl.it/${this.props.url}?lite=true`}>
        </iframe>
      </div>
    );
  }
}

export default Modal;
