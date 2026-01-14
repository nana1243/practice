import {createPortal} from "react-dom";
import styles from './index.module.css'

interface ModalProps {
    description: string;
    isOpen: boolean;
    children?: React.ReactNode;
    onClose: () => void;
}

const Modal = ({description, isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;

    }
    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            {/* e.stopPropagation()은 모달 내부 클릭 시 닫히지 않게 함 */}
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>ModalTitle</div>
                <div className={styles.modalBody}>{children ?? description}</div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose}>취소</button>
                    <button onClick={onClose}>확인</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root'),
    )

}


export default Modal;