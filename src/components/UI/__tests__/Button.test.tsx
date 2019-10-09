import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

test("renders without error", (): void => {
    const wrapper = shallow(<Button text="Click" />);

    expect(wrapper.find("button")).toHaveLength(1);
});

test("renders with text and className", (): void => {
    const wrapper = shallow(<Button text="Click" btnClass="btn-white" />);

    expect(wrapper.find("button").hasClass("btn btn-white")).toBeTrue();

    expect(wrapper.find("button").text()).toBe("Click");
});

test("button being clicked", (): void => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button text="Click" clicked={mockFn} />);
    expect(mockFn).not.toHaveBeenCalled();

    wrapper.find("button").simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
});
