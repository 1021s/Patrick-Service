/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import ConstructionDetails from '../../public/src/components/ConstructionDetails';

describe('ConstructionDetails render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ConstructionDetails debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<ConstructionDetails listing={fakeData.constructionDetails} />);
    expect(component).toMatchSnapshot();
  });
});
