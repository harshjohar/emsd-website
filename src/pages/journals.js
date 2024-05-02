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
                <li>
                    Hybrid Advances (Elsevier, Impact Factor coming this year)
                </li>
            </ol>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className={styles.imageJournals}
                src="/BJNANO_ EMSD 2024 special issue.jpg"
                alt=""
            />
        </PageLayout>
    );
}

export default journals;
