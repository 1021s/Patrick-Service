/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount, shallow } from 'enzyme';
import fakeData from '../../public/data/fakeData';
import Modal from '../../public/src/components/Modal';

describe('Modal render suite', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Modal listing={fakeData} debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(<Modal listing={fakeData} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Modal click suite', () => {
  it('button click should show second modal', () => {
    const wrapper = mount(<Modal listing={fakeData} />);
    wrapper
      .find('#question')
      .simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('button click should hide second modal', () => {
    const wrapper = mount(<Modal listing={fakeData} />);
    wrapper
      .find('#question')
      .simulate('click')
      .find('#question')
      .simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('button click should show second modal', () => {
    const wrapper = mount(<Modal listing={fakeData} />);
    wrapper
      .find('.close-modal')
      .simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
