import React from "react";
import styles from "@/styles/layout.module.scss";
import Head from "next/head";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Inter } from "next/font/google";
import { getAssetName } from "@/util/githubPagesImagesUtil";

const inter = Inter({ subsets: ["latin"] });

function PageLayout({ children, title, description }) {
    return (
        <>
            <div className={`${styles.layout} ${inter.className}`}>
                <div className={styles.top_bar} />
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        rel="icon"
                        href={getAssetName("/assets/logos/1.png")}
                    />
                </Head>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default PageLayout;
