import React, { ChangeEvent } from 'react';
import './Input.scss';

interface Props {
    label: string;
    type?: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    name: string;
    invalid: boolean;
    touched: boolean;
}

const Input = ({
    label,
    type = 'text',
    placeholder,
    onChange,
    value,
    name,
    invalid,
    touched,
}: Props): JSX.Element => {
    const classes = ['form-control'];

    if (!invalid && touched) {
        classes.push('invalid');
    }
    return (
        <div className='input-group'>
            <label className='input-group-text'>{label}</label>
            <input
                className={classes.join(' ')}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
            />
        </div>
    );
};

export default Input;
