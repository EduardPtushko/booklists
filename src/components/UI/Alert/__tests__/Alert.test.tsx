import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../Alert';

test('renders with class "succes" when error is false', (): void => {
    const wrapper = shallow(<Alert text='Success!' error={false} />);

    expect(wrapper.find('div').text()).toBe('Success!');
    expect(wrapper.find('.alert').hasClass('success')).toBeTrue();
});

test('renders with class "danger" when error is true', (): void => {
    const wrapper = shallow(<Alert text='Failure!' error={true} />);

    expect(wrapper.find('.alert').hasClass('danger')).toBeTrue();
    expect(wrapper.find('.alert').text()).toBe('Failure!');
});
