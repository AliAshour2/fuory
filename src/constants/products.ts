import fig from "@/assets/images/fruitsandvegetables/fig.webp";
import kiwi from "@/assets/images/fruitsandvegetables/kiwi.webp";
import mango from "@/assets/images/fruitsandvegetables/mango.webp";
import orange from "@/assets/images/fruitsandvegetables/orange.webp";
import watermelon from "@/assets/images/fruitsandvegetables/watermelon.webp";
import redPappers from "@/assets/images/fruitsandvegetables/redpapers.webp";
import yellowPappers from "@/assets/images/fruitsandvegetables/yellowpappers.webp";
import greenPappers from "@/assets/images/fruitsandvegetables/greenpapers.webp";
import sweetPotato from "@/assets/images/fruitsandvegetables/sweetpotato.webp";
import tomato from "@/assets/images/fruitsandvegetables/tomato.webp";
import pomegranate from "@/assets/images/fruitsandvegetables/pomegranate.webp";
import icebergLettuce from "@/assets/images/fruitsandvegetables/iceberg lettuce.webp";
import carrot from "@/assets/images/fruitsandvegetables/carrot.webp";
import cucumber from "@/assets/images/fruitsandvegetables/cucumber.webp";
import strawberry from "@/assets/images/fruitsandvegetables/strawberry.webp";
import frozen2 from "@/assets/images/forzen/forzen2.webp";
import frozen3 from "@/assets/images/forzen/forzen3.webp";
import frozen4 from "@/assets/images/forzen/forzen4.webp";
import frozen6 from "@/assets/images/forzen/forzen6.webp";
import frozen7 from "@/assets/images/forzen/forzen7.webp";
import frozen8 from "@/assets/images/forzen/forzen8.webp";
import frozen9 from "@/assets/images/forzen/forzen9.webp";
import frozen10 from "@/assets/images/forzen/forzen10.webp";

// Import packaging images
import cartonBox from "@/assets/images/packing/sweetpotato/carton.webp";
import plasticBox from "@/assets/images/packing/sweetpotato/plastic.webp";
import cucumberBox from "@/assets/images/fruitsandvegetables/cucmberbox.webp";
import orangesplasticBox from "@/assets/images/fruitsandvegetables/oranges/packing/orangeboxs.webp";
import sweetPotatoCartonBin from "@/assets/images/packing/sweetpotato/cartonBinSp.webp";
import sweetPotatoWoodenBin from "@/assets/images/packing/sweetpotato/woodenBin.webp";

import strawberryBox from "@/assets/images/fruitsandvegetables/strawberry/strawberry-box.webp";
import strawberryplasticPunnet from "@/assets/images/fruitsandvegetables/strawberry/strawberry-plastic-punnet.webp";

import beuaregard from "@/assets/images/fruitsandvegetables/sweetpotatos/beuaregard.webp";
import bellevue from "@/assets/images/fruitsandvegetables/sweetpotatos/bellevue.webp";

