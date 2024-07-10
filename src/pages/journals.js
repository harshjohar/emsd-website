import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/speakers.module.scss";

function journals() {
    return (
        <PageLayout
            title={"Journals Associated with EMSD conference | EMSD'24"}
        >
            <h1 className={styles.heading}>
                Journals Associated with EMSD conference
            </h1>

            <ol className={styles.journals}>
                <li>
                    Advances in Colloid and Interface Science [Impact Factor:
                    15.6]
                </li>
                <p>
                    Special Issue: Engineered Materials for Sustainable
                    Development in Environmental and Healthcare Applications
                </p>
                <h4>Guest Editors:</h4>
                <ul style={{listStyleType: 'square'}}>
                    <li>
                        <b>Dr. Reinhard Miller</b>, TU Darmstadt, Institute for
                        Condensed Matter Physics, Germany.{" "}
                    </li>
                    <li>
                        <b>Professor Sandeep Kumar</b>, Department of Physics,
                        Punjab Engineering College (Deemed to be University),
                        Chandigarh, India
                    </li>
                </ul>
                <p>Note: Submissions are possible only by invitation</p>
                <li>
                    Beilstein Journal of Nanotechnology [Impact Factor:3.2]{" "}
                </li>
                <img
                    className={styles.imageJournals}
                    src="/BJNANO_ EMSD 2024 special issue.jpg"
                    alt=""
                />
                <li>
                    Hybrid Advances (Elsevier, Impact Factor coming this year)
                </li>
                <a href="https://www.sciencedirect.com/journal/hybrid-advances/about/call-for-papers#emerging-hybrid-materials-for-advanced-applications-2024" target="_blank">
                    (https://www.sciencedirect.com/journal/hybrid-advances/about/call-for-papers#emerging-hybrid-materials-for-advanced-applications-2024)</a>

                <li>Journal of BME Frontiers [A SCIENCE PARTNER JOURNAL] [<a href="/Call for Paper  Functional Materials for Sustainable Biomedical Engineering - BMEF.docx" target = "_blank">Call for Papers: Special Issue on Functonal Materials for Sustainable Biomedical Engineering</a>] </li>

                <a href="https://spj.science.org/page/bmef/si/functional-materials" target="_blank">
                    (https://spj.science.org/page/bmef/si/functional-materials)</a>

                <li>
                    Frontiers in Nanotechnology (Nanomaterials for Affordable Biomedical Devices, Environmental and Energy Applications)
                </li>
                <a href="https://www.frontiersin.org/research-topics/65431/nanomaterials-for-affordable-biomedical-devices-environmental-and-energy-applications" target="_blank">
                    (https://www.frontiersin.org/research-topics/65431/nanomaterials-for-affordable-biomedical-devices-environmental-and-energy-applications)</a>
                <img
                className={styles.frontierBanner}
                src ="/assets/logos/FNANO_Logo.png"></img>
            </ol>


            {/* eslint-disable-next-line @next/next/no-img-element */}

        </PageLayout>
    );
}

export default journals;
