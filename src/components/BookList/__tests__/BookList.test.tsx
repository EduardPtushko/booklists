import React from 'react';
import { shallow } from 'enzyme';
import BookList from '../BookList';

describe('BookList', (): void => {
    const onDelete = jest.fn();
    const props = {
        title: 'Test',
        author: 'John Doe',
        ISBN: '12345',
        id: 'xjfodfjf',
        onDelete,
    };

    test('renders without error', (): void => {
        const wrapper = shallow(<BookList {...props} />);

        expect(wrapper.find('tr').children()).toHaveLength(4);
    });

    test('renders correctly with given props', (): void => {
        const wrapper = shallow(<BookList {...props} />);

        expect(wrapper.find('tr').text()).toContain(props.title);
        expect(wrapper.find('tr').text()).toContain(props.author);
        expect(wrapper.find('tr').text()).toContain(props.ISBN);
        expect(
            wrapper
                .find('tr')
                .children()
                .at(3)
                .text(),
        ).toBe('x');
    });

    test('onDelete is invoked on click with proper id', (): void => {
        const wrapper = shallow(<BookList {...props} />);

        wrapper.find('td[className="delete-book"]').simulate('click');

        expect(onDelete).toHaveBeenCalled();
        expect(onDelete).toHaveBeenCalledTimes(1);
        expect(onDelete).toHaveBeenCalledWith(props.id);
    });
});
