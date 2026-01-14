import {ChangeEvent, useState} from "react";
import Modal from "../modal-portal/Modal";

const DashBoard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        console.log('부모컴포넌트에서 클릭 이벤트 감지!')
    };


    return (
        <>
            <h2>Dash Board Component</h2>
            <div onClick={handleClick} style={{border: '1px solid red'}}>
                <button onClick={(e) => {
                    // e.stopPropagation();
                    setIsModalOpen(true);
                }}>Open Modal
                </button>
                <Modal

                    description="This is a modal dialog"
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <button>나를 클릭해봐!</button>
                </Modal>
            </div>
        </>
    )
}


export default DashBoard;