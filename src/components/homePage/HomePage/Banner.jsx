import React from "react";
import style from "./styles/banner.module.css";
import { useTranslation } from "react-i18next";
import homepage_mission_img from "../../img/CAM12629.jpg";
import homePage_goals_img from "../../img/homePage_goals_img.JPG";

const BannerComp = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className={style.banner}>
            <div className={style.container}>
                <div className={style.container_center}>
                    <div className={style.card}>
                        <p className={style.natural}>{t("homePage.goals")}</p>
                        <h2 className={style.h2}>{t("homePage.goals_1")}</h2>
                        <img
                            className={style.banner_img}
                            src={homePage_goals_img}
                            alt=""
                        />
                    </div>
                    <div className={style.card}>
                        <p
                            className={style.natural}
                            style={{ color: "#274c5b" }}>
                            {t("homePage.mission")}
                        </p>
                        <h2 className={style.h2} style={{ color: "#274c5b" }}>
                            {t("homePage.mission_1")}
                        </h2>
                        <img
                            className={style.banner_img}
                            src={homepage_mission_img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerComp;
