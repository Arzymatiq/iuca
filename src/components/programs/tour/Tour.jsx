import React from "react";
import { useTranslation } from "react-i18next";
import style from "../programs.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Col } from "react-bootstrap";
import Tour_img from "../../img/tour1.jpg";
import Tour_img_2 from "../../img/kyrgyzstan-1200x800.jpg";

const Tour = () => {
    const [t, i18n] = useTranslation("global");

    const teacher_arr = [];

    const createTeacherObject = (index) => {
        return {
            teacher_name: t(`Tour.teacher_${index}`),
            teacher_prof: t(`Tour.teacher_${index}_prof`),
            teacher_gmail: t(`Tour.teacher_${index}_gmail`),
            teacher_program: t(`Tour.teacher_${index}_program`),
        };
    };

    const startIndex = 1;
    const endIndex = 5;

    for (let i = startIndex; i <= endIndex; i++) {
        const newTeacherObject = createTeacherObject(i);
        teacher_arr.push(newTeacherObject);
    }

    return (
        <>
            <div className={style.programs}>
                {/* Верхний блок */}
                <div className={style.head_block}>
                    <div className={style.head_block_center}>
                        {t("Tour.head_word")}
                    </div>
                </div>

                {/* Описание программы */}
                <div className={style.about_program}>
                    <div className={style.about_it_program_left_side}>
                        <p className={style.about_it_program}>
                            {t("Tour.about_it_program")}
                        </p>
                        <br />
                        <p className={style.about_it_program_description}>
                            {t("Tour.about_it_program_description")}
                        </p>
                    </div>
                    <div className={style.about_it_program_right_side}>
                        <img
                            src={Tour_img}
                            alt=""
                            className={style.about_it_program_image}
                        />
                    </div>
                </div>

                {/* Блок с целями программы */}
                <div className={style.banner}>
                    <h2 className={style.goals_title}>
                        {t("Tour.program_goals")}
                    </h2>
                    <div className={style.container}>
                        <div className={style.container_center}>
                            <div className={style.card}>
                                <p className={style.h2}>
                                    {t("Tour.program_goals_1")}
                                </p>
                            </div>
                            <div className={style.card}>
                                <p
                                    className={style.h2}
                                    style={{ color: "#274C5B" }}>
                                    {t("Tour.program_goals_2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Блок с миссией программы */}
                <div className={style.mission_block}>
                    <div className={style.mission_program_left_side}>
                        <img
                            src={Tour_img_2}
                            alt=""
                            className={style.program_image}
                        />
                    </div>
                    <div className={style.mission_program_right_side}>
                        <p className={style.about_it_program}>
                            {t("Tour.mission_of_program")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("Tour.mission_of_program_desc")}
                        </p>
                    </div>
                </div>
                <Col>
                    <div className={style.result}>
                        <div className={style.result_center}>
                            <h2>{t("Tour.result")}</h2>
                            <ul className={style.result_list}>
                                <li className={style.result_item}>
                                    {t("Tour.result_1")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Tour.result_2")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Tour.result_3")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Tour.result_4")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Tour.result_5")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Tour.result_6")}
                                    <BsArrowRight />
                                </li>
                                <li className={style.result_item}>
                                    {t("Tour.result_7")}
                                    <BsArrowRight />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <div className={style.teacher_block}>
                    <div className={style.teacher_block_center}>
                        <ul className={style.teacher_list}>
                            {teacher_arr.map((ar, index) => (
                                <li key={index} className={style.teacher_item}>
                                    <div className={style.teacher_left_side}>
                                        <h2 className={style.teacher_name}>
                                            {ar.teacher_name}
                                        </h2>
                                        <p className={style.teacher_prof}>
                                            {ar.teacher_prof}
                                        </p>
                                        <p className={style.teacher_gmail}>
                                            {ar.teacher_gmail}
                                        </p>
                                    </div>
                                    <div className={style.teacher_right_side}>
                                        <p className={style.teacher_program}>
                                            {ar.teacher_program}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tour;
