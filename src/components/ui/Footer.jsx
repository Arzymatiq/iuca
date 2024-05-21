import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const [t, i18n] = useTranslation("global");
    const handleChangeLanguages = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.address}>
                    <p className={styles.text}>{t("footer.Address")}:</p>
                    <p className={styles.text}>{t("footer.Address_1")}</p>
                </div>
                <div className={styles.contacts}>
                    <p className={styles.text}>
                        {t("footer.E-MAIL")}: {t("footer.E-MAIL_1")}
                    </p>
                    <p className={styles.text}>
                        {t("footer.TEL/FAX")}: {t("footer.TEL/FAX_1")}
                    </p>
                    <p className={styles.text}>
                        {t("footer.TEL_PHONE")}:{t("footer.TEL_PHONE_1")}
                    </p>
                </div>
                <div className={styles.socialIcons}>
                    <a
                        href="https://www.instagram.com/collegeiuca/"
                        className={styles.icon}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://www.facebook.com/groups/1165242357336363"
                        className={styles.icon}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://www.youtube.com/@internationaluniversityofc2858/featured"
                        className={styles.icon}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    {/* <a href="#" className={styles.icon}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
