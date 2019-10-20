import React from 'react';
import BookList from '../BookList/BookList';
import './BookLists.scss';
import { Book } from '../../types/types';

interface Props {
    books: Book[];
    onDelete: (id: string) => void;
}

const BookLists = ({ books, onDelete }: Props): JSX.Element => {
    return (
        <table id='book-table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books.map(({ title, author, ISBN, id }) => (
                    <BookList
                        key={id}
                        title={title}
                        author={author}
                        ISBN={ISBN}
                        id={id}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default BookLists;
