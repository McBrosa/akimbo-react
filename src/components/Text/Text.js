import React from "react";
import PropTypes from "prop-types";
import styles from "./Text.module.scss";

export default function Text(props) {
  const { children, label } = props;

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <p>{children}</p>
    </div>
  );
}

Text.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string.isRequired
};

Text.defaultProps = {
  label: ""
};
