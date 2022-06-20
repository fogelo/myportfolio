import React from "react";
import Title from "../Components/Title";
import styled from "styled-components";
import ContactCard from "../Components/ContactCard";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {Trans, useTranslation} from "react-i18next";
import PrimaryButtonSubmit from "../Components/PrimaryButtonSubmit";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodewarsIcon from "../Components/icons/CodewarsIcon";

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
            <div className={"icons"}>
                <a href={"https://t.me/ant_or"}
                   className="icon i-telegram">
                    <TelegramIcon/>
                </a>
                <a href={"https://github.com/fogelo"}
                   className="icon i-github">
                    <GitHubIcon/>
                </a>
                <a href={"https://www.linkedin.com/in/anton-orlov-375953229/"}
                   className="icon i-linkedIn">
                    <LinkedInIcon sx={{fontSize: "27px"}}/>
                </a>
                {/*<a href={"https://vk.com/id715020392"}*/}
                {/*   className="icon i-vk">*/}
                {/*    <Icon32LogoVk/>*/}
                {/*</a>*/}
                <a href={"https://www.codewars.com/users/orlovAnton"}
                   className="icon i-codewars">
                    <CodewarsIcon/>
                </a>
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

  .icons {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    position: relative;
    z-index: 1000;
    width: 100%;
    .icon {
      border: 2px solid var(--border-color);
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all .3s ease-in-out;
      color: var(--font-light-color);


      &:hover {
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
      }
    }

    .i-github:hover {
      border: 2px solid #5F4687;
      color: #5F4687;
    }
    //.i-linkedIn:hover {
    //  border: 2px solid rgb(10, 102, 194);
    //  color: rgb(10, 102, 194);
    //}

    .i-codewars {
      svg {
        color: var(--font-light-color);
        fill: var(--font-light-color);
      }
    }

    .i-codewars:hover {
      border: 2px solid #A33F29;

      svg {
        color: #A33F29;
        fill: #A33F29;
      }
    }
  }
`

export default ContactsPage;