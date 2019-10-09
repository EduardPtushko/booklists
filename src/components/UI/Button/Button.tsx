import React from 'react';
import './Button.scss';

interface Props {
    text: string;
    clicked?: () => void;
    btnClass?: string;
}

const Button = ({ text, clicked, btnClass }: Props): JSX.Element => {
    let classes = 'btn';
    if (btnClass) {
        classes = `btn ${btnClass}`;
    }

    return (
        <button onClick={clicked} className={classes}>
            {text}
        </button>
    );
};

export default Button;
