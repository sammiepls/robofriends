import React from 'react';
import {shallow} from 'enzyme'
import CounterButton from './CounterButton'

describe('test CounterButton', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<CounterButton/>)
  })

  it('should render the CounterButton component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // it('should increate the count when button is pressed', () => {
  //   expect(wrapper.text()).toBe('Count: 0')
  //   const button = wrapper.find('button');
  //   button.simulate('click');
  //   expect(wrapper.text()).toBe('Count: 1')
  // })

  // class component
  it("should increase the count when button is pressed", () => {
    expect(wrapper.state(["count"])).toEqual(0);
    wrapper.simulate("click");
    expect(wrapper.state(["count"])).toEqual(1);
  });
})
