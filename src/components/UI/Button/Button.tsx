import React from 'react';
import './Button.scss';

interface Props {
    text: string;
    clicked?: () => void;
    btnClass?: string;
    isValid?: boolean;
}

const Button = ({ text, clicked, btnClass, isValid }: Props): JSX.Element => {
    let classes = 'btn';
    if (btnClass) {
        classes = `btn ${btnClass}`;
    }

    return (
        <button disabled={!isValid} onClick={clicked} className={classes}>
            {text}
        </button>
    );
};

export default Button;
