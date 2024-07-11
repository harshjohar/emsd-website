import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/sponsors.module.scss";
import { getAssetName } from "@/util/githubPagesImagesUtil";

function sponsors() {
    return (
        <PageLayout
            title={"EMSD Sponsors | EMSD'24"}
        >
            <h1 className={styles.heading}>
                EMSD Sponsors
            </h1>

            <h3 className={styles.subHeading}>
                JOURNAL SPONSORS
            </h3>
            
            <div className={styles.logo_wrapper}>
                <div className={styles.logo_container}>
                    <img
                        src={getAssetName("/assets/logos/bjnano.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/bmef.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/FRONTIERS_Logo.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/elsevier.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                </div>
            </div>

            <h3 className={styles.subHeading}>
                OTHER SPONSORS
            </h3>

            <div className={styles.logo_wrapper}>
                <div className={styles.logo_container}>
                    <img
                        src={getAssetName("/assets/logos/dpst.jpg")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/deptBio.jpg")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/defence.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/chd.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/parc.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/pirahi.jfif")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/toshi.jfif")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/jeol.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/klorofil.jfif")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/merck.jpg")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/metrohm.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/anton.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/temper.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/labindia.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/thermofisher.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/waters.png")}
                        alt="EMSD 2024"
                        className={styles.logo}
                    />                    
                </div>
            </div>
        </PageLayout>
    );
}

export default sponsors;
