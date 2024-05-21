import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel, Col } from "react-bootstrap";
import style from "../programs.module.css";
import it_img from "../../img/smaller_pink.jpg";
import it_first_img from "../../img/photo_5316951826781822805_y.jpg";
import it_mission_img from "../../img/it_mission_img.webp";
import programs_eo_img from "../../img/programs_eo_img_3.webp";
import { BsArrowRight } from "react-icons/bs";

const IT = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={style.programs}>
                {/* Верхний блок */}
                <div className={style.head_block}>
                    <div className={style.head_block_center}>
                        {t("It.head_word")}
                    </div>
                </div>

                {/* Описание программы */}
                <div className={style.about_program}>
                    <div className={style.about_it_program_left_side}>
                        <p className={style.about_it_program}>
                            {t("It.about_it_program")}
                        </p>
                        <br />
                        <p className={style.about_it_program_description}>
                            {t("It.about_it_program_description")}
                        </p>
                    </div>
                    <div className={style.about_it_program_right_side}>
                        <img
                            src={it_first_img}
                            alt=""
                            className={style.about_it_program_image}
                        />
                    </div>
                </div>

                {/* Блок с целями программы */}
                <div className={style.banner}>
                    <h2 className={style.goals_title}>
                        {t("It.program_goals")}
                    </h2>
                    <div className={style.container}>
                        <div className={style.container_center}>
                            <div className={style.card}>
                                <p className={style.h2}>
                                    {t("It.program_goals_1")}
                                </p>
                            </div>
                            <div className={style.card}>
                                <p
                                    className={style.h2}
                                    style={{ color: "#274C5B" }}>
                                    {t("It.program_goals_2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Блок с миссией программы */}
                <div className={style.mission_block}>
                    <div className={style.mission_program_left_side}>
                        <img
                            src={programs_eo_img}
                            alt=""
                            className={style.program_image}
                        />
                    </div>
                    <div className={style.mission_program_right_side}>
                        <p className={style.about_it_program}>
                            {t("It.mission_of_program")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("It.mission_of_program_desc")}
                        </p>
                    </div>
                </div>
                <Col>
                    <div className={style.result}>
                        <div className={style.result_center}>
                            <h2>{t("It.result")}</h2>
                            <ul className={style.result_list}>
                                <li className={style.result_item}>
                                    {t("It.result_1")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("It.result_2")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("It.result_3")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("It.result_4")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("It.result_5")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("It.result_6")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("It.result_7")}
                                    <BsArrowRight />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <div className={style.teacher_block}>
                    <div className={style.teacher_block_center}>
                        <ul className={style.teacher_list}>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_1")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_1_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_1_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_1_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_2")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_2_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_2_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_2_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_3")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_3_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_3_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_3_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_4")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_4_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_4_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_4_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_5")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_5_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_5_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_5_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_6")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_6_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_6_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_6_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_7")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_7_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_7_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_7_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_8")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_8_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_8_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_8_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_9")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_9_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_9_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_9_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_10")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_10_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_10_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_10_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("It.teacher_11")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("It.teacher_11_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("It.teacher_11_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("It.teacher_11_program")}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IT;
