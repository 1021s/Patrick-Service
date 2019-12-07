/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import PropertyDetails from '../../public/src/components/PropertyDetails';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PropertyDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = mount(<PropertyDetails />);
    expect(component).toMatchSnapshot();
  });
});
