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
import styles from "@/styles/Home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
        icon: <BiTrophy />,
    },
    {
        title: "Early bird Registration",
        date: "upto June 15, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date of registration with (Late fee of Rs 500)",
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

const pre_speaker = [
    {
        name: "Dr. Reinhard Miller",
        image: "/assets/speakers/reinhard.png",
        designation: "TU Darmstadt, Germany",
        // link: "https://research.manchester.ac.uk/en/persons/a.song",
    },
    {
        name: "Professor Dong Kwon Lim",
        image: "/assets/speakers/dongkwon.png",
        designation: "Korea University, South Korea",
        // link: "https://didattica.uniroma2.it/docenti/curriculum/3746-Gian-Carlo-Cardarilli/",
    },
    {
        name: "Professor Ajeet Kaushik",
        image: "/assets/speakers/akaushik.png",
        designation: "Florida Polytechnic University, USA ",
        // link: "https://www.linkedin.com/in/dr-ahmad-atieh-a9586a62/?originalSubdomain=ca",
    },
];

const Banner = () => {
    return (
        <div>
            <div className={styles.hero_box}>
                <p className={styles.sub_heading}>
                    International Conference on Engineered Materials for
                    Sustainable Development
                </p>
                <h1>
                    EMSD <span>2024</span>
                </h1>
            </div>
        </div>
    );
};
export default function Home() {
    return (
        <>
            <PageLayout
                title={
                    "EMSD 2024 | Punjab Engineering College |National Agri-Food Biotechnology Institute"
                }
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
                <HeroSection />

                <div className={styles.pre_conference_container}>
                    <p className={styles.sub_heading}>
                        Pre Conference Workshop on{" "}
                    </p>
                    <h1 className={styles.heading}>
                        &ldquo;Engineered Materials for Environmental and
                        Healthcare Applications&rdquo;
                    </h1>
                    <h3 className={styles.date}>JULY 24</h3>
                    <p className={styles.highlight}>
                        <u>Workshop Highlight</u> : Expert talk on{" "}
                        <strong>
                            “Achieving High Impact Factor Journal Publications”
                        </strong>{" "}
                        by Dr. Reinhard Miller
                    </p>

                    <p className={styles.sub_heading}>
                        <u>Workshop Speakers</u>
                    </p>

                    <div className={styles.heads}>
                        <div className={styles.cards}>
                            {pre_speaker.map((head, i) => {
                                const image =
                                    head.image.length != 0
                                        ? getAssetName(head.image)
                                        : getAssetName("/assets/logos/1.png");
                                return (
                                    <div className={`${styles.card}`} key={i}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            height={200}
                                            width={200}
                                            src={image}
                                            alt={head.name}
                                        />
                                        <p className={styles.name}>
                                            {head.name}
                                        </p>
                                        <p className={styles.designation}>
                                            {head.designation}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.banner}>
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
                                href="https://forms.gle/7geEA5CVVYVK6Ujz8"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Submit your Abstract</button>
                            </a>
                        </div>
                    </div>
                    <hr className={styles.divider} />
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
                                        borderRight:
                                            "7px solid  rgb(86, 162, 140)",
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
                </div>
            </PageLayout>
        </>
    );
}
const HeroSection = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.up_left}>
                    <h1 className={styles.heading}>
                        International Conference on Engineered Materials for
                        Sustainable Development
                        <br />
                        <u>EMSD 2024</u>
                    </h1>
                    <p className={styles.sub_heading}>July 24-26, 2024</p>
                </div>
                <div className={styles.up_right}>
                    <div className={styles.spacer} />
                    <Carousel
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                        infiniteLoop={true}
                        className={styles.carousel_root}
                    >
                        <div
                            className={styles.main}
                            style={{
                                backgroundImage: `url(${getAssetName(
                                    "/assets/images/college/pec_chowk.png"
                                )})`,
                                backgroundPosition: "top-left",
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <div
                            className={styles.main}
                            style={{
                                backgroundImage: `url(${getAssetName(
                                    "/assets/images/college/helicopter.jpeg"
                                )})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                width: "100%",
                            }}
                        ></div>

                        <div
                            className={styles.main}
                            style={{
                                backgroundImage: `url(${getAssetName(
                                    "/assets/images/nabi.png"
                                )})`,
                                backgroundPosition: "top-left",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </Carousel>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.sub_heading}>
                        {" "}
                        The &ldquo;Engineered Materials for Sustainable
                        Development&rdquo; conference addresses the urgent need
                        for sustainable practices. It focuses on
                        identifying,enhance sustainability across various
                        fields. The event synthesizing, and applying engineered
                        materials to promotes collaboration among experts,
                        researchers,and industry leaders, providing a platform
                        for sharing advancements. A pre-conference workshop
                        explores applications in environmental and healthcare
                        contexts.The conference encourages a comprehensive
                        approach to sustainable solutions, fostering dialogue
                        between researchers and industry professionals for
                        effective commercialization. Global participation
                        ensures diverse perspectives and international
                        collaboration.
                    </p>
                </div>
            </div>
        </>
    );
};
