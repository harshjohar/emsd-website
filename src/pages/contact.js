import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/contact.module.scss";

function Contact() {
    return (
        <PageLayout title={"Contact Us | EMSD 2024"}>
            <h1 className={styles.heading}>Contact Us</h1>

            <div className={styles.wrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3451028948007!2d76.78419437507749!3d30.764892274568705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff282845c404b%3A0xc0844bf7cbdcc6e9!2sPunjab%20Engineering%20College!5e0!3m2!1sen!2sin!4v1704546578845!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.map}
                ></iframe>

                <div className={styles.contact_details}>
                    <p>Address for Correspondence </p>
                    <p></p>
                    <p>Prof. Sandeep Kumar(PEC)/Prof Nitin Kumar Singhal(NABI)</p>
                    <p>
                    </p>
                    <p> Punjab Engineering College, </p>
                    <p>(Deemed to be University),</p>
                    <p>Sector 12, Chandigarh, India</p>
                    <a href="mailto: emsdpec2024@gmail.com">
                        emsdpec2024@gmail.com
                    </a>
                </div>
            </div>
        </PageLayout>
    );
}

export default Contact;
