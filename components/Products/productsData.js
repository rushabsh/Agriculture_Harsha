import { Droplet, Sprout, FlaskConical, TestTube } from "lucide-react";

export const categories = [
  "All",
  "Water Soluble Fertilizers",
  "PGR Grades",
  "Chelated Micronutrients",
  "Oxide Form Micronutrients",
];

export const categoryDetails = {
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
    primaryImage: "/NPK 191919.webp",
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
          src: "/NPK 191919.webp",
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
        image: "/NPK 191919.webp",
        desc: "FEATURES:\n• Provides a balanced ratio of nitrogen, phosphorus, and potassium, essential for various plant functions.\n• Dissolves easily in water, making it readily available for plant uptake through roots or leaves.\n• Suitable for a wide range of crops and can be applied through different methods such as drip irrigation, foliar sprays, and soil drenching.\n• Can contribute to increased crop yields and improved quality.\n\nCOMPOSITION:\n• Nitrogen (As N) : 19.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 19.0% w/w min\n• Total Soluble Potassium (as K₂O) : 19.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 13:00:45 (Potassium Nitrate)",
        role: "Fruit Sizing & Sugar Translocation",
        image: "/NPK 130045.webp",
        desc: "FEATURES:\n• Potassium Nitrate supports flowering and fruiting, resulting in increased yields.\n• Dissolves easily in water, making it readily available for plant uptake through roots or leaves.\n• NPK 13:00:45 is particularly beneficial during these stages as it supports flowering, enhances fruit development, and improves fruit quality.\n• It supports the development of a healthy root system.\n\nCOMPOSITION:\n• Nitrogen (As N) : 13.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 00.0% w/w min\n• Total Soluble Potassium (as K₂O) : 45.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 13:40:13",
        role: "Early Root & Bloom Formation",
        image: "/NPK 134013.webp",
        desc: "FEATURES:\n• It is particularly beneficial during the early flowering and fruiting stages when phosphorus is required in higher amounts.\n• Dissolves easily in water, making it readily available for plant uptake through roots or leaves.\n• Promotes healthy vegetative growth.\n• Stimulates root development.\n• Helps reduce flower dropping.\n• Improves plant resistance to diseases and pests.\n• Enhances fruit quality, weight, color, and size.\n\nCOMPOSITION:\n• Nitrogen (As N) : 13.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 40.0% w/w min\n• Total Soluble Potassium (as K₂O) : 13.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 12:61:00 (MAP - Monoammonium Phosphate)",
        role: "Starter & Seedling Establishment",
        image: "/NPK 126100.webp",
        desc: "FEATURES:\n• The high phosphorus content is important for establishing a strong root system, especially during the early stages of plant growth.\n• It is highly soluble in water, making it suitable for drip irrigation.\n• Phosphorus plays an essential role in flower and fruit development.\n• Suitable for a wide range of crops including vegetables, fruits, and ornamentals.\n\nCOMPOSITION:\n• Nitrogen (As N) : 12.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 61.0% w/w min\n• Total Soluble Potassium (as K₂O) : 00.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:52:34 (MKP - Monopotassium Phosphate)",
        role: "Pre-Bloom & Flower Induction",
        image: "/NPK 005234.webp",
        desc: "FEATURES:\n• This fertilizer is typically low in chloride, sodium, and other harmful materials, making it safe for crops.\n• It can be used in various irrigation systems and for a wide range of crops, including fruits, vegetables, cereals, and more.\n• It can enhance fruit size, shelf life, and overall quality.\n• The water-soluble formula ensures quick uptake by plants for immediate benefits.\n• Suitable for a wide range of plants, including flowers, fruits, and vegetables.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 52.0% w/w min\n• Total Soluble Potassium (as K₂O) : 34.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:00:50 (SOP - Potassium Sulphate)",
        role: "Fruit Firmness, Luster & Shelf Life",
        image: "/NPK 000050.webp",
        desc: "FEATURES:\n• NPK 00:00:50 can improve the plant's ability to absorb other essential nutrients. It dissolves readily in water, making it suitable for fertigation.\n• Potassium is essential for fruit development, and this fertilizer helps enhance fruit size, color, and overall quality.\n• Potassium helps plants withstand drought and other environmental stresses.\n• NPK 00:00:50 is suitable for a wide range of crops, including fruits, vegetables, flowers, and field crops.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 00.0% w/w min\n• Total Soluble Potassium (as K₂O) : 50.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:60:20",
        role: "High-Phosphorus Bloom Accelerator",
        image: "/NPK 006020.webp",
        desc: "FEATURES:\n• It is primarily used to support flowering, fruit development, and overall plant health during critical growth stages.\n• High phosphorus content supports root development.\n• The balanced nutrient ratio promotes better flower and fruit set.\n• Potassium helps plants cope with environmental stress.\n• Helps reduce flower dropping.\n• It is commonly used on fruit crops, vegetables, flowers, and ornamental plants.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 60.0% w/w min\n• Total Soluble Potassium (as K₂O) : 20.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "NPK 00:00:23",
        role: "Rapid Potassium Delivery Formulation",
        image: "/NPK 000023.webp",
        desc: "FEATURES:\n• It dissolves easily in water.\n• Supports the development of healthy and high-quality fruits.\n• Helps increase overall yield and improves the quality of harvested produce.\n• Strengthens the plant and helps it withstand environmental stressors.\n• It is suitable for various crops, including vegetables, fruits, and other field crops during key growth stages.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 00.0% w/w min\n• Total Soluble Potassium (as K₂O) : 23.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },
      {
        name: "Calcium Nitrate",
        role: "Cell Wall Rigidity & Tissue Strength",
        image: "/Calcium Nitrate.webp",
        desc: "FEATURES:\n• It is available in granular, liquid, and prilled forms, all of which are water-soluble.\n• By strengthening cell walls and improving nutrient uptake, it can also support root growth and development.\n• It can improve the uptake of other essential nutrients like potassium, magnesium, and other cations from the soil.\n• By strengthening cell walls and improving overall plant health, it can help prevent fruit cracking.\n\nCOMPOSITION:\n• Total Nitrogen (Ammoniacal & Nitrate Form) : 15.5% w/w min\n• Water Soluble Calcium (as Ca) : 50.0% w/w min\n• Nitrate Nitrogen (as N) : 14.5% w/w min\n• Matter Insoluble In Water : 2.5% w/w min\n\nDose: 2 To 3 Kg per Acre",
        badge: "Regular Grade",
        subCategory: "Regular Grades (9)",
      },

      // Polyphosphate Grades (4 items)
      {
        name: "00:42:47 (Special Polyphosphate Grade)",
        role: "Extended Phosphate Availability",
        image: "/004247.webp",
        desc: "FEATURES:\n• This formulation is designed to promote flowering, fruit setting, and overall crop productivity, particularly in fruit-bearing and flowering plants. It also supports root development and helps plants tolerate various stresses.\n• The high levels of phosphorus and potassium are important for plant energy transfer, root development, and sugar synthesis.\n• Potassium helps strengthen plant structures.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 42.0% w/w min\n• Total Soluble Potassium (as K₂O) : 47.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },
      {
        name: "00:40:44 (Special Polyphosphate Grade)",
        role: "Non-Clogging Fertigation P-K",
        image: "/NPK 004044.webp",
        desc: "FEATURES:\n• This balanced blend of macronutrients and micronutrients supports various plant physiological processes, promoting healthy growth, improved yield, and better quality of produce.\n• Specifically, iron plays an important role in chlorophyll synthesis, enhancing photosynthesis and helping prevent chlorosis.\n• The 100% water-soluble nature ensures rapid and efficient nutrient uptake by plants, reducing waste and improving availability.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 40.0% w/w min\n• Total Soluble Potassium (as K₂O) : 44.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },
      {
        name: "00:33:65 (Special Polyphosphate Grade)",
        role: "Ultra-Potassium Polyphosphate Matrix",
        image: "/003365.webp",
        desc: "FEATURES:\n• The \"TE\" indicates the presence of trace elements, which are essential micronutrients for plant health.\n• This specific NPK ratio (0-33-65) is designed to support flowering, fruiting, and overall plant vigor while minimizing vegetative growth.\n• These are micronutrients like iron, zinc, manganese, etc., which are important for various enzymatic reactions and overall plant metabolism. They are often chelated (complexed with organic molecules) to improve their availability to plants.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 33.0% w/w min\n• Total Soluble Potassium (as K₂O) : 65.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },
      {
        name: "00:43:56 (Special Polyphosphate Grade)",
        role: "Balanced Soluble Polyphosphate",
        image: "/004356.webp",
        desc: "FEATURES:\n• This formulation is particularly high in potassium, making it suitable for crops requiring this nutrient, especially during fruit development and maturation.\n• The trace elements (TE) ensure a balanced supply of micronutrients for optimal plant health and growth.\n• The fertilizer can promote vigorous root development, enhance flowering and fruit set, improve fruit quality and yield, and increase plants' resistance to stress.\n• It is suitable for crops during flowering, fruiting, and maturation stages, including fruits, vegetables, flowers, and ornamentals.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 43.0% w/w min\n• Total Soluble Potassium (as K₂O) : 56.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Polyphosphate",
        subCategory: "Polyphosphate Grades (4)",
      },

      // Oxide Grades (9 items)
      {
        name: "00:09:46 (Special Oxide Grade)",
        role: "Concentrated Potassium Oxide Blend",
        image: "/000946.webp",
        desc: "FEATURES:\n• This specific formulation (00:09:46) is high in potassium and phosphorus, with no nitrogen, making it suitable for crops where potassium and phosphorus are required, especially during fruit development or when nitrogen levels are already sufficient.\n• The absence of nitrogen in this formulation means it is not ideal for promoting vegetative growth (leaf development) but is suitable when nitrogen levels are already adequate or when avoiding excessive nitrogen.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 09.0% w/w min\n• Total Soluble Potassium (as K₂O) : 46.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "08:00:47 (Special Oxide Grade)",
        role: "Nitrogen-Potassium Oxide Complex",
        image: "/080047.webp",
        desc: "FEATURES:\n• This specific formulation is often used to enhance crop quality, particularly by increasing protein and oil content in seeds.\n• It can be applied through fertigation (mixing with irrigation water) or foliar spray.\n• This fertilizer often includes sulphur (S), which enhances the effectiveness of other nutrients and improves crop quality.\n• Supports improved fruit bearing and quality.\n\nCOMPOSITION:\n• Nitrogen (As N) : 08.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 00.0% w/w min\n• Total Soluble Potassium (as K₂O) : 47.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "10:54:10 (Special Oxide Grade)",
        role: "Ultra-Phosphate Oxide Starter",
        image: "/105410.webp",
        desc: "FEATURES:\n• NPK 10:54:10 is a water-soluble fertilizer primarily used to support root development and flowering in plants.\n• This high phosphorus content (54%) makes it particularly useful during early growth stages, transplanting, and for flowering plants.\n• Potassium plays an important role in overall plant health, including disease resistance and water regulation.\n• It is a popular choice for flowering plants, as phosphorus is essential for strong blooms and fruit production.\n\nCOMPOSITION:\n• Nitrogen (As N) : 10.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 54.0% w/w min\n• Total Soluble Potassium (as K₂O) : 10.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "00:37:37 (Special Oxide Grade)",
        role: "Equi-Ratio P-K Oxide Nutrition",
        image: "/003737.webp",
        desc: "FEATURES:\n• NPK 00:37:37 is a water-soluble fertilizer with a high concentration of phosphorus and potassium.\n• This fertilizer is often used to support root development, increase yield, and improve the overall quality of crops.\n• It is particularly effective during flowering and fruit development to encourage robust growth and development of flowers and fruits.\n• It is suitable for a wide range of crops, including agricultural crops, flowers, trees, and grasses.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 37.0% w/w min\n• Total Soluble Potassium (as K₂O) : 37.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "00:48:47 (Special Oxide Grade)",
        role: "High-Density P-K Oxide Grade",
        image: "/004847.webp",
        desc: "FEATURES:\n• NPK 00:48:47 is a water-soluble fertilizer blend primarily composed of Phosphorus (P) and Potassium (K), with no nitrogen (N).\n• It is used to support flowering, fruit setting, and overall plant energy metabolism, particularly when nitrogen is already sufficient.\n• Potassium helps improve fruit size, color, and shelf life.\n• It is often recommended for fruits, vegetables, and other crops where nitrogen levels are adequate.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 48.0% w/w min\n• Total Soluble Potassium (as K₂O) : 47.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "00:44:29 (Special Oxide Grade)",
        role: "High-Phosphate Oxide Formulation",
        image: "/004429.webp",
        desc: "FEATURES:\n• It is a controlled-release fertilizer, meaning the nutrients are released gradually over time.\n• This type of fertilizer is designed to dissolve easily in water, making it suitable for application through irrigation systems or as a foliar spray.\n• NPK 00:44:29 can improve soil fertility, support root growth, and increase crop yields and overall quality.\n• It can be used for various crops, including vegetables, fruits, and ornamental plants.\n\nCOMPOSITION:\n• Nitrogen (As N) : 00.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 44.0% w/w min\n• Total Soluble Potassium (as K₂O) : 29.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "30:10:10 (Special Oxide Grade)",
        role: "High-Nitrogen Vegetative Booster",
        image: "/301010.webp",
        desc: "FEATURES:\n• It is a water-soluble fertilizer with a high nitrogen content, primarily used during the vegetative growth phase to support strong foliage and stem development.\n• This specific ratio is often preferred for leafy vegetables and other plants where robust leaf growth is desired.\n• Commonly used for leafy greens (lettuce, spinach), tomatoes, peppers, and fruit trees.\n• Easily dissolves in water for foliar or drip irrigation application.\n\nCOMPOSITION:\n• Nitrogen (As N) : 30.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 10.0% w/w min\n• Total Soluble Potassium (as K₂O) : 10.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "05:55:17 (Special Oxide Grade)",
        role: "Flower Burst & Root Mass Accelerator",
        image: "/055517.webp",
        desc: "FEATURES:\n• It's designed to support strong root development and early plant growth, particularly beneficial for crops that require high phosphorus levels.\n• It often contains trace elements (TE) like iron, manganese, zinc, copper, boron, and molybdenum.\n• The high phosphorus content (55%) is important for root development, flowering, and overall plant vigor.\n• NPK 05:55:17 is suitable for various crops and can be applied during different growth stages, including the early stages for root development and during flowering and grain filling.\n\nCOMPOSITION:\n• Nitrogen (As N) : 05.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 55.0% w/w min\n• Total Soluble Potassium (as K₂O) : 17.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
        badge: "Oxide Grade",
        subCategory: "Oxide Grades (9)",
      },
      {
        name: "14:48:00 (Special Oxide Grade)",
        role: "Nitrogen-Phosphate Oxide Starter",
        image: "/144800.webp",
        desc: "FEATURES:\n• It's designed to support strong root development, flowering, and fruit setting in plants.\n• The fertilizer also contains trace elements for enhanced nutrient absorption and can help reduce nutrient imbalances.\n• The fertilizer also includes trace elements like iron, manganese, and zinc, which are important for nutrient absorption and utilization by the plant.\n\nCOMPOSITION:\n• Nitrogen (As N) : 14.0% w/w min\n• Water Soluble Phosphorus (as P₂O₅) : 48.0% w/w min\n• Total Soluble Potassium (as K₂O) : 00.0% w/w max\n• Matter Insoluble In Water : 0.5% w/w max\n• Moisture : 0.5% w/w max\n\nDose: 2 To 3 Kg per Acre",
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
        desc: "FEATURES:\n• It is a rich source of humic and fulvic acids, along with potassium, and is used to support plant growth and improve soil health.\n• Improves soil structure, water retention, and aeration, making it more favorable for plant growth.\n• Helps neutralize acidic and alkaline soils, bringing the pH closer to the ideal range for plant growth.\n• Helps balance soil pH by neutralizing acidic and alkaline conditions, creating a better environment for plant growth.\n\nCOMPOSITION:\n• Humic Acid (Dry Basis): 65.0%\n• Fulvic Acid (Dry Basis): 6 - 8%\n• Potassium Content (as K₂O): 4 - 6%\n• Water Solubility: 99%\n• Flacks Size: 1.0 - 1.5 mm\n• PH: 09 - 10\n\nDose: 500 gm - 1Kg Per Acre",
        badge: "Humate Powder",
        subCategory: "Humic Series (2)",
        image: "/Potassium Humate Powder.avif",
      },
      {
        name: "Amino Acid 80% (Soya Protein Base)",
        role: "Protein Synthesis & Abiotic Stress Resistance",
        desc: "FEATURES:\n• It is a plant growth enhancer obtained through enzymatic hydrolysis of soy protein, containing a high level of free amino acids.\n• Amino acids serve as building blocks for proteins and enzymes, supporting improved nutrient absorption and utilization by plants.\n• Amino acids encourage root development, flowering, and fruiting, resulting in increased crop yield.\n• Soya-based amino acids are considered a safe and sustainable alternative to certain chemical fertilizers.\n\nCOMPOSITION:\n• Amino Acid: 80.0%\n• Organic Nitrogen (Dry Basis): 13 - 15%\n• Water Solubility: 99%\n• Moisture: 5.0%\n• PH: 4.5 - 6.5\n• Ash Content: 5.0%\n\nDose: 500 gm - 1Kg Per Acre.",
        badge: "80% Powder",
        subCategory: "Amino Acids (1)",
        image: "/Amino-Acid-80.avif",
      },
      {
        name: "Fulvic Acid",
        role: "Micro-Nutrient Transporter & Natural Chelation",
        desc: "FEATURES:\n• Fulvic acid is a natural organic acid obtained from the decomposition of organic matter, such as plants.\n• It is an important component of humic substances and is recognized for its high biological activity.\n• Fulvic acid has a low molecular weight, allowing it to be easily absorbed by plants.\n• Fulvic acid works as a chelating agent, binding with nutrients in the soil and making them more readily available for plant absorption.\n• By enhancing nutrient availability and plant health, fulvic acid can help improve crop yields.\n\nCOMPOSITION:\n• Fulvic Acid: 80.0%\n• Potassium Content (as K₂O): 10 - 12%\n• Water Solubility: 100%\n• Moisture: 5 - 8%\n• PH: 5 - 7\n\nDose: 500 gm - 1Kg Per Acre.",
        badge: "Active Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Fulvic-Acid-80.avif",
      },
      {
        name: "Black Seaweed Powder (Phytohormone Bio-Extract)",
        role: "Phytohormone Bio-Extract",
        desc: "FEATURES:\n• It is primarily used to support flowering, fruit development, and overall plant health during important growth stages.\n• High phosphorus content helps support healthy root development.\n• The balanced nutrient ratio encourages better flower and fruit set.\n• Potassium helps plants manage environmental stress.\n• Helps reduce flower dropping.\n• It is commonly used for fruit crops, vegetables, flowers, and ornamental plants.\n\nDose: 500 gm - 1Kg Per Acre.",
        badge: "Seaweed Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Black Seaweed Powder.avif",
      },
      {
        name: "Black Seaweed Powder(Natural Cytokinin & Root Vigor Extract)",
        role: "Natural Cytokinin & Root Vigor Extract",
        desc: "FEATURES:\n• It is mainly used to support root development, plant growth, and overall plant vigor during important growth stages.\n• Natural cytokinin content helps encourage healthy plant growth and development.\n• Supports stronger root development and improved nutrient utilization.\n• Helps promote better flowering and fruit development.\n• Supports plants in managing environmental stress.\n• It is commonly used for fruit crops, vegetables, flowers, and ornamental plants.\n\nDose: 500 gm - 1Kg Per Acre.",
        badge: "Seaweed Powder",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Brown Seaweed Powder.avif",
      },
      {
        name: "Black Seaweed Flakes",
        role: "Root Proliferation & Chlorophyll Boost",
        desc: "FEATURES:\n• It dissolves easily in water.\n• Supports the development of healthy and high-quality fruits.\n• Helps increase overall yield and improves the quality of harvested produce.\n• Strengthens the plant and helps it tolerate environmental stress.\n• It is suitable for various crops, including vegetables, fruits, and other field crops during important growth stages.\n\nCOMPOSITION:\n• Algenic Acid: 14 - 15%\n• Potassium Content (as K₂O): 5.0%\n• Water Solubility: 100%\n• Moisture: 13 - 15%\n• PH: 10\n\nDose: 500 gm - 1Kg Per Acre.",
        badge: "Seaweed Flakes",
        subCategory: "Fulvic & Seaweed (5)",
        image: "/Black Seaweed Powder.avif",
      },
      {
        name: "Green Seaweed Powder",
        role: "Enzymatic Metabolic Booster",
        desc: "FEATURES:\n• It is primarily used as an enzymatic metabolic booster to support plant growth and overall plant health.\n• Helps support natural metabolic activities within the plant.\n• Promotes healthy root development and improves nutrient utilization.\n• Supports better flowering, fruit development, and overall crop growth.\n• Helps plants manage environmental stress during important growth stages.\n• It is commonly used for fruit crops, vegetables, flowers, and ornamental plants.\n\nDose: 500 gm - 1Kg Per Acre.",
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
    primaryImage: "/EDDHAFerrous.webp",
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
        image: "/EDTAZinc.webp",
        desc: "FEATURES:\n• It is a chelated micronutrient fertilizer containing 12% zinc, a water-soluble powder used to prevent and correct zinc deficiency in crops.\n• A water-soluble, powder-based fertilizer that supplies essential zinc to plants.\n• The EDTA chelation helps keep zinc readily available to plants, especially under challenging soil conditions.\n• Essential for chlorophyll synthesis, enzyme activity, and hormone production, supporting improved growth, root development, and higher crop yields.\n\nCOMPOSITION:\n• Zinc Content (expressed as Zn) : 12.0% (% by weight Minimum in the form of Zn-EDTA)\n• pH (5% Solution) : 6.0 – 6.5%\n• Lead (as Pb) % by weight Minimum : 0.003%\n• Cadmium (as Cd) % by weight Maximum : 0.0025%\n• Arsenic (as As) % by weight Maximum : 0.01%\n\nDose: 1 Gram per Liter",
        badge: "EDTA Zn 12%",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Ferrous 12%",
        role: "Chlorophyll Synthesis & Electron Transfer",
        image: "/ChelatedFerrous.webp",
        desc: "FEATURES:\n• A water-soluble fertilizer containing 12% iron.\n• The iron is \"chelated\" by EDTA (Ethylene diamine tetra acetic acid), a chemical agent that keeps the iron stable and accessible to plants.\n• The chelating agent makes iron available to plants even in soils with high pH levels, where iron might otherwise become locked up and unavailable.\n• It is commonly used in foliar sprays or soil applications for various crops to support growth, yield, and overall plant health.\n\nCOMPOSITION:\n• Iron Content (expressed as Fe) : 12.0% (% by weight Minimum in the form of Fe-EDTA)\n• pH (5% Solution) : 5.5 – 6.5%\n• Lead (as Pb) % by weight Minimum : 0.003%\n• Cadmium (as Cd) % by weight Maximum : 0.0025%\n• Arsenic (as As) % by weight Maximum : 0.01%\n\nDose: 1 Gram per Liter",
        badge: "EDTA Fe 12%",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Copper 12%",
        role: "Lignin Synthesis & Respiration Enzymes",
        image: "/EDTACopper.webp",
        desc: "FEATURES:\n• EDTA Copper is a chelated form of the micronutrient copper, where copper ions are bonded to EDTA (ethylenediaminetetraacetic acid) to create a stable, water-soluble complex.\n• Primarily used in agriculture as a micronutrient fertilizer, it helps prevent and correct copper deficiencies in plants by supporting chlorophyll formation, enzyme activity, and overall plant growth.\n• It stimulates enzymes that are important for growth and supports the metabolism of proteins and carbohydrates.\n\nCOMPOSITION:\n• Copper Content (expressed as Cu) : 12.00% (% by weight Minimum in the form of Cu-EDTA)\n• pH (5% Solution) : 5.5 – 6.5%\n• Lead (as Pb) % by weight Minimum : 0.003%\n• Cadmium (as Cd) % by weight Maximum : 0.0025%\n• Arsenic (as As) % by weight Maximum : 0.01%\n• Matter Insoluble In Water % By Weight Max. : 0.5%\n\nDose: 1 Gram per Liter",
        badge: "EDTA Cu 12%",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Manganese 12%",
        role: "Nitrogen Assimilation & Water Photolysis",
        image: "/EDTAManganese.webp",
        desc: "FEATURES:\n• It is a water-soluble product used to prevent manganese deficiency across various crops, supporting vital plant functions such as photosynthesis, enzyme activity, nitrogen metabolism, and root development, especially in hydroponic systems.\n• The EDTA chelate makes manganese readily available for plant absorption, improving its bioavailability and uptake efficiency.\n• Helps plants become more resistant to stress and root pathogens.\n\nCOMPOSITION:\n• Manganese Content (expressed as Mn) : 12.0% (% by weight Minimum in the form of Mn-EDTA)\n• pH (5% Solution) : 6.0 – 7.0%\n• Lead (as Pb) % by weight Minimum : 0.003%\n• Cadmium (as Cd) % by weight Maximum : 0.0025%\n• Arsenic (as As) % by weight Maximum : 0.01%\n• Matter Insoluble In Water % By Weight Max. : 0.5%\n\nDose: 1 Gram per Liter",
        badge: "EDTA Mn 12%",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Calcium 10%",
        role: "Direct Foliar Calcium Uptake",
        image: "/EDTACalcium.webp",
        desc: "10% organically chelated calcium that bypasses calcium mobility bottlenecks to fortify growing tips, flowers, and fruit skin.",
        badge: "EDTA Ca 10%",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Magnesium 6%",
        role: "Central Chlorophyll Core Delivery",
        image: "/EDTAMagnesium6.webp",
        desc: "6% chelated magnesium supporting the core photosynthetic molecule, preventing premature lower leaf yellowing and senescence.",
        badge: "EDTA Mg 6%",
        subCategory: "Single Elements (7)",
      },
      {
        name: "EDTA Boron 20%",
        role: "Pollination & Pollen Tube Viability",
        image: "/EDTABORON.webp",
        desc: "High-percentage soluble chelated/complexed boron powder essential for flower pollen viability, sugar translocation, and preventing fruit cracking.",
        badge: "Boron 20% ",
        subCategory: "Single Elements (7)",
      },

      // Synergistic Combos (4 items)
      {
        name: "EDTA Calcium + Boron (10% + 2%)",
        role: "Cell Wall Rigidity & Fruit Firmness",
        image: "/EDTACalcium+Boron.webp",
        desc: "FEATURES:\n• EDTA Calcium + Boron is an agrochemical product combining the secondary nutrient calcium and the micronutrient boron into a water-soluble, chelated form for plant use.\n• EDTA (ethylenediaminetetraacetic acid) chelates calcium and boron, keeping them stable and readily available for plant uptake in various soil and foliar applications, supporting crop yield, quality, and stress resistance.\n• The combined effects of calcium and boron improve a plant's ability to withstand stresses such as drought and heat.\n\nCOMPOSITION:\n• Calcium Content (expressed as Ca) : 01% to 11% % by weight\n• Boron Content (expressed as B) : 0.5% to 20% % by weight\n\nDose: 1 Gram per Liter",
        badge: "Ca 10% + B 2%",
        subCategory: "Synergistic Combos (4)",
      },
      {
        name: "EDTA Cal + Mg + Boron (6% + 6% + 2%)",
        role: "Triple Secondary & Micronutrient Defense",
        image: "/EDTACALMGBORON.webp",
        desc: "FEATURES:\n• It is a chelated micronutrient fertilizer for plants, containing EDTA-chelated calcium, magnesium, and boron, which supports plant nutrient absorption, growth, and crop quality.\n• It supports cell elongation, fertilization, and the development of reproductive organs in plants.\n• It helps plants withstand both cold and heat by improving their overall ability to resist climatic conditions.\n• The product is 100% water-soluble, making it easy to dissolve and apply.\n\nCOMPOSITION:\n• Calcium Content (expressed as Ca) : 05% to 15% % by weight\n• Magnesium Content (expressed as Mg) : 02% to 08% % by weight\n• Boron Content (expressed as B) : 01% to 03% % by weight\n\nDose: 1 Gram per Liter",
        badge: "Ca + Mg + B",
        subCategory: "Synergistic Combos (4)",
      },
      {
        name: "EDTA Zinc + Boron (13% + 3%)",
        role: "Vegetative & Reproductive Synergy",
        image: "/EDTAZINCBORON.webp",
        desc: "FEATURES:\n• EDTA Zinc + Boron is an agricultural product combining chelated zinc and boron, essential micronutrients for plant health, into a readily available, water-soluble form for foliar application or soil enrichment.\n• EDTA acts as a chelating agent, binding to the metal ions of zinc and boron, which improves their absorption by plants and helps prevent them from becoming unavailable in the soil, supporting growth, yield, and overall plant quality.\n• Helps prevent visual symptoms, deformations, and reduced growth caused by a lack of zinc and boron.\n\nCOMPOSITION:\n• Zinc Content (expressed as Zn) : 02% to 25% % by weight\n• Boron Content (expressed as B) : 0.15% to 10% % by weight\n\nDose: 1 Gram per Liter",
        badge: "Zn 13% + B 3%",
        subCategory: "Synergistic Combos (4)",
      },
      {
        name: "EDTA Mix Micronutrients G-2",
        role: "State Grade-2 Balanced Chelate",
        image: "/EDTAMIXMICRONUTRINTG-2.webp",
        desc: "FEATURES:\n• EDTA mix micronutrient G2 is a powder fertilizer containing several essential micronutrients like Iron (Fe), Zinc (Zn), Manganese (Mn), Copper (Cu), Boron (B), and Molybdenum (Mo), all chelated with EDTA to support rapid and efficient absorption by plants.\n• This type of fertilizer is used to correct deficiencies, support overall plant health, accelerate growth, and improve fruit and vegetable quality by ensuring plants receive these vital nutrients during critical growth stages.\n• The fertilizer is designed to dissolve completely in water, making it suitable for both foliar sprays and drip irrigation.\n\nCOMPOSITION:\n• Fe : 2.5%\n• Mn : 1.0%\n• Zn : 3.0%\n• Mo : 0.10%\n• Cu : 1.0%\n• B : 0.5%\n\nDose: 1 Gram per Liter",
        badge: "Grade-2 Standard",
        subCategory: "Synergistic Combos (4)",
      },

      // Specialty Drip & Soil (3 items)
      {
        name: "EDDHA Ferrous 6%",
        role: "High-pH Alkaline Soil Iron Chelate",
        image: "/EDDHAFerrous.webp",
        desc: "FEATURES:\n• EDDHA Ferrous 6% is an organic chelated iron fertilizer that supplies plants with soluble iron, essential for chlorophyll and enzyme production, and is effective in high pH soils.\n• It corrects iron chlorosis (yellowing of leaves) by supplying readily absorbed iron to the plant, supporting healthy growth and improving crop quality.\n• The EDDHA chelate protects the iron, making it available for plant uptake and supporting rapid recovery from deficiency symptoms.\n• Suitable for both soil application and use in drip irrigation/fertigation systems.\n\nCOMPOSITION:\n• Ferrous Content (expressed as Fe) : 06.00% % by weight Minimum\n• pH (1% Solution) : 9.0 ± 1.0%\n\nDose: 1 Gram per Liter",
        badge: "Alkaline Soil (pH 9+)",
        subCategory: "Specialty Drip & Soil (3)",
      },
      {
        name: "Mix Micronutrients Drip",
        role: "100% Soluble Drip Fertigation Formula",
        image: "/MIXMICRONUTRIENTDRIP.webp",
        desc: "FEATURES:\n• \"Micronutrient drip\" involves dissolving water-soluble, chelated micronutrient powder in water for drip irrigation, correcting deficiencies and supporting crop health.\n• Helps give fruits and vegetables their desired color and texture.\n• Increases a plant's natural resistance to diseases and pests.\n• Contributes to higher yields of superior quality crops.\n• Addresses a wide range of micronutrient deficiencies in plants.\n\nCOMPOSITION:\n• Zinc (as Zn) % by weight Minimum : 05.00%\n• Ferrous (as Fe) % by weight Minimum : 02.00%\n• Manganese (as Mn) % by weight Minimum : 01.00%\n• Copper (as Cu) % by weight Maximum : 0.5%\n• Boron (as B) % by weight Maximum : 01.00%\n\nDose: 1 Gram per Liter",
        badge: "100% Drip Soluble",
        subCategory: "Specialty Drip & Soil (3)",
      },
      {
        name: "EDTA Mix Micronutrient Grade 1",
        role: "Official FCO Grade-1 Chelate",
        image: "/MIXMICRONUTRIENTGRADE-1.webp",
        desc: "FEATURES:\n• A Mix Micronutrient Grade 1 is a highly concentrated, powdered agricultural fertilizer containing essential trace elements like Zinc (Zn), Iron (Fe), Manganese (Mn), Copper (Cu), Boron (B), and Molybdenum (Mo) in an optimum ratio to support plant growth and development.\n• These nutrients, which are important for processes such as photosynthesis and enzyme activation, are easily absorbed by plants through roots or leaves, helping correct deficiencies and improve overall crop health and yield.\n• Strengthens plant cell walls and supports overall disease resistance.\n\nCOMPOSITION:\n• Fe : 2.5%\n• Mn : 1.0%\n• Zn : 3.0%\n• Mo : 0.10%\n• Cu : 1.0%\n• B : 0.5%\n\nDose: 1 Gram per Liter",
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
    ],
    primaryImage: "/ZINCOXIDE.webp",
    icon: TestTube,
    iconColor: "text-logo-blue",
    specs: [
      { label: "Formulation Type", value: "Suspension Concentrate (SC) / Liquid" },
      { label: "Total Formulations", value: "4 Technical Grades" },
      { label: "Application", value: "Foliar Spray, Drone & Drip" },
      { label: "Packaging", value: "250ml, 500ml, 1L, 5L, 20L Carboys, 25kg" },
    ],
    subCategories: [
      "All Oxide Formulations (4)",
      "Suspension Concentrates & Liquids (4)",
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
    },
    grades: [
      {
        name: "Zinc Oxide 39.5%",
        role: "Ultra-High Density Zinc Suspension (SC)",
        image: "/ZINCOXIDE.webp",
        desc: "FEATURES:\n• Zinc oxide 39.5% refers to agricultural fertilizer products containing 39.5% zinc oxide (ZnO) in a Suspension Concentrate (SC) formulation.\n• This formulation provides a high level of zinc, allowing for a lower dosage compared to other zinc fertilizers.\n• Nanoparticles in the formulation allow for quick absorption by plants while providing a sustained release of zinc over time.\n• It supports the development of a strong and dense root system.\n\nCOMPOSITION:\n• Zinc Content (expressed as Zn) % by weight Minimum : 39.5%\n• pH (5% Solution) : 9.0-10.1\n• Lead (as Pb) % by weight Minimum : 0.003%\n• Cadmium (as Cd) % by weight Maximum : 0.0025%\n• Arsenic (as As) % by weight Maximum : 0.01%\n\nDose: 1 Gram per Liter",
        badge: "Flowable SC 39.5%",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Calcium Oxide 11%",
        role: "Rapid Foliar Calcium Flowable",
        image: "/CalciumOxide1.webp",
        desc: "FEATURES:\n• It is a concentrated, soluble liquid fertilizer with a high concentration of calcium (11%).\n• It provides calcium directly to plants, helping correct deficiencies that restrict active growth.\n• It strengthens plant cell walls, which supports root development and overall plant structure.\n• It can improve the quality of produce and increase its shelf life.\n• It helps plants become more resilient to various stresses.\n\nCOMPOSITION:\n• Calcium Content (expressed as Ca) % by weight Minimum : 11.0%\n• pH (5% Solution) : 9.0-10.1%\n\nDose: 1 Gram per Liter",
        badge: "Liquid 11%",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Boron Liquid 11%",
        role: "Phloem-Mobile Liquid Organo-Boron",
        image: "/BORONLIQUID.webp",
        desc: "FEATURES:\n• A liquid boron 11% product is a micronutrient fertilizer, commonly made with boron ethanolamine, that helps plants correct or prevent boron deficiency.\n• It is water-soluble for easy absorption by crops through foliar application, or it can be applied to the soil.\n• Boron is an important micronutrient for cell wall formation, cell division, fruit and seed development, and the movement of sugars to growing plant parts.\n• It promotes the mobility of calcium within the plant, which is important for preventing disorders such as fruit cracking and rot.\n• The application of boron can increase a plant's drought and heat resistance.\n\nCOMPOSITION:\n• Boron Content (expressed as B) % by weight Minimum : 11.0%\n• pH (5% Solution) : 8.5 - 10.%\n• Lead (as Pb) % by weight Minimum : 0.003%\n• Cadmium (as Cd) % by weight Maximum : 0.0025%\n• Arsenic (as As) % by weight Maximum : 0.01%\n\nDose: 1 Gram per Liter",
        badge: "Soluble Liquid 11%",
        subCategory: "Suspension Concentrates & Liquids (4)",
      },
      {
        name: "Calcium + Boron (6% + 6%)",
        role: "Balanced Liquid Sizing & Firmness Duo",
        image: "/CalciumBoron.webp",
        desc: "FEATURES:\n• Cal + Boron (6%+6%) refers to a plant fertilizer blend supplying both calcium and boron, with these micronutrients present at approximately 6% each, though the exact percentage of calcium may vary, such as 5.7% in IFC Cal-Boron.\n• This water-soluble product supports fruit setting, helps prevent deficiencies, strengthens cell walls, and is applied through drip irrigation or foliar spraying to support crop quality and yield.\n• Calcium and boron work together to support pollination, help prevent premature fruit and flower drop, and improve overall fruit quality.\n\nCOMPOSITION:\n• Calcium Content (expressed as Ca) % by weight : 5.7%\n• Boron Content (expressed as B) % by weight : 6%\n\nDose: 1 Gram per Liter",
        badge: "6% Ca + 6% B",
        subCategory: "Suspension Concentrates & Liquids (4)",
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

export const productsData = [
  {
    id: 1,
    name: "Water Soluble Fertilizers",
    category: "Water Soluble Fertilizers",
    badge: "22 Technical Grades",
    desc: "Complete portfolio of 9 Regular NPK Grades (19:19:19, 13:00:45, 00:52:34, Calcium Nitrate), 4 Polyphosphate Speciality Grades, and 9 Oxide WSF Grades.",
    price: "Bulk / Wholesale Supply",
    image: "/NPK 191919.webp",
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
    image: "/EDDHAFerrous.webp",
    icon: FlaskConical,
    iconColor: "text-logo-red",
    itemCount: "14 Chelates",
  },
  {
    id: 4,
    name: "Oxide Form Micronutrients",
    category: "Oxide Form Micronutrients",
    badge: "4 Formulations",
    desc: "High-density flowable suspensions and technical solutions: Zinc Oxide 39.5% SC, Calcium Oxide 11%, Boron Liquid 11%, and Calcium+Boron (6%+6%).",
    price: "Bulk / Wholesale Supply",
    image: "/ZINCOXIDE.webp",
    icon: TestTube,
    iconColor: "text-logo-blue",
    itemCount: "4 Formulations",
  },
];

// Helper to determine the best photo for each grade card
export const getGradeImage = (grade, category) => {
  if (grade.image) return grade.image;

  const name = (grade.name || "").toLowerCase();

  // Priority exact matching for Water Soluble Fertilizers from public folder:
  if (name.includes("19:19:19") || name.includes("191919")) {
    return "/NPK 191919.webp";
  }
  if (name.includes("13:00:45") || name.includes("130045")) {
    return "/NPK 130045.webp";
  }
  if (name.includes("13:40:13") || name.includes("134013")) {
    return "/NPK 134013.webp";
  }
  if (name.includes("12:61:00") || name.includes("126100")) {
    return "/NPK 126100.webp";
  }
  if (name.includes("00:52:34") || name.includes("005234")) {
    return "/NPK 005234.webp";
  }
  if (name.includes("00:00:50") || name.includes("000050")) {
    return "/NPK 000050.webp";
  }
  if (name.includes("calcium nitrate")) {
    return "/Calcium Nitrate.webp";
  }
  if (name.includes("00:42:47") || name.includes("004247")) {
    return "/004247.webp";
  }
  if (name.includes("00:43:56") || name.includes("004356")) {
    return "/004356.webp";
  }
  if (name.includes("00:09:46") || name.includes("000946")) {
    return "/000946.webp";
  }
  if (name.includes("08:00:47") || name.includes("080047")) {
    return "/080047.webp";
  }
  if (name.includes("10:54:10") || name.includes("105410")) {
    return "/105410.webp";
  }
  if (name.includes("00:37:37") || name.includes("003737")) {
    return "/003737.webp";
  }
  if (name.includes("00:48:47") || name.includes("004847")) {
    return "/004847.webp";
  }
  if (name.includes("00:44:29") || name.includes("004429")) {
    return "/004429.webp";
  }
  if (name.includes("30:10:10") || name.includes("301010")) {
    return "/301010.webp";
  }
  if (name.includes("05:55:17") || name.includes("055517")) {
    return "/055517.webp";
  }
  if (name.includes("14:48:00") || name.includes("144800")) {
    return "/144800.webp";
  }

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

  // Fallbacks by category
  if (category === "PGR Grades") return "/feature-img-01.webp";
  if (category === "Chelated Micronutrients") return "/breadcrumb--1.webp";
  if (category === "Oxide Form Micronutrients") return "/breadcrumb--2.webp";
  return "/h2-1.webp";
};
