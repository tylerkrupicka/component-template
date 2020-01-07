import React from 'react';
import PropTypes from 'prop-types';

import styles from './{{pascal}}.css';

/** A simple component. */
export const {{pascal}} = props => {
  return <div className={styles.{{camel}}}>This is a {{pascal}} component</div>;
}

{{pascal}}.propTypes = {}

export default {{pascal}};
