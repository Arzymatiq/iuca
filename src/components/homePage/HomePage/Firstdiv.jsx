import React from "react";
import first_div_image from "./images/first_div.png";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles/first__div.module.css"; // Используем модуль CSS
import homePage_headerimg from "../../img/homePage_headerimg.jpg";

const Firstdiv = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <div className={styles.header}>
                <Container>
                    <Row className={styles.Row}>
                        <Col md={6} className={styles.left__block}>
                            <p className={styles.natural_100}>
                                {t("homePage.first_words_1")}
                            </p>
                            <h1 className={styles.first__div_h1}>
                                {t("homePage.first_words")}
                            </h1>
                            <h1 className={styles.first__div_h1}>
                                {t("homePage.first_words_2")}
                            </h1>
                        </Col>
                        <Col md={6} className={styles.right__block_img}></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Firstdiv;
