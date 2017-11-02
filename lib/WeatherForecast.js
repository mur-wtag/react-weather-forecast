'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherForecast = function (_Component) {
  _inherits(WeatherForecast, _Component);

  function WeatherForecast() {
    _classCallCheck(this, WeatherForecast);

    return _possibleConstructorReturn(this, (WeatherForecast.__proto__ || Object.getPrototypeOf(WeatherForecast)).apply(this, arguments));
  }

  _createClass(WeatherForecast, [{
    key: 'render',
    value: function render() {
      var settings = this.props.settings;

      var url = '//forecast.io/embed/#lat=' + settings.latitude + '&lon=' + settings.longitude + '&name=' + settings.location + '&units=' + settings.units;
      return _react2.default.createElement('iframe', { type: 'text/html', height: 245, width: '100%', frameBorder: '0', src: url });
    }
  }]);

  return WeatherForecast;
}(_react.Component);

exports.default = WeatherForecast;


WeatherForecast.propTypes = {
  settings: _react.PropTypes.shape({
    latitude: _react2.default.PropTypes.number.isRequired,
    longitude: _react2.default.PropTypes.number.isRequired,
    location: _react2.default.PropTypes.string.isRequired,
    units: _react2.default.PropTypes.string.isRequired
  })
};

WeatherForecast.defaultProps = {
  settings: {
    latitude: 90,
    longitude: 28,
    location: 'Dhaka',
    units: 'us'
  }
};