import React from "react";
import styles from "./styles/Slider.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import homePage_it_icon from "../../img/homePage_it_icon.jpg";
import homePage_law_icon from "../../img/homePage_law_icon.jpg";
import homePage_ped_icon from "../../img/homePage_ped_icon.jpg";
import homePage_tis_icon from "../../img/homePage_tis_icon.jpg";
import homePage_tour_icon from "../../img/homePage_tour_icon.jpg";

const Block = () => {
    const [t, i18n] = useTranslation("global");

    const navigate = useNavigate("");

    return (
        <div className={styles.blocks}>
            <div className={styles.block} onClick={() => navigate("/it")}>
                <img
                    src={homePage_it_icon}
                    alt="Juice"
                    className={styles.image}
                />
                <div className={styles.text}>
                    <p>{t("navBar.navBar_item_3_1")}</p>
                </div>
            </div>
            <div className={styles.block} onClick={() => navigate("/ped")}>
                <img
                    src={homePage_ped_icon}
                    alt="Food"
                    className={styles.image}
                />
                <div className={styles.text}>
                    <p>{t("navBar.navBar_item_3_2")}</p>
                </div>
            </div>
            <div className={styles.block} onClick={() => navigate("/tour")}>
                <img
                    src={homePage_tis_icon}
                    alt="Cookies"
                    className={styles.image}
                />
                <div className={styles.text}>
                    <p>{t("navBar.navBar_item_3_3")}</p>
                </div>
            </div>
            <div className={styles.block} onClick={() => navigate("/jaw")}>
                <img
                    src={homePage_tour_icon}
                    alt="Cookies"
                    className={styles.image}
                />
                <div className={styles.text}>
                    <p>{t("navBar.navBar_item_3_4")}</p>
                </div>
            </div>
            <div className={styles.block} onClick={() => navigate("/tis")}>
                <img
                    src={homePage_law_icon}
                    alt="Cookies"
                    className={styles.image}
                />
                <div className={styles.text}>
                    <p>{t("navBar.navBar_item_3_5")}</p>
                </div>
            </div>
        </div>
    );
};

export default Block;
