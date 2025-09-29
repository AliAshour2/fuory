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

import frozen2 from "@/assets/images/forzen/forzen2.webp";
import frozen3 from "@/assets/images/forzen/forzen3.webp";
import frozen4 from "@/assets/images/forzen/forzen4.webp";
import frozen6 from "@/assets/images/forzen/forzen6.webp";
import frozen7 from "@/assets/images/forzen/forzen7.webp";
import frozen8 from "@/assets/images/forzen/forzen8.webp";
import frozen9 from "@/assets/images/forzen/forzen9.webp";
import frozen10 from "@/assets/images/forzen/forzen10.webp";

export const products = [
  {
    id: 9,
    name: "Sweet Potato",
    image: sweetPotato,
    description: "Fresh and healthy sweet potatoes",
    alt: "Egyptian Sweet Potato for export",
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
      { month: "Dec", available: true }
    ],
varieties: [
  { 
    id: "v1", 
    name: "Beauregard",  
    image: "/src/assets/images/fruitsandvegetables/sweetpotatos/beuaregard.webp",
    alt: "Beauregard sweet potato – premium Egyptian variety with rich taste"
  },
  { 
    id: "v2", 
    name: "Bellevue", 
    image: "/src/assets/images/fruitsandvegetables/sweetpotatos/bellevue.webp",
    alt: "Bellevue sweet potato – high-quality Egyptian variety with excellent texture"
  },
],

    storageAdvice: {
      transport: "Transport at ambient temperature between 13-15°C",
      shop: "Store in a cool, dry place away from direct sunlight"
    },
    growingInfo: {
      title: "Premium Sweet Potatoes from Egypt",
      description: "Our sweet potatoes are grown in the fertile soils of Egypt, where the perfect climate conditions allow for year-round cultivation. We use sustainable farming practices to ensure the best quality and taste."
    },
    packagingOptions: [
      { id: "p1", name: "Standard Box", weight: "10kg", dimensions: "40x30x25cm" },
      { id: "p2", name: "Bulk Box", weight: "20kg", dimensions: "60x40x30cm" }
    ]
  },
  {
    id: 3,
    name: "Fresh Mango",
    image: mango,
    description: "Juicy and ripe mangoes",
    alt: "Egyptian Mango for export",
    category: "fruit",
  },
  {
    id: 4,
    name: "Fresh Orange",
    image: orange,
    alt: "Egyptian Orange for export",
    description: "Citrus-rich sweet oranges",
    category: "fruit",
  },
  {
    id: 5,
    name: "Fresh Watermelon",
    image: watermelon,
    alt: "Egyptian Watermelon for export",
    description: "Refreshing summer watermelon",
    category: "fruit",
  },
  {
    id: 6,
    name: "Red Peppers",
    image: redPappers,
    alt: "Egyptian Red Peppers for export",
    description: "Crisp and vibrant red peppers",
    category: "vegetable",
  },
  {
    id: 7,
    name: "Yellow Peppers",
    image: yellowPappers,
    alt: "Egyptian Yellow Peppers for export",
    description: "Sweet and crunchy yellow peppers",
    category: "vegetable",
  },
  {
    id: 8,
    name: "Green Peppers",
    image: greenPappers,
    alt: "Egyptian Green Peppers for export",
    description: "Fresh and crisp green peppers",
    category: "vegetable",
  },
  {
    id: 10,
    name: "Tomato",
    image: tomato,
    alt: "Egyptian Tomato for export",
    description: "Fresh and ripe tomatoes",
    category: "vegetable",
    availability: [
      { month: "Jan", available: false },
      { month: "Feb", available: false },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: true },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: false },
      { month: "Dec", available: false }
    ],
    storageAdvice: {
      transport: "Transport at 10-12°C",
      shop: "Store at room temperature away from direct sunlight. Do not refrigerate as this affects taste."
    },
    growingInfo: {
      title: "Premium Egyptian Tomatoes",
      description: "Our tomatoes are grown in advanced greenhouses across Egypt's fertile regions. We employ sustainable farming practices and carefully monitor growth conditions to ensure premium quality, flavor, and appearance."
    },
    packagingOptions: [
      { id: "p1", name: "Standard Carton", weight: "5kg", dimensions: "30x20x15cm" },
      { id: "p2", name: "Premium Box", weight: "10kg", dimensions: "40x30x20cm" },
      { id: "p3", name: "Bulk Container", weight: "20kg", dimensions: "60x40x30cm" }
    ]
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
