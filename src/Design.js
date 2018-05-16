import React, { Component } from 'react';
import Modal from 'react-modal';
import CloseIcon from 'react-icons/lib/fa/close';
import houston from './images/houston.jpg';
import invoicerPdf from './images/invoicer.pdf';
import invoicerImg from './images/invoicer.png';
import './styles/PageContent.css';

class Design extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
  }


  render() {
    return (
      <div className="contentContainer">
        <h2 className="title">Designs</h2>
        <h4 className="subtitle">Sketches and other fun stuff.</h4>
        <div className="contentGrid">
          <div className="singleItem">
            <img className="screenshot" src={invoicerImg} />
            <p>
              A design mockup made for a side project for a friend. Built with Sketch
            </p>
            <p>
              <a href="#" onClick={() => this.setState({ modalIsOpen: true })}>
                View design pdf
              </a>
            </p>
          </div>
          <div className="spacer" />
          <div className="singleItem">
            <img className="screenshot" src={houston} />
            <p>
              This was a mockup created in Sketch for an all-in-one business solutions
              platform. Made for fun as a side project with a friend.
            </p>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
        >
          <div className="modalTitleBar">
            <CloseIcon
              size={22}
              className="closeIcon"
              onClick={() => this.setState({ modalIsOpen: false })}
            />
          </div>
          <iframe src={invoicerPdf} title="Invoicer example" />
        </Modal>
      </div>
    );
  }
}

export default Design;
