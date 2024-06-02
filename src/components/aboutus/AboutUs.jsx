import React from "react";
import style from "./aboutUs.module.css";
import { useTranslation } from "react-i18next";
import aboutus from "../img/homePage_headerimg_2.jpg";
import aboutus_2 from "../img/photo_5206662718797498836_y.jpg";

const AboutUs = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div>
            <div className={style.aboutus_first_div}>
                <h2>{t("Aboutus.main_info_title")}</h2>
            </div>
            <div className={style.aboutus_main}>
                <div className={style.aboutus_main_center}>
                    <div className={style.about_us_left_side}>
                        <p className={style.about_us_description}>
                            {t("Aboutus.main_info_1")}
                        </p>
                    </div>
                    <div className={style.about_us_right_side}>
                        <img
                            src={aboutus}
                            alt=""
                            className={style.about_us_image}
                        />
                    </div>
                </div>
                <div className={style.mission_block}>
                    <div className={style.mission_about_us_left_side}>
                        <img
                            src={aboutus_2}
                            alt=""
                            className={style.about_us_image}
                        />
                    </div>
                    <div className={style.mission_about_us_right_side}>
                        <p className={style.about_us_description}>
                            {t("Aboutus.main_info_2")}
                        </p>
                    </div>
                </div>
                <div className={style.advantage}>
                    <div className={style.advantage_center}>
                        <div className={style.advantage_left_side}>
                            <p className={style.advantage_P}>
                                {t("Aboutus.advantage")}
                            </p>
                        </div>
                        <div className={style.advantage_right_side}>
                            <ul className={style.advantage_list}>
                                <li className={style.advantage_item}>
                                    <p className={style.advantage_item_p}>
                                        {t("Aboutus.advantage_1")}
                                    </p>
                                </li>
                                <li className={style.advantage_item}>
                                    <p className={style.advantage_item_p}>
                                        {t("Aboutus.advantage_2")}
                                    </p>
                                </li>
                                <li className={style.advantage_item}>
                                    <p className={style.advantage_item_p}>
                                        {t("Aboutus.advantage_3")}
                                    </p>
                                </li>
                                <li className={style.advantage_item}>
                                    <p className={style.advantage_item_p}>
                                        {t("Aboutus.advantage_4")}
                                    </p>
                                </li>
                                <li className={style.advantage_item}>
                                    <p className={style.advantage_item_p}>
                                        {t("Aboutus.advantage_5")}
                                    </p>
                                </li>
                                <li className={style.advantage_item}>
                                    <p className={style.advantage_item_p}>
                                        {t("Aboutus.advantage_6")}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.banner}>
                    <div className={style.container}>
                        <div className={style.container_center}>
                            <div className={style.card}>
                                <p className={style.natural}>
                                    {t("homePage.goals")}
                                </p>
                                <h2 className={style.description}>
                                    {t("Aboutus.goals")}
                                </h2>
                            </div>
                            <div className={style.card}>
                                <p
                                    className={style.natural}
                                    style={{ color: "#274c5b" }}>
                                    {t("homePage.mission")}
                                </p>
                                <h2
                                    className={style.description}
                                    style={{ color: "#274C5B" }}>
                                    {t("Aboutus.mission")}
                                </h2>
                            </div>
                            <div className={style.card}>
                                <p
                                    className={style.natural}
                                    style={{ color: "#274c5b" }}>
                                    {t("homePage.worth")}
                                </p>
                                <h2
                                    className={style.description}
                                    style={{ color: "#274C5B" }}>
                                    {t("Aboutus.worth")}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
