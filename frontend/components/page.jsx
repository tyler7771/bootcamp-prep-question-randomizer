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
const week3 = [
  'HB1i/0', 'LHLP/0', 'LHL1/0', 'LHLc/0', 'LHLl/0', 'LHLv/0', 'LHMi/0',
  'LHMo/0', 'LHMw/0', 'HB1k/0', 'HB1p/0', 'HB1x/0', 'HB2B/3', 'HB2G/0',
  'HSes/4', 'I9M2/2', 'IenL/2', 'LHNr/0', 'LHOD/0', 'LHOS/0', 'LHOZ/0',
  'LHOj/0', 'LHOs/0', 'LHPw/0', 'LHQC/0', 'LHQN/0', 'LHQZ/0'
];
const week4 = [
  'HYEQ/2', 'LHQl/0', 'HYFQ/5', 'HYGq/2', 'LHQx/0', 'LHRF/0', 'LHRL/0',
  'H0K2/1', 'HYI6/8', 'LHRX/0', 'LHRa/0', 'LHRt/0', 'LHSC/0', 'LHSO/0',
  'LHSX/0', 'H0Mi/2', 'H0OU/3', 'H0Pu/1', 'LHSu/0', 'LHTD/0', 'H26g/2',
  'H28B/5', 'LHTW/0', 'H2aw/3', 'H5D2/4', 'H5EQ/4', 'I7Kp/2'
];
const postPrep = [
  'LgHH/0', 'LgHf/0', 'LgHv/0', 'LgIL/0', 'LgIY/0', 'LgIu/0', 'LgJG/1',
  'LgK1/0', 'LgLH/1', 'LgL0/0', 'LgNC/0', 'LgNe/0', 'LgOO/0', 'LgOf/0',
  'LgPH/0', 'LgPW/0', 'LgRo/0'
];
const all = week1.concat(week2).concat(week3).concat(week4).concat(postPrep);



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
    this.stopTimeout();
  }

  generateUrl(arr) {
    this.setState({url: arr[Math.floor(Math.random() * arr.length)]});
    this.openModal();
  }

  stopTimeout() {
    let id = window.setTimeout(function() {}, 0);

    while (id--) {
      window.clearTimeout(id);
    }
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
          <a onClick={() => {this.generateUrl(postPrep);}} className="button">
            Post Prep
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
            closeModal={this.closeModal}
            stopTimeout={this.stopTimeout}
          />
        </Modal>
      </div>
    );
  }
}

export default Page;
