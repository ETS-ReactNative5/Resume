import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from './Home';
import { TextAnimation } from './textAnimations/GreetingsAnimation';
import { configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});

describe('If TextField', () => {
  it('should render a textField', () => {
    const wrapper = shallow(<Home classes/>);
    expect(wrapper.find(TextAnimation)).toHaveLength(1);
  });
});
