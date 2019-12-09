/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import Other from '../../public/src/components/Other';

describe('Other render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Other debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<Other listing={fakeData.other} />);
    expect(component).toMatchSnapshot();
  });
});
