import React from "react";
import ResumeCard from "./ResumeCard";
import {InnerLayout} from "../styles/Layouts";
import styled from "styled-components";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SmallTitle from "./SmallTitle";
import {useTranslation} from "react-i18next";

const Resume = () => {
    const work = <BusinessCenterOutlinedIcon/>
    const education = <SchoolOutlinedIcon/>

    const {t} = useTranslation()
    return (
        <InnerLayout>
            <ResumeStyled>
                <SmallTitle icon={work} title={t("resume_page.resume.experience.title")}/>
                <div className={"resume-block"}>
                    <ResumeCard years={"2014 - 2016"}
                                title={t("resume_page.resume.experience.exp1.position")}
                                subTitle={t("resume_page.resume.experience.exp1.company")}
                                description={t("resume_page.resume.experience.exp1.description")}
                    />
                    <ResumeCard years={"2016 - 2021"}
                                title={t("resume_page.resume.experience.exp2.position")}
                                subTitle={t("resume_page.resume.experience.exp2.company")}
                                description={t("resume_page.resume.experience.exp2.description")}
                    />
                </div>
                <SmallTitle icon={education} title={t("resume_page.resume.education.title")}/>
                <div className={"resume-block"}>
                    <ResumeCard years={"2008 - 2012"}
                                title={t("resume_page.resume.education.educ1.degree")}
                                subTitle={t("resume_page.resume.education.educ1.university")}
                                description={t("resume_page.resume.education.educ1.description")}
                    />
                    <ResumeCard years={"2012 - 2014"}
                                title={t("resume_page.resume.education.educ2.degree")}
                                subTitle={t("resume_page.resume.education.educ2.university")}
                                description={t("resume_page.resume.education.educ2.description")}
                    />
                    <ResumeCard years={"2014 - 2018"}
                                title={t("resume_page.resume.education.educ3.degree")}
                                subTitle={t("resume_page.resume.education.educ3.university")}
                                description={t("resume_page.resume.education.educ3.description")}
                    />
                </div>
            </ResumeStyled>
        </InnerLayout>

    );
};

const ResumeStyled = styled.div`
  .resume-block {
    border-left: 2px solid var(--font-light-color);;
    margin: 50px 0;
  }

`

export default Resume;