export const products = [
  {
    id: "Sweet Potato",
    name: "Sweet Potato",
    image: sweetPotato,
    description: "Fresh and healthy sweet potatoes",
    alt: "Egyptian Sweet Potato for export",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: false },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    varieties: [
      {
        id: "Beauregard",
        name: "Beauregard",
        image: beuaregard,
        alt: "Beauregard sweet potato – premium Egyptian variety with rich taste",
      },
      {
        id: "Bellevue",
        name: "Bellevue",
        image: bellevue,
        alt: "Bellevue sweet potato – high-quality Egyptian variety with excellent texture",
      },
    ],

    storageAdvice: {
      transport: "Transport at ambient temperature between 13-15°C",
      shop: "Store in a cool, dry place away from direct sunlight",
    },
    growingInfo: {
      title: "Premium Sweet Potatoes from Egypt",
      description:
        "Our sweet potatoes are grown in the fertile soils of Egypt, where the perfect climate conditions allow for year-round cultivation. We use sustainable farming practices to ensure the best quality and taste.",
    },
    packagingOptions: [
      {
        id: "Carton Box",
        name: "Carton Box",
        image: cartonBox,
        description: "5KG , 6KG , Client Request",
        alt: "corrugated carton box for fresh sweet potatoes packaging",
        weight: "10kg",
        dimensions: "40x30x25cm",
      },
      {
        id: "Plastic Box",
        name: "Plastic Box",
        image: plasticBox,
        description: "5KG , 6KG , Client Request",
        alt: "reusable plastic crate for bulk sweet potatoes transport ",
        weight: "20kg",
        dimensions: "60x40x30cm",
      },
      {
        id: "Carton Bin",
        name: "Carton Bin",
        image: sweetPotatoCartonBin,
        description: "Client Request",
        alt: "large corrugated carton bin for bulk sweet potatoes transport",
        weight: "50kg",
        dimensions: "varies by client request",
      },
      {
        id: "Wooden Bin",
        name: "Wooden Bin",
        image: sweetPotatoWoodenBin,
        description: "Client Request",
      },
    ],
  },
  {
    id: "Strawberry",
    name: "Strawberry",
    image: strawberry,
    description: "Fresh and juicy Egyptian strawberries",
    alt: "Egyptian Strawberries for export",
    category: "fruit",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: false },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: false },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],

    storageAdvice: {
      transport:
        "Transport at 0-2°C to maintain freshness and prevent bruising",
      shop: "Store in the refrigerator and consume within a few days for best taste",
    },
    growingInfo: {
      title: "Premium Egyptian Strawberries",
      description:
        "Our strawberries are cultivated in the rich, sunlit fields of Egypt, ensuring vibrant color, natural sweetness, and superior quality. Grown using modern, sustainable farming techniques for the finest export-grade produce.",
    },
    packagingOptions: [
      {
        id: "Plastic Punnet",
        name: "Plastic Punnet",
        image: strawberryplasticPunnet,
        description: "250g , 500g , or as per client request",
        alt: "plastic punnet packaging for fresh Egyptian strawberries",
        weight: "0.25kg - 0.5kg",
        dimensions: "15x10x5cm",
      },
      {
        id: "Carton Box",
        name: "Carton Box",
        image: strawberryBox,
        description: "2KG , 4KG , or as per client request",
        alt: "corrugated carton box for bulk strawberry transport",
        weight: "2kg - 4kg",
        dimensions: "40x30x12cm",
      },
    ],
  },
  {
    id: "Iceberg Lettuce",
    name: "Iceberg Lettuce",
    image: icebergLettuce,
    description: "Crisp and fresh iceberg lettuce",
    alt: "Egyptian Iceberg Lettuce for export",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    varieties: [
      {
        id: "Egyptian Iceberg Lettuce",
        name: "Great Lakes",
        image: icebergLettuce,
        alt: "Great Lakes iceberg lettuce – crisp and widely grown Egyptian variety",
      },
    ],

    storageAdvice: {
      transport: "Transport at 0–2°C with high humidity (90–95%)",
      shop: "Store in a refrigerated place, ideally 0–5°C, and keep away from ethylene-producing fruits",
    },
    growingInfo: {
      title: "Premium Iceberg Lettuce from Egypt",
      description:
        "Our iceberg lettuce is cultivated in Egypt’s fertile soil, benefiting from ideal growing conditions for producing crisp, fresh, and high-quality lettuce. Sustainable farming practices guarantee freshness and long shelf life.",
    },
  },
  {
    id: "Carrot",
    name: "Carrot",
    image: carrot,
    description: "Fresh, crunchy, and nutritious carrots",
    alt: "Egyptian Carrots for export",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: true },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    varieties: [
      {
        id: "OrangeCarrot",
        name: "Orange Carrot",
        image: carrot,
        alt: "Orange carrot – fresh and crunchy Egyptian variety",
      },
    ],

    storageAdvice: {
      transport: "Transport at 0–8°C with high humidity (85–95%)",
      shop: "Store in a cool, dark place or refrigerated between 0–4°C to maintain freshness",
    },
    growingInfo: {
      title: "Premium Carrots from Egypt",
      description:
        "Our Egyptian carrots are cultivated in fertile soil under optimal climate conditions, producing bright orange, crisp, and sweet roots. We follow sustainable farming methods to ensure high quality and long shelf life.",
    },
    packagingOptions: [
      {
        id: "Carton Box",
        name: "Carton Box",
        image: "cartonBox",
        description: "10KG , 15KG , Client Request",
        alt: "corrugated carton box for carrots packaging",
        weight: "10–15kg",
        dimensions: "60x40x30cm",
      },
      {
        id: "bulk pack",
        name: "bulk pack",
        image: "",
        description: "5KG , 10KG , 20KG and options available",
        alt: "breathable bulk pack for bulk carrot packaging",
        weight: "5–20kg",
        dimensions: "varies by client request",
      },
    ],
  },
  {
    id: "Cucumber",
    name: "Cucumber",
    image: cucumber,
    description: "Fresh, crunchy, and healthy cucumbers",
    alt: "Egyptian Cucumbers for export",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: true },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    varieties: [
      {
        id: "Cucumber",
        name: "Egyptian Cucumber",
        image: cucumber,
        alt: " cucumber – fresh Egyptian variety for salads and fresh consumption",
      },
    ],

    storageAdvice: {
      transport: "Transport at +10°C to +13°C with 90–95% humidity",
      shop: "Store at +10°C to +13°C, avoid temperatures below 7°C to prevent chilling injury",
    },
    growingInfo: {
      title: "Premium Cucumbers from Egypt",
      description:
        "Our cucumbers are cultivated in Egypt’s fertile soils, producing crisp, juicy, and high-quality cucumbers suitable for fresh markets and processing. Sustainable farming practices ensure freshness and long shelf life.",
    },
    packagingOptions: [
      {
        id: "Carton Box",
        name: "Carton Box",
        image: cucumberBox,
        description: "5KG , 10KG , Client Request",
        alt: "corrugated carton box for cucumber packaging",
        weight: "5–10kg",
        dimensions: "60x40x25cm",
      },
    ],
  },
  {
    id: "Mango",
    name: "Fresh Mango",
    image: mango,
    availability: [
      { month: "Jan", available: false },
      { month: "Feb", available: false },
      { month: "Mar", available: false },
      { month: "Apr", available: false },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    varieties: [
      {
        id: "Awesy",
        name: "Awesy",
        image: "",
        alt: "Awesy mango – a popular Egyptian variety with rich sweetness and smooth texture",
      },
      {
        id: "Zebda",
        name: "Zebda",
        image: "",
        alt: "Zebda mango – Egyptian variety known for its buttery texture and balanced flavor",
      },
      {
        id: "Fass",
        name: "Fass",
        image: "",
        alt: "Fass mango – small, juicy Egyptian variety with intense sweetness",
      },
      {
        id: "Timour",
        name: "Timour",
        image: "",
        alt: "Timour mango – premium Egyptian variety with aromatic flavor and smooth flesh",
      },
      {
        id: "Sedeek",
        name: "Sedeek",
        image: "",
        alt: "Sedeek mango – unique Egyptian mango with rich flavor and pleasant aroma",
      },
      {
        id: "Naomi",
        name: "Naomi",
        image: "",
        alt: "Naomi mango – late-season Egyptian mango with a balanced taste and vibrant color",
      },
      {
        id: "Keitt",
        name: "Keitt",
        image: "",
        alt: "Keitt mango – large Egyptian-grown variety with firm flesh and mild flavor",
      },
      {
        id: "Kent",
        name: "Kent",
        image: "",
        alt: "Kent mango – sweet and fiberless Egyptian variety perfect for fresh eating",
      },
    ],
    description: "Juicy and ripe mangoes",
    alt: "Egyptian Mango for export",
    category: "fruit",
  },
  {
    id: "Pomegranate",
    name: "Fresh Pomegranate",
    image: pomegranate,
    availability: [
      { month: "Jan", available: false },
      { month: "Feb", available: false },
      { month: "Mar", available: false },
      { month: "Apr", available: false },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    varieties: [
      {
        id: "Wonderful",
        name: "Wonderful",
        image: "",
        alt: "Wonderful pomegranate – premium variety known for its deep red arils, sweetness, and juiciness.",
      },
      {
        id: "Manfaluti",
        name: "Manfaluti",
        image: "",
        alt: "Manfaluti pomegranate – traditional Egyptian variety with rich flavor and soft arils.",
      },
      {
        id: "Baladi",
        name: "Baladi",
        image: "",
        alt: "Baladi pomegranate – local Egyptian variety, mildly sweet with a refreshing taste.",
      },
      {
        id: "Early116",
        name: "Early 116",
        image: "",
        alt: "Early 116 pomegranate – early-season Egyptian variety with balanced sweetness and acidity.",
      },
      {
        id: "Assiuty",
        name: "Assiuty",
        image: "",
        alt: "Assiuty pomegranate – regional Egyptian variety, prized for its juiciness and vibrant color.",
      },
    ],
    description: "Fresh and vibrant Egyptian pomegranates.",
    alt: "Egyptian Pomegranate for export",
    category: "fruit",
  },
  {
    id: 4,
    name: "Fresh Orange",
    image: orange,
    alt: "Egyptian Orange for export",
    description: "Citrus-rich sweet oranges",
    category: "fruit",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: false },
      { month: "Oct", available: false },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    packagingOptions: [
      {
        id: "Plastic Box",
        name: "Plastic Box",
        image: orangesplasticBox,
        description: "5KG , 10KG , Client Request",
        alt: "corrugated carton box for oranges packaging",
        weight: "5–10kg",
        dimensions: "60x40x25cm",
      },
    ],
  },
  {
    id: 5,
    name: "Fresh Watermelon",
    image: watermelon,
    alt: "Egyptian Watermelon for export",
    description: "Refreshing summer watermelon",
    category: "fruit",
    availability: [
      { month: "Jan", available: false },
      { month: "Feb", available: false },
      { month: "Mar", available: false },
      { month: "Apr", available: true },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
  },
  {
    id: 6,
    name: "Red Peppers",
    image: redPappers,
    alt: "Egyptian Red Peppers for export",
    description: "Crisp and vibrant red peppers",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: false },
      { month: "Oct", available: false },
      { month: "Nov", available: false },
      { month: "Dec", available: false },
    ],
  },
  {
    id: 7,
    name: "Yellow Peppers",
    image: yellowPappers,
    alt: "Egyptian Yellow Peppers for export",
    description: "Sweet and crunchy yellow peppers",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: false },
      { month: "Oct", available: false },
      { month: "Nov", available: false },
      { month: "Dec", available: false },
    ],
  },
  {
    id: 8,
    name: "Green Peppers",
    image: greenPappers,
    alt: "Egyptian Green Peppers for export",
    description: "Fresh and crisp green peppers",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: false },
      { month: "Jun", available: false },
      { month: "Jul", available: false },
      { month: "Aug", available: false },
      { month: "Sep", available: false },
      { month: "Oct", available: false },
      { month: "Nov", available: false },
      { month: "Dec", available: false },
    ],
  },
  {
    id: "Tomato",
    name: "Tomato",
    image: tomato,
    alt: "Egyptian Tomato for export",
    description: "Fresh and ripe tomatoes",
    category: "vegetable",
    availability: [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: true },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: true },
      { month: "Dec", available: true },
    ],
    storageAdvice: {
      transport: "Transport at 10-12°C",
      shop: "Store at room temperature away from direct sunlight. Do not refrigerate as this affects taste.",
    },
    growingInfo: {
      title: "Premium Egyptian Tomatoes",
      description:
        "Our tomatoes are grown in advanced greenhouses across Egypt's fertile regions. We employ sustainable farming practices and carefully monitor growth conditions to ensure premium quality, flavor, and appearance.",
    },
    packagingOptions: [
      {
        id: "p1",
        name: "Standard Carton",
        weight: "5kg",
        dimensions: "30x20x15cm",
      },
      {
        id: "p2",
        name: "Premium Box",
        weight: "10kg",
        dimensions: "40x30x20cm",
      },
      {
        id: "p3",
        name: "Bulk Container",
        weight: "20kg",
        dimensions: "60x40x30cm",
      },
    ],
    varieties: [
      {
        id: "Bar84",
        name: "Bar 84",
        image: "",
        alt: "Bar 84 tomato – high-quality variety with rich flavor and excellent texture.",
      },
      {
        id: "R196",
        name: "R196",
        image: "",
        alt: "R196 tomato – robust tomato variety known for its firmness and taste.",
      },
      {
        id: "SunGold",
        name: "Sun Gold Tomatoes",
        image: "",
        alt: "Sun Gold tomatoes – sweet golden cherry tomatoes with a tangy flavor.",
      },
      {
        id: "BabyPlum",
        name: "Baby Plum Tomatoes",
        image: "",
        alt: "Baby Plum tomatoes – small, juicy plum-shaped tomatoes perfect for snacking and salads.",
      },
      {
        id: "Beef",
        name: "Beef Tomatoes",
        image: "",
        alt: "Beef tomatoes – large, meaty tomatoes ideal for slicing and sandwiches.",
      },
      {
        id: "Cherry",
        name: "Cherry Tomatoes",
        image: "",
        alt: "Cherry tomatoes – bite-sized, sweet tomatoes great for salads and garnishing.",
      },
      {
        id: "CherryVine",
        name: "Cherry Tomatoes on the Vine",
        image: "",
        alt: "Cherry tomatoes on the vine – aromatic tomatoes harvested with their vines for extra freshness.",
      },
      {
        id: "Plum",
        name: "Plum Tomatoes",
        image: "",
        alt: "Plum tomatoes – oval-shaped tomatoes with thick flesh, perfect for sauces.",
      },
      {
        id: "VineRipened",
        name: "Vine Ripened Tomatoes",
        image: "",
        alt: "Vine ripened tomatoes – full-flavored tomatoes matured naturally on the vine.",
      },
      {
        id: "Silca",
        name: "Silca Tomatoes",
        image: "",
        alt: "Silca tomatoes – high-quality tomato variety valued for consistency and taste.",
      },
      {
        id: "MidiPlum",
        name: "Midi Plum Tomatoes",
        image: "",
        alt: "Midi Plum tomatoes – medium-sized plum tomatoes with rich, sweet flavor.",
      },
    ],
  },
  {
    id: 1,
    name: "Fresh Fig",
    image: fig,
    alt: "Egyptian Fig for export",
    description: "Sweet and nutritious fresh figs",
    category: "fruit",
  },
  {
    id: 2,
    name: "Fresh Kiwi",
    image: kiwi,
    alt: "Egyptian Kiwi for export",
    description: "Tangy and delicious kiwi fruit",
    category: "fruit",
  },
];

