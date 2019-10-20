import React from 'react';
import './BookList.scss';

interface Props {
    title: string;
    author: string;
    ISBN: string;
    id: string;
    onDelete: (id: string) => void;
}

const BookList = ({
    author,
    title,
    ISBN,
    id,
    onDelete,
}: Props): JSX.Element => {
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{ISBN}</td>
            <td className='delete-book' onClick={(): void => onDelete(id)}>
                x
            </td>
        </tr>
    );
};

export default BookList;
