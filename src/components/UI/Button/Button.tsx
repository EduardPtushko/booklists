import React from 'react';
import './Button.scss';

interface Props {
    text: string;
    clicked?: () => void;
    btnClass?: string;
    disabled?: boolean;
}

const Button = ({ text, clicked, btnClass, disabled }: Props): JSX.Element => {
    let classes = 'btn';
    if (btnClass) {
        classes = `btn ${btnClass}`;
    }

    return (
        <button disabled={disabled} onClick={clicked} className={classes}>
            {text}
        </button>
    );
};

export default Button;
