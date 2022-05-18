import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle"
import {BrowserRouter, HashRouter} from "react-router-dom";
import {initReactI18next} from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
    // detect user language i18next-browser-languagedetector
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // json server i18next-http-backend
    .use(HttpApi)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        // debug: true,
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // resources: {
        //     en: {
        //         translation: {
        //             "home-page": "<0>Hi I'm <1>Orlov Anton</1></0>"
        //         }
        //     },
        //     ru: {
        //         translation: {
        //             "home-page": "<0>Привет меня зовут <1>Антон</1></0>"
        //         }
        //     }
        // },
        detection: {
            order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
            caches: ["cookie"]
        },
        backend: {
            loadPath: "assets/locales/{{lng}}/trans.json",
        },
    });


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <Suspense fallback={<h1>Loading profile...</h1>}>
            <GlobalStyle/>
            <HashRouter>
                <App/>
            </HashRouter>
        </Suspense>

    </>
);

