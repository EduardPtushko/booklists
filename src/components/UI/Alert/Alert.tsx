import React from 'react';
import './Alert.scss';

interface Props {
    error: boolean;
    text: string;
}

const Alert = ({ error, text }: Props): JSX.Element => {
    return (
        <div className={error ? 'alert danger' : 'alert success'}>{text}</div>
    );
};

export default Alert;
