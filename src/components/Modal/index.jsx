import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const Modal = forwardRef(
    (
        {
            isOpen: _isOpen = false,
            shouldCloseOnOverlayClick = true,
            shouldCloseOnEsc = true,
            children,
            closeTimeoutMS = 0,
            overlayClassName,
            className,
            onRequestClose,
            bodyOpenClassName,
        },
        ref,
    ) => {
        // const [isOpen, setIsOpen] = useState(_isOpen);
        const isOpen = _isOpen;

        useImperativeHandle( 
            ref,
            () => ({
                open() {
                    setIsOpen(true);
                },
                close() {
                    setIsOpen(false);
                },
                toggle() {
                    setIsOpen(!isOpen);
                },
            }),
            [],
        );
        const handleRequestClose = () => {
            setTimeout(onRequestClose, closeTimeoutMS);
        };

        useEffect(() => {
            if (!shouldCloseOnEsc) return;

            const handle = (e) => {
                if (e.code === "Escape") {
                    handleRequestClose();
                }
            };
            console.log({ isOpen });

            if (isOpen) {
                document.addEventListener("keyup", handle); // 0x02
            }
            //closure
            return () => {
                document.removeEventListener("keyup", handle); //0x02
            };
        }, [isOpen, shouldCloseOnEsc, onRequestClose, handleRequestClose]);

        useEffect(() => {
            document.body.classList.add(bodyOpenClassName);
            return () => {
                document.body.classList.remove(bodyOpenClassName);
            };
        }, [bodyOpenClassName]);

        if (!isOpen) return null;
        return (
            <>
                <div className={styles.modal}>
                    <h1>Modal</h1>
                    <div className={clsx(styles.content, className)}>
                        {/* close Button */}
                        <button
                            className={styles.closeBtn}
                            onClick={handleRequestClose}
                        >
                            &times;
                        </button>
                    </div>

                    {/*Overlay */}
                    <div
                        className={clsx(styles.overlay, overlayClassName)}
                        onClick={() => {
                            if (shouldCloseOnOverlayClick) {
                                handleRequestClose();
                            }
                        }}
                    />
                    {/* children */}
                    <div className={styles.inner}>{children}</div>
                </div>
            </>
        );
    },
);

Modal.displayName = "Modal";

Modal.protoTypes = {
    // onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    children: PropTypes.node.isRequired, // children là props bắt buộc phải truyền vào components
    closeTimeoutMS: PropTypes.isRequired,
    onRequestClose: PropTypes.func,
    overlayClassName: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    className: PropTypes.string,
};

export default Modal;
