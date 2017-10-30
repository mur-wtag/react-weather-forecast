import React from 'react';
import ReactDOM from 'react-dom';
import WeatherForecast from '../src/index';

const Component = (
  <div>
    <span><WeatherForecast latitude={90} longitude={28} location={'Dhaka'} units={'us'} /></span>
  </div>
);

ReactDOM.render(Component, document.getElementById('app'));
