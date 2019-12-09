/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import UtilitiesDetails from '../../public/src/components/UtilitiesDetails';

describe('UtilitiesDetails render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<UtilitiesDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<UtilitiesDetails listing={fakeData.utilitiesGreenEnergyDetails} />);
    expect(component).toMatchSnapshot();
  });
});
