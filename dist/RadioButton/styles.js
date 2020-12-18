"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivRouded = exports.Text = exports.DivBall = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  height: 30px;\n  width: 72px;\n  flex-direction: ", " ;\n  border:  ", " ;\n  box-shadow: 0px 1px 3px #0000004D;\n  border-radius: 15px;\n  background-color: ", ";\n  display: flex;\n  ", "{\n    background:  ", "\n  }\n  ", "{\n    color:  ", "\n  }\n  &:hover{\n    transform: scale(1.01)\n  }\n  justify-content: flex-end;\n  align-items: center;\n  transition: ", " ; \n\n"]);

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
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 80%;\n  margin: 3px;\n  border: none;\n  box-shadow: 0px 1px 3px #0000004D;\n  border-radius: 15px;\n  background: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DivBall = _styledComponents.default.div(_templateObject());

exports.DivBall = DivBall;

var Text = _styledComponents.default.div(_templateObject2());

exports.Text = Text;

var DivRouded = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.state ? 'row' : 'row-reverse';
}, function (props) {
  return "1px solid ".concat(props.color);
}, function (props) {
  return props.state ? props.color : "#fff";
}, DivBall, function (props) {
  return props.state ? "#fff" : props.color;
}, Text, function (props) {
  return props.state ? "#fff" : props.color;
}, function (props) {
  return props.state ? '1s' : '1s';
});

exports.DivRouded = DivRouded;