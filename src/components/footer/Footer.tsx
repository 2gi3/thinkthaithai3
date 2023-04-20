import Image from "next/image";
import Contacts from "../Contacts/Contacts";
import styles from "./Footer.module.scss";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer>
      <Contacts />
      <div className={styles.credits}>
        <div className={styles.image}>
          <Image
            alt="Giuseppe Ippolito"
            src="/popOutProfile.webp"
            width={104}
            height={119}
          />
        </div>
        <div className={styles.info}>
          <p>{t("Website by")}</p>
          <h3>{t("Giuseppe Ippolito")}</h3>
          <p>{t("Web-Developer")}</p>
          <p>{t("London")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
