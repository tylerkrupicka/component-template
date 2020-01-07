import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

/** A simple component. */
export const {{pascal}} = props => {
  return <Wrapper>This is a {{pascal}} component</Wrapper>;
}

{{pascal}}.propTypes = {}

export default {{pascal}};
