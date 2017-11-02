import React, { Component, PropTypes } from 'react';

export default class WeatherForecast extends Component {
  render() {
    const { settings } = this.props;
    const url = '//forecast.io/embed/#lat=' + settings.latitude + '&lon=' + settings.longitude + '&name=' + settings.location + '&units=' + settings.units;
    return (React.createElement('iframe', { type: 'text/html', height: 245, width: '100%', frameBorder: '0', src: url }));
  }
}

WeatherForecast.propTypes = {
  settings: PropTypes.shape({
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    location: React.PropTypes.string.isRequired,
    units: React.PropTypes.string.isRequired,
  }),
};

WeatherForecast.defaultProps = {
  settings: {
    latitude: 90,
    longitude: 28,
    location: 'Dhaka',
    units: 'us',
  },
};
