import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import global_en from "./translade/en/global.json";
import global_kr from "./translade/kr/global.json";
import global_ru from "./translade/ru/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        en: {
            global: global_en,
        },
        kr: {
            global: global_kr,
        },
        ru: {
            global: global_ru,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </BrowserRouter>
);
