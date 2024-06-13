import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/components/Alert.module.css'

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const portalContainer = document.createElement('div');

    portalContainer.classList.add(styles.alertPortal);

    useEffect(() => {
        document.body.appendChild(portalContainer);

        return () => {
            document.body.removeChild(portalContainer);
        };
    }, [portalContainer]);


    return ReactDOM.createPortal(
        <div className={styles.alertOverlay}>
            <div className={styles.alertBox}>
                <div className={styles.alertMessage}>{message}</div>
                <button className={styles.alertClose} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>,
        portalContainer
    );
};

export default Alert;
