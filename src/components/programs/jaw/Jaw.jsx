import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";
import style from "../programs.module.css";
import it_img from "../../img/smaller_pink.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

const IT = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={style.programs}>
                {/* Верхний блок */}
                <div className={style.head_block}>
                    <div className={style.head_block_center}>
                        {t("Jaw.head_word")}
                    </div>
                </div>

                {/* Описание программы */}
                <div className={style.about_program}>
                    <div className={style.about_it_program_left_side}>
                        <p className={style.about_it_program}>
                            {t("Jaw.about_it_program")}
                        </p>
                        <br />
                        <p className={style.about_it_program_description}>
                            {t("Jaw.about_it_program_description")}
                        </p>
                    </div>
                    <div className={style.about_it_program_right_side}>
                        <img
                            src={it_img}
                            alt=""
                            className={style.about_it_program_image}
                        />
                    </div>
                </div>

                {/* Блок с целями программы */}
                <div className={style.banner}>
                    <h2 className={style.goals_title}>
                        {t("Jaw.program_goals")}
                    </h2>
                    <div className={style.container}>
                        <div className={style.container_center}>
                            <div className={style.card}>
                                <p className={style.h2}>
                                    {t("Jaw.program_goals_1")}
                                </p>
                            </div>
                            <div className={style.card}>
                                <p
                                    className={style.h2}
                                    style={{ color: "#274C5B" }}>
                                    {t("Jaw.program_goals_2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Блок с миссией программы */}
                <div className={style.mission_block}>
                    <div className={style.mission_program_left_side}>
                        <img
                            src={it_img}
                            alt=""
                            className={style.program_image}
                        />
                    </div>
                    <div className={style.mission_program_right_side}>
                        <p className={style.about_it_program}>
                            {t("Jaw.mission_of_program")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("Jaw.mission_of_program_desc")}
                        </p>
                    </div>
                </div>
                <Col>
                    <div className={style.result}>
                        <div className={style.result_center}>
                            <h2>{t("Jaw.result")}</h2>
                            <ul className={style.result_list}>
                                <li className={style.result_item}>
                                    {t("Jaw.result_1")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Jaw.result_2")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Jaw.result_3")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Jaw.result_4")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Jaw.result_5")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Jaw.result_6")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Jaw.result_7")}
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
                                        {t("Jaw.teacher_1")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_1_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_1_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_1_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_2")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_2_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_2_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_2_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_3")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_3_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_3_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_3_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_4")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_4_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_4_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_4_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_5")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_5_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_5_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_5_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_6")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_6_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_6_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_6_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_7")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_7_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_7_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_7_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_8")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_8_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_8_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_8_program")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("Jaw.teacher_9")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("Jaw.teacher_9_prof")}
                                    </p>
                                    <p className={style.teacher_gmail}>
                                        {t("Jaw.teacher_9_gmail")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("Jaw.teacher_9_program")}
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
