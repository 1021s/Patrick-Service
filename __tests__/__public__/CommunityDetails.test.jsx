/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import CommunityDetails from '../../public/src/components/CommunityDetails';

describe('CommunityDetails render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CommunityDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<CommunityDetails listing={fakeData.communityAndNeighborhoodDetails} />);
    expect(component).toMatchSnapshot();
  });
});
