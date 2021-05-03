import {Component} from 'react';
import {createPortal} from 'react-dom'
import styles from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root")

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape' || e.code === "Backspace") {
            this.props.onClose()
        }
    }

    handleClickBackdrop = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    
    render() {
    const {children} = this.props
    return createPortal(
        
        <div onClick={this.handleClickBackdrop} className={styles.Overlay}>
            <div className={styles.Modal}>
                {children}
            </div>
        </div>, modalRoot,
    );
}
}

export default Modal;