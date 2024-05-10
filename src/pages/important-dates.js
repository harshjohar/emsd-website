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
        date: "May 31, 2024",
        description: "",
        icon: <LaptopMac />,
    },
    {
        title: "Authors will recieve notification of acceptance of abstract on their email",
        date: "",
        description: "",
        icon: <MdChecklist />,
    },
    {
        title: " Last date for early bird registration",
        date: "Upto June 15, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date of registration with (Late fees of Rs 500)",
        date: "June 25, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Pre-Conference Workshop",
        date: "July 24, 2024",
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
        <PageLayout title={"Important Dates | EMSD 2024"}>
            <div>
                <h1 className={styles.heading}>Timeline</h1>
                <VerticalTimeline
                    lineColor="rgb(86, 162, 140)"
                    animate={true}
                    layout="1-column-left"
                >
                    {events.map((event, i) => {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "rgba(173, 239, 223, 0.4)",
                                    backdropFilter: "blur( 8px )",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 0, 0, 0, 0.18 )",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(173, 239, 223, 0.4)",
                                    position: "relative",
                                    zIndex: "0",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  rgb(86, 162, 140)",
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
