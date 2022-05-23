import React from "react";
import Title from "../Components/Title";
import styled from "styled-components";
import ContactCard from "../Components/ContactCard";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {Trans, useTranslation} from "react-i18next";
import PrimaryButtonSubmit from "../Components/PrimaryButtonSubmit";

const ContactsPage = () => {
    const phone = <PhoneOutlinedIcon fontSize={"large"}/>
    const email = <EmailOutlinedIcon fontSize={"large"}/>
    const address = <LocationOnOutlinedIcon fontSize={"large"}/>

    const {t} = useTranslation()

    return (
        <ContactsPageStyled>
            <Title title={t("contacts_page.title")} span={"contacts"}/>
            <div className={"contacts"}>
                <div className="left-content">
                    <h4 className={"contact-title"}>
                        <Trans i18nKey={"contacts_page.subtitle"}>Get In Touch</Trans>
                    </h4>
                    <form className={"form"} name="contact" method="POST" data-netlify={"true"}>
                        <input type="hidden" name={"form-name"} value={"contact"}/>
                        <div className={"form-field"}>
                            <label htmlFor="name">
                                <Trans i18nKey={"contacts_page.form_labels.name"}>Enter your name*</Trans>
                            </label>
                            <input type="text" name={"name"} id={"name"}/>
                        </div>
                        <div className={"form-field"}>
                            <label htmlFor="email">
                                <Trans i18nKey={"contacts_page.form_labels.email"}>Enter your email*</Trans>
                            </label>
                            <input type="email" name={"email"} id={"email"}/>
                        </div>
                        <div className={"form-field"}>
                            <label htmlFor="subject">
                                <Trans i18nKey={"contacts_page.form_labels.subject"}>Enter your subject*</Trans>
                            </label>
                            <input type="text" name={"subject"} id={"subject"}/>
                        </div>
                        <div className={"form-field"}>
                            <label htmlFor="text-area">
                                <Trans i18nKey={"contacts_page.form_labels.message"}>Enter your message*</Trans>
                            </label>
                            <textarea name="message" id={"text-area"} cols={30} rows={10}/>
                        </div>
                        <div className={"form-field"}>
                            <PrimaryButtonSubmit title={t("contacts_page.submit_btn")}/>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactCard title={t("contacts_page.cont1.title")}
                                 icon={phone}
                                 contact1={"+7 923-317-54-39"}/>
                    <ContactCard title={t("contacts_page.cont2.title")} icon={email}
                                 contact1={"oantons@yandex.ru"}
                                 contact2={"ooantonss@gmail.com"}
                    />
                    <ContactCard title={t("contacts_page.cont3.title")}
                                 icon={address}
                                 contact1={t("contacts_page.cont3.subtitle")}
                    />
                </div>
            </div>
        </ContactsPageStyled>
    );
};

const ContactsPageStyled = styled.section`

  .contacts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    padding: 4rem 0;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }

    .left-content {
      color: var(--font-light-color);

      .contact-title {
        font-size: 1.71rem;
        line-height: 2.43rem;
        color: var(--white-color);
      }

      .form-field {
        position: relative;
        width: 100%;
        margin-top: 30px;

        input {
          outline: none;
          background: transparent;
          border: 1px solid var(--border-color);
          font-size: .94rem;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: var(--font-light-color)
        }

        label {
          background-color: var(--background-dark-color);
          font-size: .74rem;
          left: 15px;
          padding: 0 10px;
          pointer-events: none;
          position: absolute;
          top: -11px;
        }

        textarea {
          background: transparent;
          outline: none;
          border: 1px solid var(--border-color);
          font-size: .94rem;
          padding: 10px 15px;
          width: 100%;
          color: var(--font-light-color)
        }

        a {
          color: white;
        }
      }
    }
  }

  .right-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export default ContactsPage;