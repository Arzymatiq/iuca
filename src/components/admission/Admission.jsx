import React from "react";
import { useTranslation } from "react-i18next";
import style from "./admission.module.css";
import admission_img from "../img/admission_second_img.jpg";
import { Col } from "react-bootstrap";
import kyrgiz_test from "../ui/pdf/tests/kyrgyz_lang_test.pdf";
import en_eo_test from "../ui/pdf/tests/eng_lang_test.pdf";
import math_test from "../ui/pdf/tests/math_test.pdf";
import en_tis_test from "../ui/pdf/tests/eng_tis_test.pdf";

const IT = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={style.programs}>
                {/* Верхний блок */}
                <div className={style.head_block}>
                    <div className={style.head_block_center}>
                        {t("admission.head_word")}
                    </div>
                </div>

                {/* Описание программы */}
                <div className={style.admission_brif}>
                    <div className={style.about_it_program_left_side}>
                        <p className={style.about_it_program}>
                            {t("admission.head_word_1")}
                        </p>
                    </div>
                </div>

                <Col>
                    <div className={style.result}>
                        <div className={style.result_center}>
                            <h2>{t("admission.payment")}</h2>
                            <ul className={style.result_list}>
                                <li className={style.result_item}>
                                    {t("admission.payment_1")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_2")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_3")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_4")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_5")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_6")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_7")}
                                </li>
                                <li className={style.result_item}>
                                    {t("admission.payment_8")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <div className={style.mission_block}>
                    <div className={style.mission_program_left_side}>
                        <img
                            src={admission_img}
                            alt="error :("
                            className={style.program_image}
                        />
                    </div>
                    <div className={style.mission_program_right_side}>
                        <p className={style.about_it_program}>
                            {t("admission.training_unit")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("admission.training_unit_1")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("admission.training_unit_2")}
                        </p>
                        <p className={style.about_it_program_description}>
                            {t("admission.training_unit_3")}
                        </p>
                    </div>
                </div>

                <div className={style.teacher_block}>
                    <div className={style.teacher_block_center}>
                        <ul className={style.teacher_list}>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("admission.direction_1")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("admission.direction_1_citizens")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("admission.direction_1_foreigner")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("admission.direction_2")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("admission.direction_2_citizens")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("admission.direction_2_foreigner")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("admission.direction_3")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("admission.direction_3_citizens")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("admission.direction_3_foreigner")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("admission.direction_4")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("admission.direction_4_citizens")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("admission.direction_4_foreigner")}
                                    </p>
                                </div>
                            </li>
                            <li className={style.teacher_item}>
                                <div className={style.teacher_left_side}>
                                    <h2 className={style.teacher_name}>
                                        {t("admission.direction_5")}
                                    </h2>
                                    <p className={style.teacher_prof}>
                                        {t("admission.direction_5_citizens")}
                                    </p>
                                </div>
                                <div className={style.teacher_right_side}>
                                    <p className={style.teacher_program}>
                                        {t("admission.direction_5_foreigner")}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.mock_tests}>
                    <div className={style.mock_tests_center}>
                        <h2 className={style.mock_tests_h2}>
                            {t("admission.mock_tests")}
                        </h2>
                        <ul className={style.mock_tests_list}>
                            <li className={style.mock_tests_item}>
                                <p className={style.mock_tests_name}>
                                    {t("admission.mock_tests_1")}
                                </p>
                                <button
                                    className={style.mock_tests_btn}
                                    onClick={() =>
                                        (window.location.href = kyrgiz_test)
                                    }>
                                    {t("admission.mock_tests_5")}
                                </button>
                            </li>
                            <li className={style.mock_tests_item}>
                                <p className={style.mock_tests_name}>
                                    {t("admission.mock_tests_2")}
                                </p>
                                <button
                                    className={style.mock_tests_btn}
                                    onClick={() =>
                                        (window.location.href = math_test)
                                    }>
                                    {t("admission.mock_tests_5")}
                                </button>
                            </li>
                            <li className={style.mock_tests_item}>
                                <p className={style.mock_tests_name}>
                                    {t("admission.mock_tests_3")}
                                </p>
                                <button
                                    className={style.mock_tests_btn}
                                    onClick={() =>
                                        (window.location.href = en_tis_test)
                                    }>
                                    {t("admission.mock_tests_5")}
                                </button>
                            </li>
                            <li className={style.mock_tests_item}>
                                <p className={style.mock_tests_name}>
                                    {t("admission.mock_tests_4")}
                                </p>
                                <button
                                    className={style.mock_tests_btn}
                                    onClick={() =>
                                        (window.location.href = en_eo_test)
                                    }>
                                    {t("admission.mock_tests_5")}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IT;
