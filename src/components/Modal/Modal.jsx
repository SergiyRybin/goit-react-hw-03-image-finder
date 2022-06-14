import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escClose);
  }

  escClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  bacdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.bacdropClose}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
