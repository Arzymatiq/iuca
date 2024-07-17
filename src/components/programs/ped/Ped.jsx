import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";
import style from "../programs.module.css";
import it_img from "../../img/smaller_pink.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import Ped_first_img from "../../img/Ped_first_img.jpg";
import Ped_first_img_1 from "../../img/ped_first_img_1.jpg";

const Ped = () => {
    const [t, i18n] = useTranslation("global");

    const teacher_arr = [];

    const createTeacherObject = (index) => {
        return {
            teacher_name: t(`PED.teacher_${index}`),
            teacher_prof: t(`PED.teacher_${index}_prof`),
            teacher_gmail: t(`PED.teacher_${index}_gmail`),
            teacher_program: t(`PED.teacher_${index}_program`),
        };
    };

    const startIndex = 1;
    const endIndex = 7;

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
                        {t("PED.head_word")}
                    </div>
                </div>

                {/* Описание программы */}
                <div className={style.about_program}>
                    <div className={style.about_it_program_left_side}>
                        <p className={style.about_it_program}>
                            {t("PED.about_it_program")}
                        </p>
                        <br />
                        <p className={style.about_it_program_description}>
                            {t("PED.about_it_program_description")}
                        </p>
                    </div>
                    <div className={style.about_it_program_right_side}>
                        <img
                            src={Ped_first_img}
                            alt=""
                            className={style.about_it_program_image}
                        />
                    </div>
                </div>

                {/* Блок с целями программы */}
                <div className={style.banner}>
                    <h2 className={style.goals_title}>
                        {t("PED.program_goals")}
                    </h2>
                    <div className={style.container}>
                        <div className={style.container_center}>
                            <div className={style.card}>
                                <p className={style.h2}>
                                    {t("PED.program_goals_1")}
                                </p>
                            </div>
                            <div className={style.card}>
                                <p
                                    className={style.h2}
                                    style={{ color: "#274C5B" }}>
                                    {t("PED.program_goals_2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Блок с миссией программы */}
                <div className={style.mission_block}>
                    <div className={style.mission_program_left_side}>
                        <img
                            src={Ped_first_img_1}
                            alt=""
                            className={style.program_image}
                        />
                    </div>
                    <div className={style.mission_program_right_side}>
                        <p className={style.about_it_program}>
                            {t("PED.mission_of_program")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("PED.mission_of_program_desc")}
                        </p>
                    </div>
                </div>
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

export default Ped;
