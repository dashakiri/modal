import React, { PureComponent } from "react";
import { Modal } from "./Modal/Modal";

export class App extends PureComponent {
  state = {
    showModal: false,
  };

  toggleModal = (e) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          {" "}
          Open/close
        </button>

        {this.state.showModal && <Modal onModalClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
