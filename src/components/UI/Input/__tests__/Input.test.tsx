import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Input from '../Input';

let wrapper: ShallowWrapper;

const setup = (props: any): ShallowWrapper => {
    return shallow(<Input {...props} />);
};

const changeFn = jest.fn();
const props = {
    label: 'Author',
    type: 'text',
    placeholder: 'Enter the author',
    onChange: changeFn,
    value: 'Eduard',
    name: 'author',
    invalid: false,
    touched: false,
};
beforeEach((): void => {
    wrapper = setup(props);
});

test('renders without error', (): void => {
    expect(wrapper.find('.input-group')).toHaveLength(1);
    expect(wrapper.find('.input-group-text')).toHaveLength(1);
    expect(wrapper.find('.form-control')).toHaveLength(1);
});

test('renders correct props', (): void => {
    expect(wrapper.find('.input-group-text').text()).toEqual('Author');
    expect(wrapper.find('.form-control').prop('placeholder')).toEqual(
        'Enter the author',
    );
    expect(wrapper.find('.form-control').prop('value')).toEqual('Eduard');
    expect(wrapper.find('.form-control').prop('name')).toEqual('author');
    expect(wrapper.find('.form-control').prop('type')).toEqual('text');
});

test('calls onChange on a value changed', (): void => {
    const mockTarget = {
        target: {
            value: 'author',
        },
    };
    wrapper.find('.form-control').simulate('change', mockTarget);

    expect(changeFn).toHaveBeenCalled();
    expect(changeFn).toHaveBeenCalledTimes(1);
    expect(changeFn).toHaveBeenCalledWith(mockTarget);
});

test('renders "invalid" className on touched true and invlid false', (): void => {
    wrapper = setup({
        ...props,
        touched: true,
        invalid: false,
    });

    expect(wrapper.find('.invalid').exists()).toBe(true);
});
