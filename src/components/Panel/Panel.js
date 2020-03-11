import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Panel.module.scss";

export default function Panel(props) {
  const { background, children, height, layout } = props;
  const className = classnames({
    [styles.container]: true,
    [styles.full]: height === "full",
    [styles.half]: height === "half",
    [styles.threeQuaters]: height === "threeQuaters",
    [styles.red]: background === "red",
    [styles.maroon]: background === "maroon",
    [styles.darkGray]: background === "darkGray",
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
  background: PropTypes.oneOf([
    "white",
    "red",
    "gray",
    "video",
    "maroon",
    "darkGray"
  ]),
  height: PropTypes.oneOf(["half", "threeQuaters", "full"]),
  layout: PropTypes.oneOf(["single", "double"]),
  children: PropTypes.node.isRequired
};

Panel.defaultProps = {
  background: "white",
  height: "full",
  layout: "double"
};
