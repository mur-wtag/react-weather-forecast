import { assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import WeatherForecast from '../src/WeatherForecast';

describe('WeatherForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherForecast />);
  });

  it('should have prop defaults', () => {
    const { settings } = wrapper.instance().props;
    assert.strictEqual(settings, {
      latitude: 90,
      longitude: 28,
      location: 'Dhaka',
      units: 'us',
    });
  });
});
