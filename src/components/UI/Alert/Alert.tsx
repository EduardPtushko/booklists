import React from 'react';
import './Alert.scss';

interface Props {
    alertClass: string;
    text: string;
}

const Alert = ({ alertClass, text }: Props): JSX.Element => {
    return <div className={`alert ${alertClass}`}>{text}</div>;
};

export default Alert;
