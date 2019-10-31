import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import BookForm from '../../components/BookForm/BookForm';
import BookLists from '../../components/BookLists/BookLists';
import Alert from '../../components/UI/Alert/Alert';

describe('App', (): void => {
    let wrapper;
    beforeEach((): void => {
        wrapper = shallow(<App />);
    });
    test('renders correctly', (): void => {
        expect(wrapper.find(BookForm)).toHaveLength(1);
        expect(wrapper.find(BookLists)).toHaveLength(1);
        expect(wrapper.find(Alert).exists()).toBeFalse();
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    test('data is empty array on initial render', (): void => {
        expect(wrapper.find(BookLists).prop('books')).toEqual([]);
    });

    test('renders Alert when book is added', (): void => {
        jest.useFakeTimers();

        wrapper
            .find(BookForm)
            .dive()
            .simulate('submit', {
                preventDefault: () => {},
            });

        expect(wrapper.find(Alert).exists()).toBeTrue();
        expect(wrapper.find({ text: 'Book was added!' }).exists()).toBeTrue();

        jest.runAllTimers();
        expect(wrapper.find(Alert).exists()).toBeFalse();
    });

    test('renders Alert when book is deleted', (): void => {
        jest.useFakeTimers();

        wrapper
            .find(BookForm)
            .dive()
            .simulate('submit', {
                preventDefault: () => {},
            });

        jest.runAllTimers();

        wrapper
            .find(BookLists)
            .dive()
            .find('BookList')
            .dive()
            .find('.delete-book')
            .simulate('click');

        expect(wrapper.find(Alert).exists()).toBeTrue();
        expect(wrapper.find({ text: 'Book was deleted!' }).exists()).toBeTrue();

        jest.runAllTimers();
        expect(wrapper.find(Alert).exists()).toBeFalse();
    });
});
