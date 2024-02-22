import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/call_for_papers.module.scss";
const materials= [
    "Layered materials & Soft materials (polymers)",
    "High-performance insulation materials",
    "Magnetic materials",
    "Quantum materials",
    "Thermoelectric materials",
    "Biomaterials & Bioimplants",
    "Organic nanomaterials",
    "Life cycle assessment of materials",
    "Nanocomposites for various applications",
    "Eco-friendly construction materials",
    "Sustainable materials in mechanical design",
    "Eco-friendly infrastructure materials",
    "Eco-friendly electronic components",
    "Sustainable materials in information technology",
    "Energy-efficient materials for machinery",
    "Environmental impact and safety of nanomaterials",
    "Materials for controlled release of fertilizers and pesticides",
    "Sustainable practices in food production",
    "Bio-inspired robotics and sensors",
    "IoT & AI in material technology",
    "Materials for environmental monitoring",
    "Biocompatible materials in healthcare & Biomedical devices",
    "Nanostructured materials (quantum dot, nanowire, nanoparticle, etc) & Nanoporous materials",
    "Optoelectronic and photochromic materials",
    "Heterogeneous catalysts",
    "Electrocatalysts",
    "Theoretical and computational aspects of materials",
    "Energy storage and conversion (batteries, capacitors, etc)",
    "Environmental application (water treatment, photocatalysts, etc)",
    "Photovoltaics, Sensors & Drug delivery and development",
    "Nano devices",
    "Adsorption and separation",
    "Waste to wealth conversion in circular economy",
    "Natural materials & interfaces",
    "Thin films",
    "Multifunctional materials"
  ]
function CallForPapers() {
    return (
        <PageLayout title={"Call For Papers | EMSD 2024"}>
            <h1 className={styles.heading}>Call For Papers</h1>
            <p className={styles.subheading}>
            <strong>EMSD-2024</strong> serves as a premier platform showcasing groundbreaking advancements and scholarly discoveries in Engineered Materials for Sustainable Development. This conference will comprehensively cover a diverse range of topics, including but not limited to material synthesis, environmental applications, sustainable energy solutions, and innovative manufacturing techniques. With a focus on sustainability and interdisciplinary collaboration, EMSD-2024 promises to catalyze transformative progress towards a more sustainable future.
            </p>
            <div style={{height:"30px"}}/>
            <h2 className={styles.subheading}>Topics of Conference</h2>

            <div className={styles.technical_tracks}>
                {materials.map((material,i)=>(<p key={i} className={styles.paper_track}>TOPIC-{(i+1)} &nbsp; &nbsp;{material}</p>))}
            </div>
        </PageLayout>
    );
}

export default CallForPapers;
