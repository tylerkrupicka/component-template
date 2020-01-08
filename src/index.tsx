import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

interface {{pascal}}Props {
  /** The value for the component to display */
  value: string;
}

/** A simple component. */
export const {{pascal}} = (props: {{pascal}}Props) => {
  return <Wrapper>This is a {{pascal}} component {props.value}</Wrapper>;
}

export default {{pascal}};
