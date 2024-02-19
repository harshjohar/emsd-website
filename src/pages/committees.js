import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { COMMITTEE } from "@/data/committee";
import { AD_COMMITTEE } from "@/data/ad_committee";
import styles from "@/styles/pages/committee.module.scss";
import { getAssetName } from "@/util/githubPagesImagesUtil";

function Committees() {
    const keys = Object.keys(COMMITTEE);
    const ad_keys = Object.keys(AD_COMMITTEE);
    console.log(keys);
    return (
        <PageLayout title={"Committees | EMSD 2024"}>         
            <h1 className={styles.heading}>Organizing Committee</h1>

            <div className={styles.core}>
                {keys.map((key, i) => {
                    return (
                        <div key={i}>
                            <h3>{key}</h3>
                            <div className={styles.cards} key={i}>
                                {COMMITTEE[key].map((head, i) => {
                                    const image =
                                        head.image_url.length != 0
                                            ? getAssetName(head.image_url)
                                            : getAssetName(
                                                  "/assets/logos/1.png"
                                              );
                                    return (
                                        <div className={styles.card} key={i}>
                                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                height={70}
                                                width={70}
                                                src={image}
                                                alt={head.name}
                                            />
                                            <div className={styles.data}>
                                                <p className={styles.name}>
                                                    {head.name}
                                                </p>
                                                <p className={styles.post}>
                                                    {head.designation}
                                                </p>
                                                <p className={styles.track}>
                                                    {head.track}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <h1 className={styles.heading}>Advisory Committee</h1>    
            <div className={styles.core}>
                {ad_keys.map((key, i) => {
                    return (
                        <div key={i}>
                            <h3>{key}</h3>
                            <div className={styles.cards} key={i}>
                                {AD_COMMITTEE[key].map((head, i) => {
                                    const image = getAssetName("/assets/logos/1.png" );
                                    return (
                                        <div className={styles.card} key={i}>
                                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                height={70}
                                                width={70}
                                                src={image}
                                                alt={head.name}
                                            />
                                            <div className={styles.data}>
                                                <p className={styles.name}>
                                                    {head.name}
                                                </p>
                                                <p className={styles.post}>
                                                    {head.designation}
                                                </p>
                                                <p className={styles.track}>
                                                    {head.track}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </PageLayout>
    );
}

export default Committees;
