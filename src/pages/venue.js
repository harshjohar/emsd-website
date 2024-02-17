/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/venue.module.scss";
import { getAssetName } from "@/util/githubPagesImagesUtil";
import { FaExternalLinkAlt } from "react-icons/fa";

function Venue() {
    return (
        <PageLayout title={"Venue | EMSD 2024"}>
            <h1 className={styles.heading}>Venue</h1>
            <p className={styles.description}>
                Punjab Engineering College is located in Chandigarh, Sector-12.
                Chandigarh, also known as The City Beautiful, is a city and a
                union territory in the northern part of India that serves as the
                capital of the states of Punjab and Haryana. Chandigarh is
                easily accessible from anywhere in the country via all modes of
                transport, including flight, train and bus. The city is served
                by an international airport as well as well-planned rail and
                road network, using which travellers can enter the city with
                ease.
            </p>
            <h1 className={styles.heading}>Accommodation</h1>
            <p className={styles.description}>
            Accommodation at the PEC and NABI Guest
            House is available for single and double
            occupancy at a designated cost. To secure
            these accommodations, participants can
            make reservations by submitting a request
            via email before the specified due date.
            Alternatively, several quality hotels are close
            to participants, allowing them to make direct
            bookings based on their preferences and
            requirements
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                    className={styles.image}
                    src={getAssetName("/assets/images/college/audi.png")}
                    alt=""
                />

                <img
                    className={styles.image}
                    src={getAssetName("/assets/images/college/nab.jpg")}
                    alt=""
                />
            </div>

            <img
                className={styles.image}
                src={getAssetName("/assets/images/college/senate.png")}
                alt=""
            />

            <h3 className={styles.subheading}>Ways to reach Chandigarh</h3>

            <ol className={styles.routes}>
                <li>
                    <b> Air Route:</b> Chandigarh International Airport serves
                    not only Chandigarh but neighbouring cities of Panchkula,
                    Mohali and even some of the southern districts of Himachal.
                    The international airport operates flights of 7 airlines
                    including Indigo, Spicejet and Air India which connect
                    Chandigarh with several national and international
                    destinations. Travellers can either take private cabs or
                    public transport like buses, autos to reach the college from
                    here.
                </li>
                <img
                    className={styles.image}
                    src={getAssetName("/assets/images/air.png")}
                    alt=""
                />
                <li>
                    <b> Train Route:</b> Chandigarh Junction Railway Station
                    (CDG) is the main railhead of the city. It serves both short
                    and long-distance trains to and from neighbouring cities
                    like Delhi, Ambala, Panipat, Shimla and many more.
                </li>
                <img
                    className={styles.image}
                    src={getAssetName("/assets/images/railway.jpg")}
                    alt=""
                />
                <li>
                    <b> Road Route:</b> Travellers who prefer road trips can
                    easily access Chandigarh from neighbouring cities via a
                    well-maintained network of highways and expressways.
                    Ambala-Chandigarh Expressway, Khuda Lahore Road, Jan Marg,
                    Sukhna Path and Shanti Path are some of the major arterial
                    roads in the city. Chandigarh Bus Terminus serves as the
                    main entrance for both public and private buses. There are
                    plenty of public transports available outside the bus
                    terminus using which guests can access major parts of the
                    city.
                </li>
                <img
                    className={styles.image}
                    src={getAssetName("/assets/images/busstop.jpg")}
                    alt=""
                />
            </ol>

            <h3 className={styles.subheading}>Hotels Near PEC</h3>
            <div className={styles.hotels}>
                <a
                    href="https://www.google.com/maps/search/hotels+near+pec+chandigarh/@30.7346386,76.7730543,13.15z/data=!4m7!2m6!5m4!3e4!5m2!4m1!1i2!6e3?entry=ttu"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <img
                        className={styles.image}
                        src={getAssetName("/assets/images/hotels.png")}
                        alt=""
                    />
                </a>

                <div className={styles.good_hotels}>
                    <h4>Some good hotels near PEC</h4>
                    <ul>
                        <li>The Lalit Chandigarh</li>
                        <li>JW Marriott Hotel</li>
                        <li>Hyatt Centric Sector 17</li>
                        <li>Hotel Mountain View</li>
                        <li>Hyatt Regency</li>
                    </ul>

                    <a
                        href="https://www.booking.com/city/in/chandigarh.en.html?aid=306395;label=chandigarh-_Flechj5LaXCg_24SrKjBgS638077223949:pl:ta:p1110:p2:ac:ap:neg:fi:tiaud-1110454565467:kwd-185675056:lp9181709:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c;ws=&gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_waU_dqxv86Y8qSM3Meyep70TTZsnXuxlRrxiCNMeEWXDGDzoMZd6wAaAppBEALw_wcB"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        <p>
                            You can check more hotels here.{" "}
                            <FaExternalLinkAlt />
                        </p>
                    </a>
                </div>
            </div>

            <h3 className={styles.subheading}>Attractions</h3>

            <div className={styles.attractions}>
                <img
                    src={getAssetName("/assets/images/attraction1.jpg")}
                    alt="Attraction"
                />
                <img
                    src={getAssetName("/assets/images/attraction2.jpg")}
                    alt="Attraction"
                />
            </div>

            <p className={styles.popular}>
                Some of the popular must visit place in Chandigarh are{" "}
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh"
                >
                    Rock Garden
                </a>
                ,{" "}
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Sukhna_Lake"
                >
                    Sukhna Lake
                </a>
                ,{" "}
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Zakir_Hussain_Rose_Garden"
                >
                    Rose Garden
                </a>
                ,{" "}
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Mahendra_Chaudhary_Zoological_Park"
                >
                    Chhatbir Zoo
                </a>
                , etc.
            </p>

            <h3 className={styles.subheading}>Within 200 kms</h3>
            <div className={styles.places}>
                {PLACES.map((place, i) => {
                    return (
                        <div key={i}>
                            <img
                                src={getAssetName(place.img)}
                                alt={place.name}
                            />

                            <div>
                                <a href={place.link}>
                                    <h3>{place.name}</h3>
                                </a>
                                <p>{place.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </PageLayout>
    );
}

export default Venue;

const PLACES = [
    {
        img: "/assets/images/shimla.jpg",
        name: "Shimla",
        description:
            "Shimla, the crown jewel of Himachal Pradesh, awaits just a 5-hour drive from Chandigarh via NH-72. This charming hill station, nestled high at 2205m, invites you to trade city worries for crisp mountain air and stunning views. Stroll along The Mall, a bustling street lined with colorful shops and echoes of British days. Seek peace in ancient temples or chase waterfalls hidden in the green mountains. For the adventurous, Shimla offers hikes through apple orchards and rhododendron forests, rewarded with breathtaking panoramas. Travel back in time at the grand Vice Regal Lodge or find quiet moments in beautiful churches like Christ Church and Tara Devi Temple. And don't miss a ride on the famous Kalka-Shimla Railway, a journey like no other. Whether you seek history, adventure, or simply a relaxing escape, Shimla promises an unforgettable experience.",
        link: "https://en.wikipedia.org/wiki/Shimla",
    },
    {
        img: "/assets/images/manali.jpg",
        name: "Manali",
        description:
            "With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. It has a reputation as a backpacking center. Set on the Beas River, it's a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass. Atal Tunnel allows travelers to reach Sissu within a few hours, making Spiti more accessible.",
        link: "https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh",
    },
    {
        img: "/assets/images/kufri.jpg",
        name: "Kufri",
        description:
            "Kufri is a dream destination for those who adore hill stations and adventure because of the breathtaking snowscapes it offers during the winter. From January through March, the town receives significant snowfall. Kufri's most well-known attraction is the Himalayan Nature Park, a high-altitude zoo with a diverse array of plant and animal life. Tourists go to Mahasu Peak to take in the breathtaking scenery of the snowy hill station. Kufri is widely recognised as one of the most stunning hill stations in the country due to its stunning scenery and abundance of tourist attractions.",
        link: "https://en.wikipedia.org/wiki/Kufri,_India",
    },
    {
        img: "/assets/images/mcleodgang.jpg",
        name: "McLeod Ganj",
        description:
            'McLeod Ganj is a beautiful and scenic town located in the Kangra Valley of Himachal Pradesh, India. It is also known as "Little Lhasa" because the Tibetan government-in-exile is headquartered there. The town is surrounded by the Dhauladhar mountains and offers picturesque views all over. McLeod Ganj is a popular tourist destination known for its Tibetan culture, nature treks, and greenery. The town was named after David McLeod, the Lieutenant Governor of Punjab when the British discovered the little hill station in 1850s. Being the home of His Holiness Dalai Lama, McLeod Ganj is a popular Buddhist destination.',
        link: "https://en.wikipedia.org/wiki/McLeod_Ganj",
    },
];
