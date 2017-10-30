import React from 'react';

export default class WeatherForecast extends React.Component {
  render() {
    const { settings } = this.props;
    let url = '//forecast.io/embed/#lat=' + settings.latitude + '&lon=' + settings.longitude + '&name=' + settings.location + '&units=' + settings.units;
    return (
      <div className="widget-grid text">
        <div className="flex-container weather">
          { React.createElement('iframe', { type: 'text/html', height: 245, width: '100%', frameBorder: '0', src: url }) }
        </div>
      </div>
    );
  }
}

WeatherForecast.propTypes = {
  settings: PropTypes.shape({
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    location: React.PropTypes.string.isRequired,
    units: React.PropTypes.string.isRequired,
  })
};

WeatherForecast.defaultProps = {
  settings: {
    latitude: 90,
    longitude: 28,
    location: 'Dhaka',
    units: 'us',
  }
};
