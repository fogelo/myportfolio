import React from "react";
import ResumeCard from "./ResumeCard";
import {InnerLayout} from "../styles/Layouts";
import styled from "styled-components";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SmallTitle from "./SmallTitle";

const Resume = () => {
    const work = <BusinessCenterOutlinedIcon/>
    const education = <SchoolOutlinedIcon/>
    return (
        <InnerLayout>
            <ResumeStyled>
                <SmallTitle icon={work} title={"Working Experience"}/>
                <div className={"resume-block"}>
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                </div>
                <SmallTitle icon={education} title={"Educational Qualifications"}/>
                <div className={"resume-block"}>
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
                    />
                    <ResumeCard years={"2016 - 2018"}
                                title={"Frontend Web Developer"}
                                subTitle={"Abc Company"}
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}
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