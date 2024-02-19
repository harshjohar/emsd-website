import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import PageLayout from "@/components/layout/PageLayout";
import Marquee from "react-fast-marquee";
import { getAssetName } from "@/util/githubPagesImagesUtil";
import { ANNOUNCEMENTS } from "@/data/marquee";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LaptopMac } from "@mui/icons-material";
import { BiTrophy } from "react-icons/bi";
import "react-vertical-timeline-component/style.min.css";
const events = [
  {
      title: "Abstract Submission",
      date: "April 10, 2024",
      description: "",
      icon: <LaptopMac />,
  },
  {
      title: "Notification of Acceptance",
      date: "April 15, 2024",
      description: "",
      icon: <BiTrophy />,
  },
  {
      title: "Early bird Registration",
      date: "May 20, 2024",
      description: "",
      icon: <BiTrophy />,
  },
  {
      title:"Last date of registration",
      date:"June 20, 2024",
      description:"",
      icon:<BiTrophy/>,
  },
  {
      title: "Conference dates",
      date: "July 24-26, 2024",
      description: "",
      icon: <BiTrophy />,
  },
];
export default function Home() {
  return <>
            <PageLayout
                title={"EMSD 2024 | Punjab Engineering College |National Agri-Food Biotechnology Institute"}
                description={
                    "The 'Engineered Materials for Sustainable Development' conference addresses the urgent need for sustainable practices. It focuses on identifying,enhance sustainability across various fields. The event synthesizing, and applying engineered materials to promotes collaboration among experts, researchers,and industry leaders, providing a platform for sharing advancements. A pre-conference workshop explores applications in environmental and healthcare contexts.The conference encourages a comprehensive approach to sustainable solutions, fostering dialogue between researchers and industry professionals for effective commercialization. Global participation ensures diverse perspectives and international collaboration."
                }
            >
                <Marquee className={styles.marquee_container}>
                    {ANNOUNCEMENTS.map((an, i) => (
                        <p key={i} className={styles.marquee}>
                            {an}
                        </p>
                    ))}
                </Marquee>
                <main
                    className={styles.main}
                    style={{
                        backgroundImage: `url(${getAssetName(
                            "/assets/images/college/all-clg-1.png"
                        )})`,
                        // height: "80vh",
                        // width: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className={styles.hero_box}>
                        <p className={styles.sub_heading}>
                            International Conference on Engineered Materials for Sustainable Development 
                        </p>
                        <h1>
                            EMSD <span>2024</span>
                        </h1>
                        <div
                            style={{
                                borderBottom: "4px solid #000",
                                width: "50px",
                            }}
                        />
                    </div>
                    <h2 className={styles.theme} style={{fontSize:"3vw",fontWeight:400}}>
                        <i>Jointly organised by </i><strong>PEC & NABI</strong>
                    </h2>
                    <div className={styles.venue_details}>
                        <div className={styles.dates}>
                            <h3>Conference Dates</h3>
                            <p>July 24-26, 2024</p>
                        </div>
                        <div className={styles.venue}>
                            <h3>Venue</h3>
                            <p>Punjab Engineering College</p>
                            <p>(Deemed to be University)</p>
                            <p> Sector 12, Chandigarh, India</p>
                        </div>
                    </div>
                </main>

                <div className={styles.info}>
                    <p>
                    The "Engineered Materials for Sustainable Development" conference addresses the urgent need for sustainable practices. It focuses on identifying,enhance sustainability across various fields. The event synthesizing, and applying engineered materials to promotes collaboration among experts, researchers,and industry leaders, providing a platform for sharing advancements. A pre-conference workshop explores applications in environmental and healthcare contexts.The conference encourages a comprehensive approach to sustainable solutions, fostering dialogue between researchers and industry professionals for effective commercialization. Global participation ensures diverse perspectives and international
                    collaboration.

                    </p>
                </div>

                <div className={styles.banner}>
                    <VerticalTimeline
                        lineColor="rgb(48, 111, 160)"
                        animate={false}
                    >
                        {events.map((event, i) => {
                            return (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: "rgba(48, 111, 160, 0.2)",
                                        backdropFilter: "blur( 8px )",
                                        boxShadow:
                                            "0 8px 32px 0 rgba( 0, 0, 0, 0.18 )",
                                        borderRadius: "10px",
                                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                                        position: "relative",
                                        zIndex: "0",
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={event.date}
                                    dateClassName={styles.date}
                                    iconStyle={{
                                        background: "rgb(2,36,61,0.3)",
                                        color: "#fff",
                                        backdropFilter: "blur(8px)",
                                    }}
                                    icon={event.icon}
                                >
                                    <p className={styles.description}>
                                        {event.title}
                                    </p>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>

                    <hr className={styles.divider} />

                    <div className={styles.paper_wrapper}>
                        <div className={styles.register}>
                            <a
                                href="\EMSD 2024 CHD.pdf"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Call for Papers</button>
                            </a>
                        </div>
                        <div className={styles.register}>
                            <a
                                href="#"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Submit your paper</button>
                            </a>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
  ;
}
