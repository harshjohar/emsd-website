import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/speakers.module.scss";
import { SPEAKERS } from "@/data/speakers";
import { getAssetName } from "@/util/githubPagesImagesUtil";

function Speakers() {
    return (
        <PageLayout title={"Speakers | EMSD 2024"}>
            <h1 className={styles.heading}>Confirmed Speakers</h1>

            <div className={styles.heads}>
                <div className={styles.cards}>
                    {SPEAKERS.map((head, i) => {
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
                                    src={getAssetName(image)}
                                    alt={head.name}
                                />
                                <p className={styles.name}>{head.name}</p>
                                <p className={styles.designation}>
                                    {head.designation}
                                </p>
                                {head.link ? (
                                    <a
                                        href={head.link}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        More Info
                                    </a>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </PageLayout>
    );
}

export default Speakers;
