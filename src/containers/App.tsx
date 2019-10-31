import React from 'react';
import Form from '../components/BookForm/BookForm';
import BookLists from '../components/BookLists/BookLists';
import Alert from '../components/UI/Alert/Alert';
import useLocalStorage from '../hooks/useLocalStorage';
import { Book } from '../types/types';
import './App.scss';

const App = (): JSX.Element => {
    const [data, setData] = useLocalStorage('books', []);
    const [alert, setAlert] = React.useState(null);

    const deleteBook = (bookId: string): void => {
        setData(books => books.filter((book): boolean => book.id !== bookId));
        setAlert('Book was deleted!');

        setTimeout((): void => {
            setAlert(null);
        }, 1500);
    };

    const addBook = (book: Book): void => {
        setData([...data, book]);
        setAlert('Book was added!');

        setTimeout((): void => {
            setAlert(null);
        }, 1500);
    };

    return (
        <div className='app'>
            <h1>Add Book</h1>
            {alert && <Alert text={alert} alertClass='success' />}
            <Form onAddBook={addBook} />
            <hr />
            <BookLists books={data} onDelete={deleteBook} />
        </div>
    );
};

export default App;
