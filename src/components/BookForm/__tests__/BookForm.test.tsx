import React from 'react';
import { shallow } from 'enzyme';
import BookForm from '../BookForm';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

describe('BookForm', (): void => {
    let wrapper;
    const onAddBook = jest.fn();
    beforeEach((): void => {
        wrapper = shallow(<BookForm onAddBook={onAddBook} />);
    });

    test('renders without error', (): void => {
        expect(wrapper.find(Input)).toHaveLength(3);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    test('changes value of title on change event', (): void => {
        wrapper
            .find(Input)
            .at(0)
            .simulate('change', { target: { value: 'book', name: 'Title' } });

        expect(
            wrapper
                .find(Input)
                .at(0)
                .prop('value'),
        ).toBe('book');
    });
    test('changes value of author on change event', (): void => {
        wrapper
            .find(Input)
            .at(1)
            .simulate('change', {
                target: { value: 'John Doe', name: 'Author' },
            });

        expect(
            wrapper
                .find(Input)
                .at(1)
                .prop('value'),
        ).toBe('John Doe');
    });
    test('changes value of isbn on change event', (): void => {
        wrapper
            .find(Input)
            .at(2)
            .simulate('change', { target: { value: '12345', name: 'ISBN' } });

        expect(
            wrapper
                .find(Input)
                .at(2)
                .prop('value'),
        ).toBe('12345');
    });

    test('clears input fields on submit', (): void => {
        wrapper.simulate('submit', {
            preventDefault() {}, // eslint-disable-line
        });

        expect(onAddBook).toHaveBeenCalledTimes(1);
        expect(onAddBook).toHaveBeenCalledWith({
            title: '',
            author: '',
            ISBN: '',
            id: expect.anything(),
        });

        expect(
            wrapper
                .find(Input)
                .at(0)
                .props(),
        ).toContainEntries([
            ['invalid', false],
            ['touched', false],
            ['value', ''],
        ]);

        expect(
            wrapper
                .find(Input)
                .at(1)
                .props(),
        ).toContainEntries([
            ['invalid', false],
            ['touched', false],
            ['value', ''],
        ]);
        expect(
            wrapper
                .find(Input)
                .at(2)
                .props(),
        ).toContainEntries([
            ['invalid', false],
            ['touched', false],
            ['value', ''],
        ]);
    });

    test('onAddBook is called on submit', (): void => {
        wrapper.simulate('submit', {
            preventDefault() {}, // eslint-disable-line
        });

        expect(onAddBook).toHaveBeenLastCalledWith({
            title: '',
            author: '',
            ISBN: '',
            id: expect.anything(),
        });
    });
});
