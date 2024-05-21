import React from "react";

import styles from "./styles/homepageAboutUsBlock.module.css";
import aboutUSImg from "./images/aboutus__img.svg";
import iuca_icon from "../../img/1eb05a_0fe9a128f78b4af98d57da389f200710~mv2.webp";
import { useTranslation } from "react-i18next";
import homepage_aboutus_img from "../../img/homePage_about_us.webp";

const HomePageAboutUsBlock = () => {
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguages = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className={styles.homepage__aboutus__block}>
            <div className={styles.container}>
                <div className={styles.img__wrapper}>
                    <div>
                        <img
                            src={homepage_aboutus_img}
                            alt="error"
                            className={styles.aboutus__left__block}
                        />
                    </div>
                </div>
                <div className={styles.aboutus__right__block}>
                    <h2 className={styles.aboutus__right__block__header}>
                        {t("homePage.title")}
                    </h2>
                    <h2 className={styles.aboutus__right__block__subheader}>
                        {t("homePage.title_1")}
                    </h2>
                    <p className={styles.aboutus__right__block__descr}>
                        {t("homePage.about_us_description")}
                    </p>
                    <div className={styles.aboutus__right__block__items}>
                        <div className={styles.aboutus__right__block__item}>
                            <div
                                className={
                                    styles.aboutus__right__block__item__img
                                }>
                                <img
                                    src={iuca_icon}
                                    alt="error"
                                    className={styles.iuca_icon}
                                />
                            </div>
                            <div
                                className={
                                    styles.aboutus__right__block__item__title
                                }>
                                <h2
                                    className={
                                        styles.aboutus__right__block__item__header
                                    }>
                                    {t("homePage.about_us_brifly_info_1_1")}
                                </h2>
                                <p
                                    className={
                                        styles.aboutus__right__block__item__descr
                                    }>
                                    {t("homePage.about_us_brifly_info_1_2")}
                                </p>
                            </div>
                        </div>
                        <div className={styles.aboutus__right__block__item}>
                            <div
                                className={
                                    styles.aboutus__right__block__item__img
                                }>
                                <img
                                    src={iuca_icon}
                                    alt="error"
                                    className={styles.iuca_icon}
                                />
                            </div>
                            <div
                                className={
                                    styles.aboutus__right__block__item__title
                                }>
                                <h2
                                    className={
                                        styles.aboutus__right__block__item__header
                                    }>
                                    {t("homePage.about_us_brifly_info_2_1")}
                                </h2>
                                <p
                                    className={
                                        styles.aboutus__right__block__item__descr
                                    }>
                                    {t("homePage.about_us_brifly_info_2_2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageAboutUsBlock;
