import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render CardList component', () => {
  const mockRobots = [
    {
      id:1,
      name:'John Snow',
      username: 'johnjohn',
      email:'john@gmail.com'
    }
  ]
  expect(shallow(<CardList
  robots={mockRobots}/>)).toMatchSnapshot()
})
