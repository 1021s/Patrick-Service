/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { shallow, mount, render } from 'enzyme';
import App from '../../public/src/components/App';

describe('App state suite', () => {
  const wrapper = mount(<App />);
  const state = wrapper.state();

  it('should have state', () => {
    expect(state).not.toBe(undefined);
    expect(state.length).not.toBe(0);
  });
  it('should have a listing state', () => {
    const { listing } = state;
    expect(typeof listing).toBe('object');
  });
  it('should have an expanded state', () => {
    const { expanded } = state;
    expect(typeof expanded).toBe('boolean');
    expect(expanded).toBe(false);
  });
});
