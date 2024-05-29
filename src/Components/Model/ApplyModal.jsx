import React,{useState} from 'react'
import Modal from './Modal.jsx'

function ApplyModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const setModal = ()=>{
        setIsModalOpen(true);
    }
    const closeModal = ()=>{
        setIsModalOpen(false);
    }
  return (
    <>
        <div className="portal-container">
            <h1>Hwllo do you want to know anythist?</h1>
            <button onClick={setModal} >Ofc Dude</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}  >
                <h1>DO you really want to delete this shit?</h1>
            </Modal>
        </div>
    </>
)
}

export default ApplyModal