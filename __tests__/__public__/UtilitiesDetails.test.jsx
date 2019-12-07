/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import UtilitiesDetails from '../../public/src/components/UtilitiesDetails';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<UtilitiesDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = mount(<UtilitiesDetails />);
    expect(component).toMatchSnapshot();
  });
});
