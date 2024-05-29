import React from "react";
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({isOpen, onClose, childern})=>{
    if(!isOpen) return null;


    return ReactDOM.createPortal(
        <div className="main-portal">
            <div className="portal-middler">
                {childern}
                <div className="button-portal">
                    <button onClick={onClose} >No</button>
                    <button onClick={onClose} >Yes</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal-root')
    )
}
export default Modal;