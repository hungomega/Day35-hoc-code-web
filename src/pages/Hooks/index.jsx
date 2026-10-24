// import { useState, useMemo } from "react";
import Modal from "../../components/Modal";
import { useRef } from "react";
function Hooks() {
    const modalRef = useRef(null);

    return (
        <div>
            <Modal ref={modalRef}>
                <h1>Modal Content</h1>
                <button onClick={() => modalRef.current?.close()}>
                    Close modal
                </button>
            </Modal>

            <button onClick={() => modalRef.current?.toggle()}>
                Open Modal
            </button>
        </div>
    );
}
export default Hooks;
 