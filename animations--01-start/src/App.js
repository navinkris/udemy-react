import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter: 400,
  exit: 1000
};

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock }))}>Toggle</button>
        <br />
        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
          {state => (
            <div style={{backgroundColor: 'red', width: 100, height: 100, margin: 'auto', transition: 'opacity 1s ease-out', opacity: state === 'exiting' ? 0 : 1}}></div>
          )}
        </Transition>
        <Transition mountOnEnter unmountOnExit in={this.state.modalIsOpen} timeout={animationTiming}>
          {state => (
            <Modal show={state} closed={this.closeModal}/>
          )}
        </Transition>
        {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal}/> : null }
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null }
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
