import React from 'react';
import { Element } from "@design-systems/utils";
import styles from './{{pascal}}.css';

interface {{pascal}}Props extends Element<"div"> {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const {{pascal}} = (props: {{pascal}}Props) => {
  return <div className={styles.{{camel}}}>This is a {{pascal}} component {props.value}</div>;
}

export default {{pascal}};
