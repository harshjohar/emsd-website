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
                <li>Beilstein Journal of Nanotechnology [Impact Factor:3.2]</li>
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
