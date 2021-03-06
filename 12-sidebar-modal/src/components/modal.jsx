import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
    return <div className = {`modal-overlay`}>
        <div className="modal-container">
            <h3>ShowModal</h3>
            <button className="close-modal-btn">
                <FaTimes />
            </button>
        </div>
    </div>
}
 
export default Modal;