import React from 'react';
import { shallow } from 'enzyme';
import BookLists from '../BookLists';
import BookList from '../../BookList/BookList';

describe('BookLists', (): void => {
    const props = {
        books: [
            {
                title: 'Book1',
                author: 'John Doe',
                ISBN: '12345',
                id: 'xjfodfjf',
                onDelete: jest.fn(),
            },
            {
                title: 'Book2',
                author: 'Steven King',
                ISBN: '23456',
                id: 'x3nf9f',
                onDelete: jest.fn(),
            },
        ],
        onDelete: jest.fn(),
    };

    test('renders without error', (): void => {
        const wrapper = shallow(<BookLists books={[]} onDelete={jest.fn()} />);

        expect(wrapper.find('#book-table')).toHaveLength(1);
        expect(wrapper.find('thead')).toHaveLength(1);
        expect(wrapper.find('tbody')).toHaveLength(1);
    });

    test('renders empty tbody when there are no books', (): void => {
        const wrapper = shallow(<BookLists books={[]} onDelete={jest.fn()} />);
        expect(wrapper.find('tbody').children()).toHaveLength(0);
    });

    test('renders two BookList when there are two books', (): void => {
        const wrapper = shallow(<BookLists {...props} />);

        expect(wrapper.find(BookList)).toHaveLength(2);

        expect(wrapper.render().text()).toContain(props.books[0].title);
        expect(wrapper.render().text()).toContain(props.books[0].author);
        expect(wrapper.render().text()).toContain(props.books[0].ISBN);

        expect(wrapper.render().text()).toContain(props.books[1].title);
        expect(wrapper.render().text()).toContain(props.books[1].author);
        expect(wrapper.render().text()).toContain(props.books[1].ISBN);
    });
});
