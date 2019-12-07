/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import ConstructionDetails from '../../public/src/components/ConstructionDetails';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ConstructionDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = mount(<ConstructionDetails />);
    expect(component).toMatchSnapshot();
  });
});
