"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sprout,
  Droplet,
  ShoppingCart,
  ArrowRight,
  FlaskConical,
  TestTube,
  Settings,
  ShieldCheck,
  PhoneCall,
  ArrowLeft,
  Sparkles,
  Search,
  Filter,
  FileCheck2,
  Building2,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const categories = [
  "All",
  "Water Soluble Fertilizers",
  "PGR Grades",
  "Chelated Micronutrients",
  "Oxide Form Micronutrients",
];

const categoryDetails = {
  "Water Soluble Fertilizers": {
    badge: "100% Soluble Plant Nutrition",
    title: "Water Soluble Fertilizers (WSF)",
    subtitle:
      "High-purity fertigation & foliar grade nutrients engineered for rapid bio-availability, complete solubility, and zero nozzle clogging.",
    description:
      "Our comprehensive Water Soluble Fertilizer division includes Regular Macro-Nutrient NPK Grades, advanced Polyphosphate Speciality Formulations, and high-density Oxide WSF Grades.",
    highlights: [
      "100% water solubility leaving zero sediment or nozzle clogging in drip systems",
      "Virtually free from harmful chlorides, sodium, and heavy metals",
      "Advanced Polyphosphate Grades resistant to soil fixation across wide pH ranges",
      "High-density Oxide Grades for superior trans-cuticular penetration and leaf coverage",
    ],
    primaryImage: "/h2-1.webp",
    icon: Droplet,
    iconColor: "text-[#469A35]",
    specs: [
      { label: "Solubility", value: "100% at 20°C" },
      { label: "Total Formulations", value: "22 Technical Grades" },
      { label: "Application", value: "Drip, Foliar, Pivot & Hydroponics" },
      { label: "Packaging", value: "1kg, 25kg, 50kg HDPE Bags" },
    ],
    subCategories: [
      "All WSF (22)",
      "Regular Grades (9)",
      "Polyphosphate Grades (4)",
      "Oxide Grades (9)",
    ],
    subGroupImages: {
      "Regular Grades (9)": [
        {
          src: "/h2-1.webp",
          title: "100% Soluble Regular Macro-Nutrients",
          desc: "High-purity crystalline technicals engineered for micro-irrigation and foliar feeding",
        },
        {
          src: "/indian-farmer-irrigation.webp",
          title: "Scale-Free Pressurized Drip Networks",
          desc: "Zero sediment prevents nozzle and emitter clogging across large-acre networks",
        },
        {
          src: "/golden-wheat-bg.png",
          title: "Vegetative & Grain Fill Acceleration",
          desc: "Immediate root absorption ensuring rapid nutrient uptake during active growth",
        },
      ],
      "Polyphosphate Grades (4)": [
        {
          src: "/h2-2.webp",
          title: "Advanced Chain-Polyphosphate Technology",
          desc: "Resists calcium and iron fixation in alkaline soils, maintaining available phosphate",
        },
        {
          src: "/maha-farmer-1.avif",
          title: "Commercial Horticultural Quality",
          desc: "Consistent nutrient availability boosting bloom intensity and fruit sizing",
        },
      ],
      "Oxide Grades (9)": [
        {
          src: "/feature-img-02.webp",
          title: "High-Payload Oxide WSF Formulations",
          desc: "Concentrated oxide macro-elements with high leaf adhesion and trans-cuticular penetration",
        },
        {
          src: "/maha-farmer-3.avif",
          title: "Produce Firmness & Storage Resilience",
          desc: "Sub-micron particles delivering steady residual nutrition throughout ripening",
        },
      ],
    },
    grades: [
      // Regular Grades (9 items)
      {
        name: "NPK 19:19:19",
        role: "Universal Balanced Vegetative Growth",
        desc: "Equal ratio of Nitrogen, Phosphorus, and Potassium providing a complete nutritional foundation during initial establishment and active vegetative growth stages.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 13:00:45 (Potassium Nitrate)",
        role: "Fruit Sizing & Sugar Translocation",
        desc: "Quick-acting nitrate nitrogen and soluble potassium essential for carbohydrate synthesis, cell elongation, fruit expansion, uniform color, and drought tolerance.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 13:40:13",
        role: "Early Root & Bloom Formation",
        desc: "High-phosphorus balanced blend enriched with nitrogen and potassium to stimulate early root branching, uniform flower bud development, and bloom burst.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 12:61:00 (MAP - Monoammonium Phosphate)",
        role: "Starter & Seedling Establishment",
        desc: "Fast-acting water-soluble phosphate starter promoting vigorous root elongation, early seedling vigor, and rapid recovery from transplant shock.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:52:34 (MKP - Monopotassium Phosphate)",
        role: "Pre-Bloom & Flower Induction",
        desc: "Nitrogen-free formulation rich in active phosphorus and potassium to boost flower bud differentiation, bloom retention, and fruit firmness.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:00:50 (SOP - Potassium Sulphate)",
        role: "Fruit Firmness, Luster & Shelf Life",
        desc: "Chloride-free potassium enriched with readily available sulfate sulfur for sugar enhancement, rind shine, disease resilience, and superior post-harvest storage.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:60:20",
        role: "High-Phosphorus Bloom Accelerator",
        desc: "Concentrated phosphorus and potassium formulation for vigorous root development, prolific flowering clusters, and enhanced plant energy transfer.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:00:23",
        role: "Rapid Potassium Delivery Formulation",
        desc: "Fast-acting soluble potassium source tailored for critical fruit-filling stages, osmotic plant cell regulation, and cold/heat shock endurance.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "Calcium Nitrate",
        role: "Cell Wall Rigidity & Tissue Strength",
        desc: "100% water-soluble nitrate nitrogen combined with readily available calcium; cures blossom end rot, tip burn, and reinforces cellular membrane strength.",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },

      // Polyphosphate Grades (4 items)
      {
        name: "00:42:47 (Polyphosphate Grade)",
        role: "Extended Phosphate Availability",
        desc: "Condensed chain-polyphosphate technology that resists soil calcium/iron lockup; stays soluble across high pH soils while supplying dense P and K.",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },
      {
        name: "00:40:44 (Polyphosphate Grade)",
        role: "Non-Clogging Fertigation P-K",
        desc: "Speciality polyphosphate grade designed to keep micro-irrigation emitters completely scale-free while accelerating root uptake of secondary minerals.",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },
      {
        name: "00:33:65 (Polyphosphate Grade)",
        role: "Ultra-Potassium Polyphosphate Matrix",
        desc: "High-potassium polyphosphate formulation engineered for final fruit expansion, sugar translocation, and cold weather tolerance in high-value horticulture.",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },
      {
        name: "00:43:56 (Polyphosphate Grade)",
        role: "Balanced Soluble Polyphosphate",
        desc: "Precision polyphosphate grade delivering sustained phosphorus release without soil fixation and optimum potassium nutrition for intensive cropping.",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },

      // Oxide Grades (9 items)
      {
        name: "00:09:46 (Oxide Grade)",
        role: "Concentrated Potassium Oxide Blend",
        desc: "High-potassium oxide formulation designed for rapid trans-cuticular absorption and superior fruit ripening in orchards and field crops.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "08:00:47 (Oxide Grade)",
        role: "Nitrogen-Potassium Oxide Complex",
        desc: "Synergistic nitrogen and potassium oxide grade delivering enhanced fruit firmness, canopy vigor, and extended post-harvest shelf life.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "10:54:10 (Oxide Grade)",
        role: "Ultra-Phosphate Oxide Starter",
        desc: "Super-concentrated phosphate oxide formulation promoting prolific root branching, rapid energy storage, and uniform bud initiation.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "00:37:37 (Oxide Grade)",
        role: "Equi-Ratio P-K Oxide Nutrition",
        desc: "Balanced phosphorus and potassium oxide grade supporting flower setting, mid-season fruit development, and drought resilience.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "00:48:47 (Oxide Grade)",
        role: "High-Density P-K Oxide Grade",
        desc: "Dense nutritional payload combining concentrated phosphate and potash oxides for peak crop reproductive demand and high yield index.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "00:44:29 (Oxide Grade)",
        role: "High-Phosphate Oxide Formulation",
        desc: "Specialized oxide formulation boosting root vitality, cellular energy transfer (ATP), and early bloom density across vegetable and fruit crops.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "30:10:10 (Oxide Grade)",
        role: "High-Nitrogen Vegetative Booster",
        desc: "Fast-acting nitrogen-rich oxide formulation promoting vigorous shoot flush, rapid tillering, and deep green leaf development.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "05:55:17 (Oxide Grade)",
        role: "Flower Burst & Root Mass Accelerator",
        desc: "Intense phosphate oxide formulation delivering dramatic root mass acceleration and prolific floral cluster formation for maximized fruit set.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "14:48:00 (Oxide Grade)",
        role: "Nitrogen-Phosphate Oxide Starter",
        desc: "Essential starter oxide grade for nursery establishment, rapid seedling rooting, and transplant shock prevention in commercial farming.",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
    ],
    photos: [
      {
        src: "/h2-1.webp",
        title: "Modern Drip Fertigation Setup",
        desc: "Clean 100% solubility in modern automated micro-drip networks",
      },
      {
        src: "/golden-wheat-bg.png",
        title: "Accelerated Crop Tiller & Grain Filling",
        desc: "Enhanced yield and test weight across cereal and field crops",
      },
      {
        src: "/maha-farmer-1.avif",
        title: "Commercial Horticultural Quality",
        desc: "Superior grade sizing in fruits, onions, grapes, and vegetables",
      },
    ],
  },
  "PGR Grades": {
    badge: "Hormonal Balance & Bio-Stimulation",
    title: "Plant Growth Regulators & Biostimulants (PGR)",
    subtitle:
      "High-purity organic humates, plant amino acids, fulvates, seaweed extracts, and multi-action biostimulant formulations.",
    description:
      "Our PGR and Biostimulant division encompasses 8 specialized organic active technicals designed to condition soil health, enhance cation exchange capacity (CEC), stimulate vigorous root systems, and regulate crop physiological processes.",
    highlights: [
      "Potassium Humate (Flakes & Powder) for superior soil structure & CEC",
      "Amino Acid 80% (Soya Protein Base) for protein synthesis & stress recovery",
      "Low molecular weight Fulvic Acid for rapid cellular permeability & chelation",
      "Cold-extracted Black & Green Seaweed extracts rich in natural phytohormones",
    ],
    primaryImage: "/Potassium Humate Flakes.avif",
    icon: Sprout,
    iconColor: "text-logo-blue",
    specs: [
      { label: "Purity Spectrum", value: "Assayed Technical Grades" },
      { label: "Total Formulations", value: "8 Technical Items" },
      { label: "Target", value: "Rooting, Soil CEC, Flowering & Stress" },
      { label: "Packaging", value: "1kg, 25kg, 50kg Bags, 200L Drums" },
    ],
    subCategories: [
      "All PGR (8)",
      "Humic Series (2)",
      "Amino Acids (1)",
      "Fulvic & Seaweed (5)",
    ],
    subGroupImages: {
      "Humic Series (2)": [
        {
          src: "/Potassium Humate Flakes.avif",
          title: "Potassium Humate Flakes",
          desc: "Lustrous 100% soluble black flakes for rapid soil conditioning and root expansion",
        },
        {
          src: "/Potassium Humate Powder.avif",
          title: "Potassium Humate Powder",
          desc: "Micro-pulverized humate powder ideal for bulk fertilizer blending and soil drenching",
        },
      ],
      "Amino Acids (1)": [
        {
          src: "/Amino-Acid-80.avif",
          title: "Amino Acid 80% (Soya Protein Base)",
          desc: "High-purity enzymatic hydrolysate powder providing readily assimilated L-amino acids",
        },
      ],
      "Fulvic & Seaweed (5)": [
        {
          src: "/Fulvic-Acid-80.avif",
          title: "Fulvic Acid",
          desc: "Ultra-low molecular weight organic fulvic acid powder for enhanced cellular permeability",
        },
        {
          src: "/Black Seaweed Powder.avif",
          title: "Black Seaweed Powder (Phytohormone Bio-Extract)",
          desc: "Soluble organic black seaweed extract powder packed with natural cytokinins and auxins",
        },
        {
          src: "/Brown Seaweed Powder.avif",
          title: "Black Seaweed Powder (Natural Cytokinin & Root Vigor Extract)",
          desc: "Natural marine seaweed extract rich in alginic acid and phytohormones",
        },
        {
          src: "/Green Seaweed Powder.avif",
          title: "Green Seaweed Powder",
          desc: "Enzymatically active green seaweed extract promoting flowering and root vigor",
        },
      ],
    },
    grades: [
      {
        name: "Potassium Humate Flakes",
        role: "Cation Exchange & Nutrient Mobilizer",
        desc: "• Potassium Humate Flakes are a concentrated source of humic substances and potassium that improve soil structure, nutrient availability, and root development.\n• They help enhance nutrient-use efficiency, plant growth, and overall crop vigour.\n\nRecommended Dose:\nFoliar spray: 1–2 g/L water\nDrip/Fertigation: 1–2 kg/acre\nSoil application: 2–5 kg/acre\n\n(Dose may vary depending on crop, soil condition, and product concentration (e.g., K₂O and humic acid content).)",
        badge: "Humate Flakes",
        subCategory: "Humic Series (2)",
        image: "/Potassium Humate Flakes.avif",
      },
      {
        name: "Potassium Humate Powder",
        role: "Soil Fertility & Fertilizer Synergist",
        desc: "Fine micro-pulverized potassium humate powder ideal for bulk fertilizer blending, compost enrichment, and enhancing mineral fertilizer uptake efficiency.",
        badge: "Humate Powder",
        subCategory: "Humic Series (2)",
        image: "/Potassium Humate Powder.avif",
      },
      {
        name: "Amino Acid 80% (Soya Protein Base)",
        role: "Protein Synthesis & Abiotic Stress Resistance",
        desc: "High-purity enzymatic hydrolysate powder derived from non-GMO soya protein; delivers readily bio-available L-amino acids for rapid protein synthesis.",
        badge: "80% Powder",
        subCategory: "Amino Acids (1)",
        image: "/Amino-Acid-80.avif",
      },
      {
        name: "Fulvic Acid",
        role: "Micro-Nutrient Transporter & Natural Chelation",
        desc: "Ultra-low molecular weight organic fulvic acid powder that penetrates plant cell membranes swiftly to transport trace minerals directly into cells.",
        badge: "Active Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Fulvic-Acid-80.avif",
      },
      {
        name: "Black Seaweed Powder (Phytohormone Bio-Extract)",
        role: "Phytohormone Bio-Extract",
        desc: "Soluble organic black seaweed extract powder packed with natural cytokinins, auxins, betaines, and 60+ trace minerals.",
        badge: "Seaweed Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Black Seaweed Powder.avif",
      },
      {
        name: "Black Seaweed Powder(Natural Cytokinin & Root Vigor Extract)",
        role: "Natural Cytokinin & Root Vigor Extract",
        desc: "High-grade concentrated marine seaweed extract rich in alginic acid, mannitol, and natural plant growth hormones for vigorous root initiation.",
        badge: "Seaweed Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Brown Seaweed Powder.avif",
      },
      {
        name: "Black Seaweed Flakes",
        role: "Root Proliferation & Chlorophyll Boost",
        desc: "Lustrous black seaweed extract flakes dissolving without sediment for drip irrigation and foliar spray; boosts photosynthetic rate.",
        badge: "Seaweed Flakes",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Black Seaweed Powder.avif",
      },
      {
        name: "Green Seaweed Powder",
        role: "Enzymatic Metabolic Booster",
        desc: "Enzymatically active green seaweed extract powder stimulating flower bud development, reducing flower/fruit drop, and improving packout grade.",
        badge: "Seaweed Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Green Seaweed Powder.avif",
      },
    ],
    photos: [
      {
        src: "/feature-img-01.webp",
        title: "Canopy & Foliar Applications",
        desc: "Precision spraying during critical vegetative & reproductive stages",
      },
      {
        src: "/maha-farmer-2.avif",
        title: "Flower Retention & Blossom Protection",
        desc: "Dramatic reduction in flower drop across high-value horticultural crops",
      },
      {
        src: "/maha-farmer-3.avif",
        title: "Fruit Weight & Uniformity",
        desc: "Superior pack-out grade, color uniformity, and market premium produce",
      },
    ],
  },
  "Chelated Micronutrients": {
    badge: "Advanced EDTA / EDDHA Chelation",
    title: "Chelated Micronutrient Formulations",
    subtitle:
      "Bio-available, organically ring-bound trace minerals protected against soil fixation in alkaline, calcareous, and high-pH soils.",
    description:
      "Conventional inorganic mineral salts easily become locked and insoluble in alkaline, calcareous soils. Our EDTA and EDDHA chelated micronutrients bind essential metallic cations (Zn, Fe, Cu, Mn, Ca, Mg, B) in a stable, water-soluble molecular ring.",
    highlights: [
      "True chelation providing chemical stability across pH 4.0 through pH 9.0+",
      "EDDHA Ferrous 6% specifically engineered for highly calcareous and alkaline soils",
      "Individual EDTA trace minerals: Zinc 12%, Iron 12%, Copper 12%, Manganese 12%, Calcium 10%, Magnesium 6%, Boron 20%",
      "Specialty multi-nutrient combinations: State Grade-1 & Grade-2, Mix Drip, Cal+Mg+Boron, Zinc+Boron",
    ],
    primaryImage: "/breadcrumb--1.webp",
    icon: FlaskConical,
    iconColor: "text-logo-red",
    specs: [
      { label: "Chelating Agent", value: "Disodium EDTA / EDDHA" },
      { label: "Total Formulations", value: "14 Technical Grades" },
      { label: "Solubility", value: "100% Quick Dissolving" },
      { label: "Packaging", value: "500g, 1kg, 25kg Corrugated Boxes" },
    ],
    subCategories: [
      "All Chelates (14)",
      "Single Elements (7)",
      "Synergistic Combos (4)",
      "Specialty Drip & Soil (3)",
    ],
    subGroupImages: {
      "Single Elements (7)": [
        {
          src: "/breadcrumb--1.webp",
          title: "High-Purity EDTA Micro-Granules",
          desc: "100% soluble EDTA chelates of Zn 12%, Fe 12%, Cu 12%, Mn 12%, Ca 10%, Mg 6%, Boron 20%",
        },
        {
          src: "/maha-farmer-4.avif",
          title: "Interveinal Chlorosis Remediation",
          desc: "Rapid chlorophyll restoration eliminating yellowing and leaf chlorosis within days",
        },
      ],
      "Synergistic Combos (4)": [
        {
          src: "/maha-farmer-2.avif",
          title: "Synergistic Multi-Nutrient Chelates",
          desc: "Balanced trace element complexes preventing hidden hunger in cash crops and horticulture",
        },
        {
          src: "/maha-farmer-3.avif",
          title: "Calcium + Boron Tissue Firmness",
          desc: "Strengthens cell membranes, prevents fruit cracking, and cures blossom end rot",
        },
      ],
      "Specialty Drip & Soil (3)": [
        {
          src: "/indian-farmer-irrigation.webp",
          title: "EDDHA Ferrous 6% for Alkaline Calcareous Soils",
          desc: "Ortho-ortho chelate offering stability even in extreme alkaline soils up to pH 9.0+",
        },
        {
          src: "/h2-1.webp",
          title: "Pressurized Drip Network Compatibility",
          desc: "Complete solubility without filter plugging or tank precipitation",
        },
      ],
    },
    grades: [
      // Single Elements (7 items)
      {
        name: "EDTA Zinc 12%",
        role: "Auxin Synthesis & Internode Elongation",
        desc: "High-purity 12% chelated zinc powder preventing little-leaf disorder, boosting plant hormone production, and expanding active leaf area.",
        badge: "12% Zn EDTA",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Ferrous 12%",
        role: "Chlorophyll Synthesis & Electron Transfer",
        desc: "Completely chelated iron eliminating interveinal chlorosis, accelerating photosynthesis, and restoring lush deep green foliage rapidly.",
        badge: "12% Fe EDTA",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Copper 12%",
        role: "Lignin Synthesis & Respiration Enzymes",
        desc: "12% chelated copper reinforcing cell wall strength, aiding seed formation, and activating key physiological plant enzymes.",
        badge: "12% Cu EDTA",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Manganese 12%",
        role: "Nitrogen Assimilation & Water Photolysis",
        desc: "12% chelated manganese activating carbohydrate enzymes and facilitating the critical light-splitting photolysis step in photosynthesis.",
        badge: "12% Mn EDTA",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Calcium 10%",
        role: "Direct Foliar Calcium Uptake",
        desc: "10% organically chelated calcium that bypasses calcium mobility bottlenecks to fortify growing tips, flowers, and fruit skin.",
        badge: "10% Ca EDTA",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Magnesium 6%",
        role: "Central Chlorophyll Core Delivery",
        desc: "6% chelated magnesium supporting the core photosynthetic molecule, preventing premature lower leaf yellowing and senescence.",
        badge: "6% Mg EDTA",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Boron 20%",
        role: "Pollination & Pollen Tube Viability",
        desc: "High-percentage soluble chelated/complexed boron powder essential for flower pollen viability, sugar translocation, and preventing fruit cracking.",
        badge: "20% Boron",
        subCategory: "Single Elements (7)",
      },

      // Synergistic Combos (4 items)
      {
        name: "EDTA Calcium + Boron (10% + 2%)",
        role: "Cell Wall Rigidity & Fruit Firmness",
        desc: "Synergistic duo where boron aids calcium assimilation, curing blossom end rot, reducing fruit cracking, and extending storage life.",
        badge: "Ca 10% + B 2%",
        subCategory: "Synergistic Combos (4)",
      },
      {
        name: "EDTA Cal + Mg + Boron (6% + 6% + 2%)",
        role: "Triple Secondary & Micronutrient Defense",
        desc: "3-in-1 chelate complex delivering simultaneous calcium, magnesium, and boron to protect against multiple nutritional deficiency complexes.",
        badge: "Ca + Mg + B",
        subCategory: "Synergistic Combos (4)",
      },
      {
        name: "EDTA Zinc + Boron (13% + 3%)",
        role: "Vegetative & Reproductive Synergy",
        desc: "High-potency zinc-boron combination driving strong flowering, prolific pollen fertilization, and uniform early fruit formation.",
        badge: "Zn 13% + B 3%",
        subCategory: "Synergistic Combos (4)",
      },
      {
        name: "EDTA Mix Micronutrients G-2",
        role: "State Grade-2 Balanced Chelate",
        desc: "Balanced multi-micronutrient combination strictly conforming to Grade-2 government specifications for broadacre and cash crops.",
        badge: "Grade-2 Standard",
        subCategory: "Synergistic Combos (4)",
      },

      // Specialty Drip & Soil (3 items)
      {
        name: "EDDHA Ferrous 6%",
        role: "High-pH Alkaline Soil Iron Chelate",
        desc: "Premium ortho-ortho isomer chelate maintaining iron bio-availability even in severe alkaline and calcareous soils up to pH 9.0+.",
        badge: "Alkaline Soil (pH 9+)",
        subCategory: "Specialty Drip & Soil (3)",
      },
      {
        name: "Mix Micronutrients Drip",
        role: "100% Soluble Drip Fertigation Formula",
        desc: "Micro-element blend completely soluble without sediment, tailored specifically for continuous dosing through pressurized drip networks.",
        badge: "100% Drip Soluble",
        subCategory: "Specialty Drip & Soil (3)",
      },
      {
        name: "EDTA Mix Micronutrient Grade 1",
        role: "Official FCO Grade-1 Chelate",
        desc: "Comprehensive multi-micronutrient formulation meeting certified Grade-1 standards for broad-spectrum nutritional defense.",
        badge: "Grade-1 Standard",
        subCategory: "Specialty Drip & Soil (3)",
      },
    ],
    photos: [
      {
        src: "/breadcrumb--1.webp",
        title: "Micro-Granular EDTA Formulations",
        desc: "Instant dissolved solution ready for foliar and drip tanks",
      },
      {
        src: "/indian-farmer-irrigation.webp",
        title: "Alkaline Soil Remediation",
        desc: "Delivers nutrients reliably even in high carbonate soils",
      },
      {
        src: "/maha-farmer-4.avif",
        title: "Deficiency Free High Value Crops",
        desc: "Vibrant lush green leaves with optimal photosynthetic capacity",
      },
    ],
  },
  "Oxide Form Micronutrients": {
    badge: "High-Density Suspension & Solution Tech",
    title: "Oxide Form Micronutrients",
    subtitle:
      "Sub-micron milled flowable suspensions, organo-complexed solutions, and technical nutrient salts for rapid foliar assimilation.",
    description:
      "Our Oxide Form Micronutrient division features high-payload flowable suspensions and high-solubility nutrient formulations.",
    highlights: [
      "Ultra-high density Zinc Oxide 39.5% SC delivering exceptional elemental zinc per liter",
      "Rapidly absorbed Calcium Oxide 11% and liquid Boron 11% for cell wall and flower health",
      "Synergistic Calcium + Boron (6% + 6%) liquid suspension for fruit firmness",
      "High-analysis Manganese Sulphate 30.5% technical powder for soil and foliar correction",
    ],
    primaryImage: "/breadcrumb--2.webp",
    icon: TestTube,
    iconColor: "text-logo-blue",
    specs: [
      { label: "Formulation Type", value: "Suspension Concentrate (SC) / Liquid" },
      { label: "Total Formulations", value: "5 Technical Grades" },
      { label: "Application", value: "Foliar Spray, Drone & Drip" },
      { label: "Packaging", value: "250ml, 500ml, 1L, 5L, 20L Carboys, 25kg" },
    ],
    subCategories: [
      "All Oxide Formulations (5)",
      "Suspension Concentrates & Liquids (4)",
      "Technical Salts (1)",
    ],
    subGroupImages: {
      "Suspension Concentrates & Liquids (4)": [
        {
          src: "/breadcrumb--2.webp",
          title: "High-Density Flowable Suspensions",
          desc: "Zinc Oxide 39.5% SC and Calcium Oxide 11% delivering maximum elemental payload per liter",
        },
        {
          src: "/video-image-2.webp",
          title: "Drone & Boom Spray Precision Application",
          desc: "Formulated with anti-drift agents and rain-fast stickers for uniform foliar adherence",
        },
      ],
      "Technical Salts (1)": [
        {
          src: "/maha-farmer-6.avif",
          title: "Manganese Sulphate 30.5% Technical Salt",
          desc: "High-analysis technical salt for corrective soil drenching and foliar nutrition",
        },
      ],
    },
    grades: [
      {
        name: "Zinc Oxide 39.5%",
        role: "Ultra-High Density Zinc Suspension (SC)",
        desc: "Sub-micron milled zinc oxide flowable suspension providing high zinc payload per liter with sustained release, rain-fastness, and zero leaf burn.",
        badge: "39.5% SC Flowable",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Calcium Oxide 11%",
        role: "Rapid Foliar Calcium Flowable",
        desc: "Concentrated liquid calcium oxide formulation designed for quick trans-cuticular penetration, strengthening fruit skin and extending market shelf life.",
        badge: "11% Liquid",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Boron Liquid 11%",
        role: "Phloem-Mobile Liquid Organo-Boron",
        desc: "Highly soluble liquid organo-boron complex promoting flower retention, uniform pollen tube elongation, and efficient sugar translocation.",
        badge: "11% Soluble Liquid",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Calcium + Boron (6% + 6%)",
        role: "Balanced Liquid Sizing & Firmness Duo",
        desc: "Balanced 1:1 ratio liquid suspension preventing blossom end rot, bitter pit, and fruit cracking across high-value horticulture crops.",
        badge: "6% Ca + 6% B",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Manganese Sulphate 30.5%",
        role: "High-Analysis Manganese Technical Salt",
        desc: "30.5% technical manganese salt for rapid foliar correction and soil application in manganese-deficient alkaline and high-organic soils.",
        badge: "30.5% Technical",
        subCategory: "Technical Salts (1)",
      },
    ],
    photos: [
      {
        src: "/breadcrumb--2.webp",
        title: "Concentrated Flowable Liquid",
        desc: "True liquid suspension for seamless pouring and zero dust hazards",
      },
      {
        src: "/video-image-2.webp",
        title: "Drone & Boom Precision Application",
        desc: "Optimized droplet spread with high drift control and leaf adhesion",
      },
      {
        src: "/maha-farmer-6.avif",
        title: "Field Results on Intensive Cultivation",
        desc: "Immediate chlorophyll boost and vigorous crop health",
      },
    ],
  },
};

const productsData = [
  {
    id: 1,
    name: "Water Soluble Fertilizers",
    category: "Water Soluble Fertilizers",
    badge: "22 Technical Grades",
    desc: "Complete portfolio of 9 Regular NPK Grades (19:19:19, 13:00:45, 00:52:34, Calcium Nitrate), 4 Polyphosphate Speciality Grades, and 9 Oxide WSF Grades.",
    price: "Bulk / Wholesale Supply",
    image: "/h2-1.webp",
    icon: Droplet,
    iconColor: "text-[#469A35]",
    itemCount: "22 Grades",
  },
  {
    id: 2,
    name: "PGR Grades",
    category: "PGR Grades",
    badge: "8 Formulations",
    desc: "Comprehensive biostimulants: Potassium Humate Flakes & Powder, Amino Acid 80% (Soya Base), Fulvic Acid, Black Seaweed Powders & Flakes, and Green Seaweed Powder.",
    price: "Bulk / Wholesale Supply",
    image: "/Potassium Humate Flakes.avif",
    icon: Sprout,
    iconColor: "text-logo-blue",
    itemCount: "8 Products",
  },
  {
    id: 3,
    name: "Chelated Micronutrients",
    category: "Chelated Micronutrients",
    badge: "14 Formulations",
    desc: "EDTA chelates of Zinc 12%, Iron 12%, Copper 12%, Manganese 12%, Calcium 10%, Magnesium 6%, Boron 20%, EDDHA Fe 6% (pH 9+), and State Grade blends.",
    price: "Bulk / Wholesale Supply",
    image: "/breadcrumb--1.webp",
    icon: FlaskConical,
    iconColor: "text-logo-red",
    itemCount: "14 Chelates",
  },
  {
    id: 4,
    name: "Oxide Form Micronutrients",
    category: "Oxide Form Micronutrients",
    badge: "5 Formulations",
    desc: "High-density flowable suspensions and technical solutions: Zinc Oxide 39.5% SC, Calcium Oxide 11%, Boron Liquid 11%, Calcium+Boron (6%+6%), and Manganese Sulphate 30.5%.",
    price: "Bulk / Wholesale Supply",
    image: "/breadcrumb--2.webp",
    icon: TestTube,
    iconColor: "text-logo-blue",
    itemCount: "5 Formulations",
  },
  {
    id: 5,
    name: "Customized & Bulk Allocation",
    category: "Customized Solutions",
    badge: "Tailored Sourcing",
    desc: "Industrial raw material sourcing, bulk contract blending, institutional supply, and custom specifications backed by our wholesale fertilizer license.",
    price: "Institutional Quote",
    image: "/indian-farmer-irrigation.webp",
    icon: Settings,
    iconColor: "text-logo-red",
    itemCount: "Custom Blends",
  },
];

// Helper to determine the best photo for each grade card
const getGradeImage = (grade, category) => {
  if (grade.image) return grade.image;

  const name = (grade.name || "").toLowerCase();

  // Priority exact matching for PGR Grades from public folder:
  if (name.includes("potassium humate flakes") || (name.includes("humate") && name.includes("flakes"))) {
    return "/Potassium Humate Flakes.avif";
  }
  if (name.includes("potassium humate powder") || (name.includes("humate") && name.includes("powder"))) {
    return "/Potassium Humate Powder.avif";
  }
  if (name.includes("amino acid 80") || name.includes("amino 80") || name.includes("amino acid")) {
    return "/Amino-Acid-80.avif";
  }
  if (name.includes("fulvic acid") || name.includes("fulvic")) {
    return "/Fulvic-Acid-80.avif";
  }
  if (name.includes("cytokinin") || name.includes("root vigor")) {
    return "/Brown Seaweed Powder.avif";
  }
  if (name.includes("black seaweed")) {
    return "/Black Seaweed Powder.avif";
  }
  if (name.includes("green seaweed")) {
    return "/Green Seaweed Powder.avif";
  }
  if (name.includes("brown seaweed")) {
    return "/Brown Seaweed Powder.avif";
  }

  if (name.includes("flakes") || name.includes("crystal")) {
    return "/feature-img-01.webp";
  }
  if (name.includes("shiny ball") || name.includes("granules") || name.includes("bentonite")) {
    return "/maha-farmer-2.avif";
  }
  if (name.includes("seaweed")) {
    return "/maha-farmer-3.avif";
  }
  if (name.includes("amino")) {
    return "/maha-farmer-4.avif";
  }
  if (name.includes("humic")) {
    return "/maha-farmer-5.avif";
  }
  if (name.includes("fulvic") || name.includes("fulvate")) {
    return "/maha-farmer-7.avif";
  }
  if (name.includes("eddha")) {
    return "/indian-farmer-irrigation.webp";
  }
  if (name.includes("edta") || name.includes("chelat") || name.includes("micronutrient")) {
    return "/breadcrumb--1.webp";
  }
  if (name.includes("oxide") && (name.includes("zinc") || name.includes("calcium") || name.includes("boron"))) {
    return "/breadcrumb--2.webp";
  }
  if (name.includes("polyphosphate")) {
    return "/h2-2.webp";
  }
  if (name.includes("19:19:19") || name.includes("13:00:45") || name.includes("00:52:34") || name.includes("calcium nitrate") || name.includes("12:61:00")) {
    return "/h2-1.webp";
  }

  // Fallbacks by category
  if (category === "PGR Grades") return "/feature-img-01.webp";
  if (category === "Chelated Micronutrients") return "/breadcrumb--1.webp";
  if (category === "Oxide Form Micronutrients") return "/breadcrumb--2.webp";
  return "/h2-1.webp";
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const currentDetail =
    selectedCategory !== "All" ? categoryDetails[selectedCategory] : null;

  // Handle switching category tab
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubCategory("All");
    setSearchQuery("");
  };

  // Filter grades based on subcategory & search query
  const filteredGrades = useMemo(() => {
    if (!currentDetail?.grades) return [];
    return currentDetail.grades.filter((g) => {
      const matchesSub =
        selectedSubCategory === "All" ||
        selectedSubCategory.startsWith("All") ||
        g.subCategory === selectedSubCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.badge.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSub && matchesSearch;
    });
  }, [currentDetail, selectedSubCategory, searchQuery]);



  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb Hero */}
      <section className="relative h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: "url('/breadcum-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 space-y-4 max-w-4xl mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5BC242]/20 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Licence No.: LCFWD2023100392</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none font-serif">
            {selectedCategory === "All" ? "Our Products & Technicals" : selectedCategory}
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-medium max-w-2xl mx-auto">
            {selectedCategory === "All"
              ? "Official technical catalog of 61 formulations: Water Soluble Grades, PGR Formulations, Chelated Micronutrients, and Oxide Micronutrients."
              : currentDetail?.subtitle ||
              "Comprehensive technical specifications, formulations, and application guides."}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 pt-2">
            <Link href="/" className="hover:text-[#69D34F] transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <button
              onClick={() => handleSelectCategory("All")}
              className="hover:text-[#69D34F] transition-colors cursor-pointer"
            >
              Products
            </button>
            {selectedCategory !== "All" && (
              <>
                <span className="text-white/40">/</span>
                <span className="text-[#69D34F]">{selectedCategory}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Official Credentials Banner */}
      <section className="bg-[#0D4E22] border-y border-[#5BC242]/30 py-3 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#69D34F]" />
            <span className="font-semibold text-gray-200">
              GREENGOBE AGROCHEMICAL INDUSTRIES — Wakad, Pune, Maharashtra
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#FDF0B4]">
              <FileCheck2 className="w-3.5 h-3.5" />
              Licence: LCFWD2023100392
            </span>
            <a
              href="tel:9325466881"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#69D34F]" />
              +91 93254 66881
            </a>
            <a
              href="mailto:greenglobeimports@gmail.com"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#69D34F]" />
              greenglobeimports@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <main className="flex-1 bg-[#FAF8F2] py-14 md:py-20 px-4 sm:px-6 lg:px-8 select-none">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Category Switcher Menu */}
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs ${isSelected
                    ? "bg-[#0D4E22] text-white shadow-md scale-105 ring-2 ring-[#5BC242]/50"
                    : "bg-white text-gray-700 border border-gray-200/80 hover:bg-[#FAF8F2] hover:text-black hover:border-gray-400"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* VIEW 1: ALL PRODUCTS OVERVIEW */}
          {selectedCategory === "All" && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D4E22] bg-[#5BC242]/15 px-4 py-1.5 rounded-full">
                  61 Total Technical Formulations
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-serif">
                  Bulk Fertilizer Raw Materials & Formulations
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leading Importer, Manufacturer and Bulk Supplier of premium fertilizer raw materials.
                  Click on any category card below to view all individual technical grades, purity levels,
                  and specifications.
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map((product) => {
                  const IconComp = product.icon;
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                    >
                      {/* Image Surface with Category Badge */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#0D4E22] shadow-xs">
                          {product.badge}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-xs">
                          {product.itemCount}
                        </div>
                      </div>

                      {/* Product Details Box */}
                      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                          <div
                            className={`flex items-center gap-2 ${product.iconColor || "text-[#469A35]"
                              }`}
                          >
                            <IconComp className="w-4 h-4" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              Assayed Quality Guaranteed
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-[#0D4E22] tracking-tight leading-snug group-hover:text-[#469A35] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed font-medium">
                            {product.desc}
                          </p>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                              Supply Mode
                            </span>
                            <span className="text-xs font-bold text-gray-800">
                              {product.price}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 pt-1">
                            {categoryDetails[product.category] ? (
                              <button
                                onClick={() => handleSelectCategory(product.category)}
                                className="inline-flex items-center justify-center py-2.5 px-3 bg-[#0D4E22] hover:bg-[#093718] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs group-hover:shadow-md gap-1.5"
                              >
                                <span>View Technicals</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <a
                                href={`/contact?subject=${encodeURIComponent(
                                  product.name
                                )}`}
                                className="inline-flex items-center justify-center py-2.5 px-3 bg-[#0D4E22] hover:bg-[#093718] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs group-hover:shadow-md gap-1.5"
                              >
                                <span>Get Details</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            )}

                            <a
                              href={`/contact?subject=${encodeURIComponent(
                                product.name
                              )}`}
                              className="inline-flex items-center justify-center py-2.5 px-3 bg-[#FDF0B4] hover:bg-[#fae68f] text-black text-xs font-bold rounded-xl transition-all shadow-xs gap-1.5"
                              title="Inquire about this product"
                            >
                              <ShoppingCart className="w-3.5 h-3.5" />
                              <span>Inquire</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VIEW 2: DEDICATED CATEGORY DETAILS (When a specific category tab is clicked) */}
          {selectedCategory !== "All" && currentDetail && (
            <div className="space-y-14 animate-fadeIn">
              {/* Top Action / Back Button Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
                <button
                  onClick={() => handleSelectCategory("All")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50 hover:text-[#0D4E22] transition-colors cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Categories</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  <span>Category:</span>
                  <span className="px-3 py-1 bg-[#0D4E22] text-white rounded-full">
                    {selectedCategory}
                  </span>
                  <span className="px-2.5 py-1 bg-[#5BC242]/20 text-[#0D4E22] rounded-full">
                    {currentDetail.grades.length} Grades Listed
                  </span>
                </div>
              </div>

              {/* Hero Overview Showcase */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#5BC242]/15 border border-[#5BC242]/30 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#0D4E22]">
                    <Sparkles className="w-3.5 h-3.5 text-[#469A35]" />
                    <span>{currentDetail.badge}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D4E22] font-serif tracking-tight leading-tight">
                    {currentDetail.title}
                  </h2>

                  <p className="text-base sm:text-lg font-semibold text-gray-700 leading-snug">
                    {currentDetail.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {currentDetail.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0D4E22] hover:bg-[#093718] text-white font-bold rounded-2xl text-sm transition-all shadow-md gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Request Bulk Quote & COA</span>
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FDF0B4] hover:bg-[#fae68f] text-black font-bold rounded-2xl text-sm transition-all shadow-xs gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Contact Technical Desk</span>
                    </a>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                    <Image
                      src={currentDetail.primaryImage}
                      alt={currentDetail.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center group-hover:scale-104 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[11px] font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#69D34F]" />
                        Lab Assayed • Licence: LCFWD2023100392
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-Category Filter and Search Bar */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D4E22] bg-[#5BC242]/15 px-3.5 py-1 rounded-full">
                      Technical Catalog ({filteredGrades.length} Products)
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif mt-2">
                      Available Grades & Technical Specifications
                    </h3>
                  </div>

                  {/* Live Search Input */}
                  <div className="relative w-full md:w-72">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search grade, role, or technical..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5BC242] text-gray-800 placeholder-gray-400"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* Subcategory Filter Pills */}
                {currentDetail.subCategories && currentDetail.subCategories.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
                      <Filter className="w-3 h-3" /> Sub-Group:
                    </span>
                    {currentDetail.subCategories.map((sub) => {
                      const isSubActive = selectedSubCategory === sub;
                      return (
                        <button
                          key={sub}
                          onClick={() => setSelectedSubCategory(sub)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-2xs ${isSubActive
                            ? "bg-[#0D4E22] text-white shadow-xs ring-1 ring-[#5BC242]/50"
                            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Technical Grades Grid */}
                {filteredGrades.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-3">
                    <p className="text-base font-bold text-gray-800">
                      No matching technicals found for &quot;{searchQuery}&quot;
                    </p>
                    <p className="text-xs text-gray-500">
                      Try searching with another formulation name or click below to reset.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedSubCategory("All");
                      }}
                      className="inline-flex items-center px-4 py-2 bg-[#0D4E22] text-white text-xs font-bold rounded-xl"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGrades.map((grade, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#5BC242]/50 group"
                      >
                        {/* Card Image Section */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                          <Image
                            src={getGradeImage(grade, selectedCategory)}
                            alt={grade.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 380px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                          <div className="absolute top-3 left-3">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#0D4E22] shadow-xs">
                              {grade.badge}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-xs text-white">
                              Grade #{idx + 1}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2.5">
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#0D4E22] transition-colors leading-snug">
                              {grade.name}
                            </h4>
                            <p className="text-xs font-bold text-[#469A35]">
                              {grade.role}
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                              {grade.desc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-gray-500">
                              Bulk Technical / Formulated
                            </span>
                            <a
                              href={`/contact?grade=${encodeURIComponent(
                                grade.name
                              )}`}
                              className="inline-flex items-center text-xs font-bold text-[#0D4E22] hover:text-[#469A35] gap-1"
                            >
                              <span>Inquire</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}


        </div>
      </main>

      <Footer />
    </div>
  );
}
