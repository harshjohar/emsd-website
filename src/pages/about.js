/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "@/styles/pages/about.module.scss";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { getAssetName } from "@/util/githubPagesImagesUtil";
const collegeContent=[
    {
        heading:"Punjab Engineering College",
        content:"Punjab Engineering College (Deemed to be University)(PEC) having its roots in Lahore as Mugalpura Engineering College since 1921, moved to its presentcampus in 1953 as PEC affiliated to Panjab University.The institute became Deemed University in 2003 through a MHRD notification and rechristened as PEC University  of Technology in 2009. The institute has 146 acres  sprawling and pious campus and is house of Chandigarh College of Architecture also. The academic and administrative processes are similar to IITs in the country. With a history of 100 Years now, the institute has produced a number of alumni who have earned name and fame both for themselves and the institute.The institute offers 8 Undergraduate Programmes and 14 Post graduate Programmes in various disciplines of engineering and technology. After becoming University, the institute has also started PhD programme in various disciplines of engineering, science, management,humanities and social sciences. The admission to UG and PG programmes are made through national level examinations namely JEE (Mains) and GATE respectively. ",
        link:"https://www.pec.ac.in"
    },
    {
        heading:"National Agri-Food Biotechnology Institute",
        content:"National Agri-Food Biotechnology Institute (NABI) is the first Agri-Food Biotechnology Institute,established in India on 18th February 2010. The institute aims at catalyzing the transformation of Agrifood sector in India. The institute has the vision to be a nodal organization for knowledge generation andtranslational science leading to value-added products based on Agri-Food biotech innovations. The main research focus of NABI is to harness biotechnological tools in the area of Agriculture Biotechnology, Food and Nutritional Biotechnology so as to provide sustainable and novel solutions towards quality food and nutrition.",
        link:"https://nabi.res.in/"
    },
]
const prevEditionData = [
    {
        name: "IEEE INDISCON 2023",
        venue: "GSSS Institute of Engineering & Technology for Women, Mysuru",
        dates: "August 5-7, 2023",
        theme: "Computational Intelligence and Learning Systems",
        link: "https://ieeexplore.ieee.org/xpl/conhome/10269798/proceeding",
    },
    {
        name: "IEEE INDISCON 2022",
        venue: "KIIT Deemed to be University, Bhubaneswar",
        dates: "July 15-17, 2022",
        theme: "Impactful Innovations for Benefits of Society and Industry",
        link: "https://ieeexplore.ieee.org/xpl/conhome/9862528/proceeding",
    },
    {
        name: "IEEE INDISCON 2021",
        venue: "Visvesvaraya National Institute of Technology, Nagpur",
        dates: "August 27-29, 2021",
        link: "https://ieeexplore.ieee.org/xpl/conhome/9581282/proceeding",
        theme: "Impactful innovations for the benefit of industry and society",
    },
    {
        name: "IEEE INDISCON 2020",
        venue: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam",
        dates: "October 3-4, 2020",
        theme: "Smart and Sustainable Systems - Decade Ahead",
        link: "https://ieeexplore.ieee.org/xpl/conhome/9344449/proceeding",
    },
];
function CollegeAbout({content,heading,link}){
    return(<>
         <h1 className={styles.college_heading}>
                {heading}
            </h1>
            <div className={styles.college_description}>
                {content}{" "}
                <a
                    href={link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    website <FaExternalLinkAlt />{" "}
                </a>{" "}
                of the institute.
            </div>
        </>
    )
}
function About() {
    return (
        <PageLayout title={"About Indiscon 2024 | Punjab Engineering College"}>
            <h1 className={styles.heading}>About Conference</h1>
            <div className={styles.about}>
                <div className={styles.description}>
                    <p className={styles.about_text}>
                    The <strong>"Engineered Materials for Sustainable Development" </strong>conference addresses the urgent need for sustainable practices. It focuses on identifying, synthesizing, and applying engineered materials to enhance sustainability across various fields. The event promotes collaboration among experts, researchers, and industry leaders, providing a platform for sharing advancements. A pre-conference workshop explores applications in environmental and healthcare contexts. The conference encourages a comprehensive approach to sustainable solutions, fostering dialogue between researchers and industry professionals for effective commercialization. Global participation ensures diverse perspectives and international collaboration.
                    </p>
                    
                </div>
            </div>

            <div className={styles.spacer} />

            
             
             <div className={styles.section}>
                <h1 className={styles.section_heading}>
                    About Physics Department
                </h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                    The Department offers core and specialized courses in Physics to students. The Department runs an active research program in frontier areas of science and technology. The faculty members of the Department work in emerging areas relevant to Ferroelectric materials, Thermoelectric materials, Functional nanomaterials for a better environment, healthcare devices, solar cells, composites, supercapacitors, and biosensing, to name a few. Numerous funding agencies have funded outcomes-based research activities. The Department is going to start a new course in M. Tech. (Quantum, Materials & Technology) w.e.f. session 2024-2025 and aspires to produce a trained and skilled workforce in this emerging domain.
                    </p>{" "}
                </div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.spacer} />

            { collegeContent.map((e)=>{return( 
            <>
            <CollegeAbout heading={e.heading} content={e.content} link={e.link}/>
            <div className={styles.spacer} />
            </>
            )})}
            <div className={styles.spacer} />
           
            <div className={styles.college_photos}>
                <img
                    src={getAssetName("/assets/images/college/helicopter.jpeg")}
                    alt="Helicopter PEC"
                />
                <img
                    src={getAssetName("/assets/images/college/chowk.jpeg")}
                    alt="Helicopter PEC"
                />
            </div>

            <div className={styles.college_photos}>
             
                <img
                    src={getAssetName("/assets/images/college/NABI-building.jpg")}
                    alt="Helicopter PEC"
                style={{objectFit:"cover"}}
                />
            </div>
        </PageLayout>
    );
}

export default About;
