import React from "react";
import { withTranslation } from "react-i18next";
import styles from "./App.scss";
import inviteOnly from "./assets/image-invite-only.png";
import mission from "./assets/image-mission.png";
import mission2x from "./assets/image-mission@2x.png";
import funds from "./assets/image-funds.png";
import allowance from "./assets/image-allowance.png";
import pets from "./assets/image-pets.png";
import grocery from "./assets/image-grocery.png";
import { Button, Navbar, Panel, Text } from "./components";

function App(props) {
  const { t } = props;
  return (
    <div className={styles.App}>
      <Navbar />
      <Panel height="full" background="maroon">
        <div>
          <img
            src={inviteOnly}
            alt="invite only banner"
            className={styles.inviteBanner}
          />
          <Text label={t("panel_1.label")}>{t("panel_1.text")}</Text>
          <Button
            text="I HAVE AN INVITE CODE"
            type="secondary"
            onClick={() => alert("click invite code")}
          />
        </div>
        <img
          srcset={`${funds} 500w, ${funds} 1000w`}
          sizes="(max-width: 600px) 500px, 1000px"
          src={funds}
          className={styles.logo}
          alt="funds"
        />
      </Panel>
      <Panel height="half" layout="single">
        <div>
          <img src={inviteOnly} alt="invite only banner" />
          <Text>{t("panel_2.text")}</Text>
        </div>
      </Panel>
      <Panel height="full" background="red">
        <Text label={t("panel_3.label")}>{t("panel_3.text")}</Text>
        <img
          srcset={`${mission} 500w, ${mission2x} 1000w`}
          sizes="(max-width: 600px) 500px, 1000px"
          src={funds}
          className={styles.logo}
          alt="funds"
        />
      </Panel>
      <Panel height="half">
        <Text label={t("panel_4.label")}>{t("panel_4.text")}</Text>
        <img src={allowance} className={styles.logo} alt="allowance" />
      </Panel>
      <Panel height="half" background="gray">
        <img src={grocery} className={styles.logo} alt="grocery" />
        <Text label={t("panel_5.label")}>{t("panel_5.text")}</Text>
      </Panel>
      <Panel height="half">
        <Text label={t("panel_6.label")}>{t("panel_6.text")}</Text>
        <img src={pets} className={styles.logo} alt="pets" />
      </Panel>
      <div></div>
      <Panel height="threeQuaters" background="darkGray" />
    </div>
  );
}

export default withTranslation("common")(App);
