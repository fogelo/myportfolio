import React from "react";
import {InnerLayout, MainLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import styled from "styled-components";
import PrimaryButton from "../Components/PrimaryButton";

const ContactsPage = () => {
    return (
        <MainLayout>
            <Title title={"Contacts"} span={"contacts"}/>
            <InnerLayout>
                <ContactsPageStyled>
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

                    </div>
                </ContactsPageStyled>
            </InnerLayout>
        </MainLayout>
    );
};

const ContactsPageStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
  }
`

export default ContactsPage;