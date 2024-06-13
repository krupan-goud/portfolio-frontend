import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../styles/components/inputField.module.css';

interface PropsTypes {
    label: string;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    error?: string;
}

const InputField: React.FC<PropsTypes> = ({
    label,
    type,
    name,
    value,
    placeholder,
    required = false,
    rows,
    cols,
    onChange,
    error
}) => {
    return (
        <div>
            {label && <Form.Label className={styles.label}>{label}</Form.Label>}
            {type !== 'textarea' ? (
                <>
                    <input
                        className={styles.inputfield}
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        onChange={onChange}
                    />
                    {error && <p className={styles.errorMessage}>{error}</p>}
                </>
            ) : (
                <>
                    <Form.Control
                        as="textarea"
                        className={`${styles.inputfield} ${styles.textarea}`}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        rows={rows}
                        cols={cols}
                        onChange={onChange}
                    />
                    {error && <p className={styles.errorMessage}>{error}</p>}
                </>
            )}
        </div>
    );
};

export default InputField;
