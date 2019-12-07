/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import InteriorDetails from '../../public/src/components/InteriorDetails';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<InteriorDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = mount(<InteriorDetails />);
    expect(component).toMatchSnapshot();
  });
});
