"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RadioButtonComponent(_ref) {
  var state = _ref.state,
      setState = _ref.setState,
      color = _ref.color,
      size = _ref.size;

  function handle() {
    setState(!state);
  }

  return /*#__PURE__*/_react.default.createElement(_styles.DivRouded, {
    size: size,
    color: color,
    state: state,
    onClick: function onClick() {
      return handle();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.DivBall, null));
}

RadioButtonComponent.propTypes = {
  setState: _propTypes.default.func.isRequired,
  state: _propTypes.default.bool,
  color: _propTypes.default.string
};
RadioButtonComponent.defaultProps = {
  color: "#00a8ff",
  size: "sm"
};
var _default = RadioButtonComponent;
exports.default = _default;