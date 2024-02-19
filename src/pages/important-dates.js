import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineForm } from "react-icons/ai";
import { Handshake, LaptopMac } from "@mui/icons-material";
import { MdChecklist } from "react-icons/md";
import { BiTrophy } from "react-icons/bi";
import styles from "@/styles/pages/importantdates.module.scss";

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
        icon: <MdChecklist />,
    },
    {
        title: " Last date for early bird registration",
        date: "Upto May 20, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date of registration with (Late fees of Rs 500)",
        date: "June 20, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Conference dates",
        date: "July 24-26, 2024",
        description: "",
        icon: <BiTrophy />,
    },
];

function ImportantDates() {
    return (
        <PageLayout title={"Important Dates | Indiscon 2024 "}>
            <div>
                <h1 className={styles.heading}>Timeline</h1>
                <VerticalTimeline lineColor="rgb(48, 111, 160)">
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
                                    borderRight: "7px solid  rgb(33, 150, 243)",
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
                                <h3 className={styles.description}>
                                    {event.title}
                                </h3>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </PageLayout>
    );
}

export default ImportantDates;
