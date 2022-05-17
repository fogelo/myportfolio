import React from "react";
import Title from "../Components/Title";
import styled from "styled-components";
import PrimaryButton from "../Components/PrimaryButton";
import ContactCard from "../Components/ContactCard";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ContactsPage = () => {
    const phone = <PhoneOutlinedIcon fontSize={"large"}/>
    const email = <EmailOutlinedIcon fontSize={"large"}/>
    const address = <LocationOnOutlinedIcon fontSize={"large"}/>
    return (
        <ContactsPageStyled>
            <Title title={"Contacts"} span={"contacts"}/>
            <div className={"contacts"}>
                <div className="left-content">
                    <h4 className={"contact-title"}>Get In Touch</h4>
                    <form className={"form"}>
                        <div className={"form-field"}>
                            <label htmlFor="name">Enter your name*</label>
                            <input type="text" id={"name"}/>
                        </div>
                        <div className={"form-field"}>
                            <label htmlFor="email">Enter your email*</label>
                            <input type="email" id={"email"}/>
                        </div>
                        <div className={"form-field"}>
                            <label htmlFor="subject">Enter your subject*</label>
                            <input type="subject" id={"subject"}/>
                        </div>
                        <div className={"form-field"}>
                            <label htmlFor="text-area">Enter your subject*</label>
                            <textarea name="textarea" id={"text-area"} cols={30} rows={10}/>
                        </div>
                        <div className={"form-field"}>
                            <PrimaryButton title={"send mail"}/>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactCard title={"Phone"}
                                 icon={phone}
                                 contact1={"+012-3456-7891"}
                                 contact2={"+012-3456-7892"}/>
                    <ContactCard title={"Email"} icon={email}
                                 contact1={"admin.sitename@example.com"}
                                 contact2={"info.sitename@example.com"}
                    />
                    <ContactCard title={"Address"}
                                 icon={address}
                                 contact1={"121 King Street, Melbourne, Victoria 3000, Australia"}
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
          font-size: .74rem;
          height: 50px;
          padding: 0 15px;
          width: 100%;
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
          font-size: .74rem;
          padding: 10px 15px;
          width: 100%;
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