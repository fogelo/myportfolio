import React, {FC, ReactNode} from "react";
import styled from "styled-components";


type ContactCardPT = {
    icon: ReactNode | string
    title: string
    contact1?: string
    contact2?: string
}

const ContactCard: FC<ContactCardPT> = ({icon, title, contact1, contact2}) => {
    return (
        <ContactCardStyled>
            <div className={"icon"}>{icon}</div>
            <div className="contacts">
                <h5>{title}</h5>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactCardStyled>
    );
};

const ContactCardStyled = styled.div`
  background-color: var(--background-dark-color-2);
  display: flex;
  padding: 30px;
  min-height: 160px;

  &:not(:first-child) {
    margin-top: 30px;
  }


  .icon {
    min-width: 70px;
    height: 70px;
    border: 1px solid var(--border-color);
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contacts {
    h5 {
      color: var(--white-color);
      padding-bottom: 5px;
    }

    p {
      font-size: 1rem;
      padding-bottom: 5px;
    }
  }
`

export default ContactCard;