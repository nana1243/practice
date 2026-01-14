import {ChangeEvent, useState} from "react";
import Modal from "../modal-portal/Modal";

const DashBoard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };


    return (
        <>
            <h2>Dash Board Component</h2>
            <button onClick={handleClick}>SubMit</button>
            <Modal
                description="This is a modal dialog"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}


export default DashBoard;