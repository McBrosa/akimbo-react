import React from "react";
import classnames from "classnames";
import logoGray from "../../assets/logo-gray@2x.png";
import logoWhite from "../../assets/logo@2x.png";
import { Button } from "../";
import styles from "./Navbar.module.scss";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      top: true,
      width: 0,
      menuDisplay: false
    };

    this.updateWidth = this.updateWidth.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  componentDidMount() {
    this.updateWidth();
    document.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateWidth);
  }

  handleScroll = () => {
    this.setState({ top: window.scrollY === 0 });
  };

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  onMenuClick() {
    const { menuDisplay } = this.state;
    this.setState({ menuDisplay: !menuDisplay });
  }

  renderMobile() {
    const { menuDisplay } = this.state;
    const className = classnames({
      [styles.navbar_mobile]: true
    });

    const menu = (
      <nav
        className={classnames({
          [styles.navbar_column]: true,
          [styles.navbar_scrollable]: true,
          [styles.close]: !menuDisplay,
          [styles.open]: menuDisplay
        })}
      >
        <ul>
          <li>
            <a href="#">AKIMBO FOR BUSINESS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">FEES</a>
          </li>
          <li>
            <a href="#">REGISTER CARD</a>
          </li>
          <li>
            <a href="#">ACTIVATE CARD</a>
          </li>
          <li>
            <Button
              type="primaryReversed"
              text="LOG IN"
              onClick={() => alert("click log in")}
            />
          </li>
          <li>
            <Button
              text="I HAVE AN INVITE CODE"
              type="secondary"
              onClick={() => alert("click invite code")}
            />
          </li>
        </ul>
      </nav>
    );

    return (
      <div className={styles.fixed}>
        <div className={className}>
          <img src={logoGray} className={styles.logo} alt="akimbo logo" />
          <a href="#" onClick={this.onMenuClick}>
            {menuDisplay ? "Close Menu" : "Menu"}
          </a>
        </div>
        {menu}
      </div>
    );
  }

  renderDesktop() {
    const { top } = this.state;
    const logo = top ? logoWhite : logoGray;
    const primaryButtonType = top ? "primary" : "primaryReversed";
    const className = classnames({
      [styles.navbar]: true,
      [styles.navbar_scrollable]: !top
    });

    return (
      <nav className={className}>
        <ul>
          <li>
            <img src={logo} className={styles.logo} alt="akimbo logo" />
          </li>
          <li>
            <a href="#">AKIMBO FOR BUSINESS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">FEES</a>
          </li>
          <li>
            <a href="#">REGISTER CARD</a>
          </li>
          <li>
            <a href="#">ACTIVATE CARD</a>
          </li>
          <li>
            <Button
              type={primaryButtonType}
              text="LOG IN"
              onClick={() => alert("click log in")}
            />
          </li>
          <li>
            <Button
              text="I HAVE AN INVITE CODE"
              type="secondary"
              onClick={() => alert("click invite code")}
            />
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    const { width } = this.state;

    return width > 1060 ? this.renderDesktop() : this.renderMobile();
  }
}
