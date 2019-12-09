/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import HoaDetails from '../../public/src/components/HoaDetails';

describe('HoaDetails render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HoaDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<HoaDetails listing={fakeData.hoaAndFinancialDetails} />);
    expect(component).toMatchSnapshot();
  });
});
