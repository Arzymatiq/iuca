import React from "react";
import Firstdiv from "./HomePage/Firstdiv";
import BannerComp from "./HomePage/Banner";
import HomePageAboutUsBlock from "./HomePage/HomePageAboutUsBlock";
import Slider from "./HomePage/Slider";

const HomePage = () => {
    return (
        <>
            <Firstdiv />
            <BannerComp />
            <HomePageAboutUsBlock />
            <Slider />
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: "100%",
                    marginTop: "100px",
                }}>
                <a
                    href="https://yandex.ru/maps/105948/tokmok/?utm_medium=mapframe&utm_source=maps"
                    style={{
                        color: "#eee",
                        fontSize: "12px",
                        position: "absolute",
                        top: "0px",
                        left: "10px", // Добавляем отступ слева для мобильных устройств
                    }}>
                    Токмак
                </a>
                <a
                    href="https://yandex.ru/maps/105948/tokmok/house/Y0wYdA5lTUEOQFpofXR1d3liYQ==/?ll=75.296283%2C42.846459&utm_medium=mapframe&utm_source=maps&z=18.5"
                    style={{
                        color: "#eee",
                        fontSize: "12px",
                        position: "absolute",
                        top: "14px",
                        left: "10px", // Добавляем отступ слева для мобильных устройств
                    }}>
                    Комсомольская улица, 141А — Яндекс Карты
                </a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=75.296283%2C42.846459&mode=whatshere&whatshere%5Bpoint%5D=75.295661%2C42.846549&whatshere%5Bzoom%5D=17&z=18.5"
                    width="100%"
                    height="400"
                    frameborder="1"
                    allowfullscreen="true"
                    style={{ position: "relative", maxWidth: "100%" }}></iframe>
            </div>
        </>
    );
};

export default HomePage;
