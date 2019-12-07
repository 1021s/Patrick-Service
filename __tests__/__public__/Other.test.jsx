/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import Other from '../../public/src/components/Other';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Other debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = mount(<Other />);
    expect(component).toMatchSnapshot();
  });
});
