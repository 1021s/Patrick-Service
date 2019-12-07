/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import HoaDetails from '../../public/src/components/HoaDetails';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HoaDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = mount(<HoaDetails />);
    expect(component).toMatchSnapshot();
  });
});
