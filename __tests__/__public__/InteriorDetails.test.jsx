/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import InteriorDetails from '../../public/src/components/InteriorDetails';

describe('InteriorDetails render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<InteriorDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<InteriorDetails listing={fakeData.interiorDetails} />);
    expect(component).toMatchSnapshot();
  });
});
