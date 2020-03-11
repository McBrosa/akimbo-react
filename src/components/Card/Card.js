import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Panel.module.scss";

export default function Panel(props) {
  const { label, text, image } = props;
  const className = classnames({
    [styles.container]: true,
    [styles.full]: height === "full",
    [styles.half]: height === "half",
    [styles.red]: background === "red",
    [styles.maroon]: background === "maroon",
    [styles.white]: background === "white",
    [styles.gray]: background === "gray",
    [styles.single]: layout === "single",
    [styles.double]: layout === "double"
  });

  // return (
  //   <div>
  //     <video autoplay muted loop>
  //       <source src="../../assets/intro-video.mp4" type="video/mp4" />
  //     </video>
  //   </div>
  // );

  return <div className={className}>{children}</div>;
}

Panel.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: 
};

Panel.defaultProps = {
  background: "white",
  height: "full",
  layout: "double"
};
