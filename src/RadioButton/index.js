import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {DivRouded, DivBall} from './styles'

function RadioButtonComponent({ state, setState, color, size }) {

  function handle() {
    setState(!state)
  }

  return <DivRouded size={size} color={color} state={state} onClick={() => handle()}>
    <DivBall></DivBall>
  </DivRouded>;
}

RadioButtonComponent.propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.bool,
  color: PropTypes.string
};

RadioButtonComponent.defaultProps = {
  color: "#00a8ff",
  size: "sm"
};

export default RadioButtonComponent;