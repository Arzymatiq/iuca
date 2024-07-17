import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import iuca_icon from "../img/Logo (1).png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import pdf from "./pdf/toStudents/timeTable/time-table-fall-2023g.pdf";
import vacancies_pdf from "./pdf/vacancies/vacancies.docx";

function NavBar() {
    const [t, i18n] = useTranslation("global");
    const navigate = useNavigate();
    const handleChangeLanguages = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const handleNavigate = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    return (
        <>
            {["xxl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className={`${styles.navbar} ${
                        scrolled ? styles.scrolled : ""
                    } fixed-top`}>
                    <Container fluid className={styles.navbarContainer}>
                        <Navbar.Brand>
                            <img
                                src={iuca_icon}
                                width="75"
                                height="75"
                                className="d-inline-block align-top"
                                alt="IUCA logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            className={styles.navbarToggle}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    IUCA
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                                    <Nav.Link
                                        onClick={() => handleNavigate("/")}>
                                        {t("navBar.navBar_item_1")}
                                    </Nav.Link>
                                    <Nav.Link
                                        onClick={() =>
                                            handleNavigate("/admission")
                                        }>
                                        {t("navBar.navBar_item_2")}
                                    </Nav.Link>
                                    <NavDropdown
                                        title={t("navBar.navBar_item_3")}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleNavigate("/it")
                                            }>
                                            {t("navBar.navBar_item_3_1")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleNavigate("/ped")
                                            }>
                                            {t("navBar.navBar_item_3_2")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleNavigate("/tis")
                                            }>
                                            {t("navBar.navBar_item_3_3")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleNavigate("/tour")
                                            }>
                                            {t("navBar.navBar_item_3_4")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleNavigate("/Law")
                                            }>
                                            {t("navBar.navBar_item_3_5")}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown
                                        title={t("navBar.navBar_item_4")}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item
                                            target="_blank"
                                            href={pdf}>
                                            {t("navBar.navBar_item_4_1")}
                                        </NavDropdown.Item>

                                        <NavDropdown.Item
                                            target="_blank"
                                            href="https://docs.google.com/spreadsheets/d/1h9TetU-Kh6gF0y_chR2wGQQVmFrH74f3/edit#gid=300814917">
                                            {t("navBar.navBar_item_4_2")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            target="_blank"
                                            href="https://docs.google.com/spreadsheets/d/1N_I2dUPpSVdaRaZZ7iQp-rRgmtu3aKva/edit#gid=252578625">
                                            {t("navBar.navBar_item_4_3")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            target="_blank"
                                            href="https://my.iuca.kg/">
                                            {t("navBar.navBar_item_4_4")}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown
                                        title={t("navBar.navBar_item_5")}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item
                                            target="_blank"
                                            href={vacancies_pdf}>
                                            {t("navBar.navBar_item_5_1")}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleNavigate("/about_us")
                                            }>
                                            {t("navBar.navBar_item_5_2")}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown
                                        title={t("navBar.navBar_item_6")}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleChangeLanguages("en")
                                            }>
                                            eng
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleChangeLanguages("kr")
                                            }>
                                            kr
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            onClick={() =>
                                                handleChangeLanguages("ru")
                                            }>
                                            ru
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;
