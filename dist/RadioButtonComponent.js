"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 72px;\n  flex-direction: ", " ;\n  height: 30px;\n  border: none;\n  box-shadow: 0px 1px 3px #0000004D;\n  border-radius: 15px;\n  background-color: ", ";\n  display: flex;\n  ", "{\n    background:  ", "\n  }\n\n  ", "{\n    color:  ", "\n  }\n  transition: 0.4s;\n  justify-content: flex-end;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n color: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  margin: 3px;\n  border: none;\n  box-shadow: 0px 1px 3px #0000004D;\n  border-radius: 15px;\n  background: #fff;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function RadioButtonComponent(_ref) {
  var state = _ref.state,
      setState = _ref.setState,
      color = _ref.color;
  // Teste CI
  // Teste 2
  // AddTexto
  return /*#__PURE__*/_react["default"].createElement(DivRouded, {
    color: color,
    state: state,
    onClick: function onClick() {
      return setState(!state);
    }
  }, /*#__PURE__*/_react["default"].createElement(Text, null, state ? "Sim" : "N\xE3o"), /*#__PURE__*/_react["default"].createElement(DivBall, null));
}

var DivBall = _styledComponents["default"].div(_templateObject());

var Text = _styledComponents["default"].div(_templateObject2());

var DivRouded = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.state ? 'row' : 'row-reverse';
}, function (props) {
  return props.state ? props.color : "#fff";
}, DivBall, function (props) {
  return props.state ? "#fff" : props.color;
}, Text, function (props) {
  return props.state ? "#fff" : props.color;
});

RadioButtonComponent.propTypes = {
  setState: _propTypes["default"].func.isRequired,
  state: _propTypes["default"].bool,
  color: _propTypes["default"].string
};
RadioButtonComponent.defaultProps = {
  color: "#255213",
  size: "small"
};
var _default = RadioButtonComponent;
exports["default"] = _default;