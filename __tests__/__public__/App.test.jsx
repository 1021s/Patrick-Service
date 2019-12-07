/* eslint-env jest */
/* eslint-env node */
import 'jsdom-global/register';
import React from 'react';
import '../../setupTests';
import { mount } from 'enzyme';
import App from '../../public/src/components/App';
import CommunityDetails from '../../public/src/components/CommunityDetails';
import ConstructionDetails from '../../public/src/components/ConstructionDetails';
import GraphicsHeader from '../../public/src/components/GraphicsHeader';
import HoaDetails from '../../public/src/components/HoaDetails';
import InteriorDetails from '../../public/src/components/InteriorDetails';
import PropertyDetails from '../../public/src/components/PropertyDetails';
import UtilitiesDetails from '../../public/src/components/UtilitiesDetails';

describe('App render suite', () => {
  const wrapper = mount(<App />);

  it('should render CommunityDetails without throwing an error', () => {
    const communityDetails = wrapper.contains(CommunityDetails);
    expect(communityDetails).toBe(true);
  });

  it('should render ConstructionDetails without throwing an error', () => {
    const constructionDetails = wrapper.contains(ConstructionDetails);
    expect(constructionDetails).toBe(true);
  });

  it('should render GraphicsHeader without throwing an error', () => {
    const graphicsHeader = wrapper.contains(GraphicsHeader);
    expect(graphicsHeader).toBe(true);
  });

  it('should render HoaDetails without throwing an error', () => {
    const hoaDetails = wrapper.contains(HoaDetails);
    expect(hoaDetails).toBe(true);
  });

  it('should render InteriorDetails without throwing an error', () => {
    const interiorDetails = wrapper.contains(InteriorDetails);
    expect(interiorDetails).toBe(true);
  });

  it('should render PropertyDetails without throwing an error', () => {
    const propertyDetails = wrapper.contains(PropertyDetails);
    expect(propertyDetails).toBe(true);
  });

  it('should render UtilitiesDetails without throwing an error', () => {
    const utilitiesDetails = wrapper.contains(UtilitiesDetails);
    expect(utilitiesDetails).toBe(true);
  });
});

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

describe('App click suite', () => {
  it('button click should hide component', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('.link')
      .simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
