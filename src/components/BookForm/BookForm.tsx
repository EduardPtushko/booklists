import React, { FormEvent, ChangeEvent } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import checkValidity from '../../utils/validation';
import v4 from 'uuid';
import { Book } from '../../types/types';

interface Props {
    onAddBook: (book: Book) => void;
}

const BookForm = ({ onAddBook }: Props): JSX.Element => {
    const [bookForm, setBookForm] = React.useState({
        Title: {
            value: '',
            validation: {
                required: true,
                minLength: 1,
            },
            valid: false,
            touched: false,
        },
        Author: {
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLenght: 50,
            },
            valid: false,
            touched: false,
        },
        ISBN: {
            value: '',
            validation: {
                required: true,
                minLength: 13,
                maxLength: 13,
            },
            valid: false,
            touched: false,
        },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const updatedForm = {
            ...bookForm,
            [e.target.name]: {
                ...bookForm[e.target.name],
                value: e.target.value,
                touched: true,
                valid: checkValidity(
                    e.target.value,
                    bookForm[e.target.name].validation,
                ),
            },
        };

        setBookForm(updatedForm);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const book = {
            title: bookForm.Title.value,
            author: bookForm.Author.value,
            ISBN: bookForm.ISBN.value,
            id: v4(),
        };
        onAddBook(book);

        const updatedForm = { ...bookForm };
        for (const key in updatedForm) {
            updatedForm[key] = { ...bookForm[key] };
            updatedForm[key].value = '';
            updatedForm[key].valid = false;
            updatedForm[key].touched = false;
        }

        setBookForm(updatedForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(bookForm).map(bookInput => (
                <Input
                    onChange={handleChange}
                    key={bookInput}
                    label={bookInput}
                    value={bookForm[bookInput].value}
                    invalid={bookForm[bookInput].valid}
                    touched={bookForm[bookInput].touched}
                    name={bookInput}
                />
            ))}
            <Button
                disabled={
                    !bookForm.Title.valid &&
                    !bookForm.Author.valid &&
                    !bookForm.ISBN.valid
                }
                text='Submit'
            />
        </form>
    );
};

export default BookForm;
