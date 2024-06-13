import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../styles/components/InputField.module.css';

interface PropsTypes {
    label: string,
    type: string,
    name: string,
    value: string,
    placeholder: string,
    required: boolean,
    onchange: any,
    rows: number,
    cols: number
}

const InputField = ({ label, type, name, value, placeholder, required = false, rows, cols, onchange }: PropsTypes) => {
    return (
        <div>
            {label && <Form.Label className={styles.label}>{label}</Form.Label>}
            {type !== 'textarea' ? (
                <input
                    className={styles.inputfield}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onchange}
                />
            ) : (
                <Form.Control
                    as="textarea"
                    className={`${styles.inputfield} ${styles.textarea}`}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                    cols={cols}
                    onChange={onchange}
                />
            )}
        </div>
    );
};

export default InputField;
