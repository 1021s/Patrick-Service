/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import PropertyDetails from '../../public/src/components/PropertyDetails';

describe('PropertyDetails render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PropertyDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<PropertyDetails listing={fakeData.propertyDetails} />);
    expect(component).toMatchSnapshot();
  });
});