export const IqfProducts = [
  {
    id: 1,
    name: "Frozen Mango",
    image: frozen2,
    alt: "Egyptian Frozen Mango for export",
    category: "fruit",
  },
  {
    id: 2,
    name: "Frozen Pineapple",
    image: frozen3,
    alt: "Egyptian Frozen Pineapple for export",
    category: "fruit",
  },
  {
    id: 3,
    name: "Frozen Strawberry",
    image: frozen4,
    alt: "Egyptian Frozen Strawberry for export",
    category: "fruit",
  },
  {
    id: 4,
    name: "Frozen Okra",
    image: frozen6,
    alt: "Egyptian Frozen Okra for export",
    category: "vegetable",
  },
  {
    id: 5,
    name: "Frozen Peas",
    image: frozen7,
    alt: "Egyptian Frozen Peas for export",
    category: "vegetable",
  },
  {
    id: 6,
    name: "Frozen Mixed Vegetables",
    image: frozen8,
    alt: "Egyptian Frozen Mixed Vegetables for export",
    category: "vegetable",
  },
  {
    id: 7,
    name: "Frozen Broccoli",
    image: frozen9,
    alt: "Egyptian Frozen Broccoli for export",
    category: "vegetable",
  },
  {
    id: 8,
    name: "Frozen Spinach",
    image: frozen10,
    alt: "Egyptian Frozen Spinach for export",
    category: "vegetable",
  },
];
