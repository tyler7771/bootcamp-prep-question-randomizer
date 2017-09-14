import React from 'react';
import Modal from 'react-modal';
import ModalContainer from './modal';

const week1 = [
  'GnQr/4', 'GnRZ/2', 'GnR8/2', 'GnRf/2', 'GnRg/1', 'GnRk/2', 'GnRo/1',
  'GnRs/1', 'GnSF/2', 'IeoB/1', 'GqIi/1', 'GqJ4/4', 'GqJb/1', 'GqJf/1',
  'GqJi/0', 'HMlJ/3', 'HMln/4', 'HMm6/1', 'Gypz/0', 'GyqX/1', 'Gyqm/1',
  'GyrQ/2', 'HMms/3', 'HO32/2', 'IepJ/1', 'LFB5/0', 'LFBm/0', 'LFBy/0',
  'LFCJ/0', 'LFCN/0', 'LFCZ/0'
];
const week2 = [
  'GzZi/0', 'GzZo/0', 'GzZp/0', 'HO56/4', 'HO7f/2', 'HO6T/4', 'HO9Y/3',
  'LFCu/0', 'LFDD/0', 'LFDI/0', 'LFDO/0', 'LFDU/0', 'LFD8/0', 'LFDi/0',
  'LFDv/0', 'LFED/0', 'Gz0s/0', 'LFEO/0', 'Gz1e/0', 'HBZ6/0', 'HQ8J/1',
  'HQ9Y/2', 'HQcJ/2', 'LFE7/0', 'LFEc/0', 'LFEo/0', 'LFEs/0', 'HA45/0',
  'HA4c/0', 'HA4f/0', 'HA4i/0'
];
const week3 = [];
const week4 = [];
const all = week1.concat(week2).concat(week3).concat(week4);

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false, url: ''};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }


  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  generateUrl(arr) {
    this.setState({url: arr[Math.floor(Math.random() * arr.length)]});
    this.openModal();
  }

  render () {
    return (
      <div className="page-content">
        <h1>Bootcamp Prep Question Randomizer</h1>
        <p>Choose a section to generate a random question.</p>
        <div className="buttons-container">
          <a onClick={() => {this.generateUrl(week1);}} className="button">
            Week 1
          </a>
          <a onClick={() => {this.generateUrl(week2);}} className="button">
            Week 2
          </a>
          <a onClick={() => {this.generateUrl(week3);}} className="button">
            Week 3
          </a>
          <a onClick={() => {this.generateUrl(week4);}} className="button">
            Week 4
          </a>
          <a onClick={() => {this.generateUrl(all);}} className="button">
            All
          </a>
        </div>

        <Modal
          className="modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          >

          <ModalContainer url={this.state.url}
            closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default Page;
