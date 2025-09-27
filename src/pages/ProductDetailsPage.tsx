import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import type { Product } from "@/types/product";

// Import detail page components
import { ProductHero } from "@/components/details-page/ProductHero";
import { SectionNavigation } from "@/components/details-page/SectionNavigation";
import { AvailabilitySection } from "@/components/details-page/AvailabilitySection";
import { PackagingSection } from "@/components/details-page/PackagingSection";
import { StorageAdviceSection } from "@/components/details-page/StorageAdviceSection";
import { GrowingInfoSection } from "@/components/details-page/GrowingInfoSection";
import { VarietiesSection } from "@/components/details-page/VarietiesSection";

// Dummy data generator
const generateDummyData = (product: Product): Product => {
  return {
    ...product,
    availability: product.availability || [
      { month: "Jan", available: true },
      { month: "Feb", available: true },
      { month: "Mar", available: false },
      { month: "Apr", available: false },
      { month: "May", available: true },
      { month: "Jun", available: true },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: false },
      { month: "Nov", available: false },
      { month: "Dec", available: true },
    ],
    storageAdvice: product.storageAdvice || {
      transport: "Transport at ambient temperature between 13-15°C. Maintain proper ventilation and avoid direct sunlight during transportation.",
      shop: "Store in a cool, dry place away from direct sunlight. Keep at room temperature for best quality and flavor.",
    },
    growingInfo: product.growingInfo || {
      title: `Premium ${product.name} from Egypt`,
      description: `Our ${product.name.toLowerCase()} is grown in the fertile soils of Egypt, where perfect climate conditions allow for optimal cultivation. We use sustainable farming practices to ensure the best quality and taste.`,
    },
    packagingOptions: product.packagingOptions || [
      {
        id: "1",
        name: "Retail Pack",
        image: product.image,
        description: "Perfect for retail stores and small businesses",
      },
      {
        id: "2",
        name: "Bulk Pack",
        image: product.image,
        description: "Ideal for restaurants and food service",
      },
      {
        id: "3",
        name: "Export Pack",
        image: product.image,
        description: "Specially designed for international shipping",
      },
    ],
    varieties: product.varieties || [
      {
        id: "1",
        name: `Premium ${product.name}`,
        image: product.image,
        description: "Our premium variety with exceptional taste and quality",
      },
      {
        id: "2",
        name: `Organic ${product.name}`,
        image: product.image,
        description: "Organically grown for health-conscious consumers",
      },
    ],
  };
};

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products: productData } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // Define sections configuration
  const sections = [
    { id: "hero", label: "Overview", show: true },
    { id: "availability", label: "Availability", show: true },
    { id: "varieties", label: "Varieties", show: true },
    { id: "growing-info", label: "Growing Info", show: true },
    { id: "packaging", label: "Packaging", show: true },
    { id: "storage", label: "Storage", show: true },
  ];

  useEffect(() => {
    if (!id) return;

    // Find product from the products arrays (fruits and vegetables)
    const allProducts = [...productData.fruits, ...productData.vegetables];
    const foundProduct = allProducts.find((p) => p.id.toString() === id);

    if (foundProduct) {
      // Generate complete data with dummy fallbacks
      setProduct(generateDummyData(foundProduct));
    } else {
      // Product not found, redirect to products page
      navigate("/products");
    }
  }, [id, productData, navigate]);

  const handleNavigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };



  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading...</h2>
          <p className="text-gray-600">Please wait while we load the product details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Hero Section */}
      <section id="hero">
        <ProductHero
          product={product}
          sections={sections}
          onNavigateToSection={handleNavigateToSection}
        />
      </section>



      {/* Availability Section */}
      {product.availability && (
        <section id="availability">
          <AvailabilitySection availability={product.availability} />
        </section>
      )}

      {/* Varieties Section */}
      {product.varieties && (
        <section id="varieties">
          <VarietiesSection varieties={product.varieties} />
        </section>
      )}

      {/* Growing Info Section */}
      {product.growingInfo && (
        <section id="growing-info">
          <GrowingInfoSection growingInfo={product.growingInfo} />
        </section>
      )}

      {/* Packaging Section */}
      {product.packagingOptions && (
        <section id="packaging">
          <PackagingSection packagingOptions={product.packagingOptions} />
        </section>
      )}

      {/* Storage Advice Section */}
      {product.storageAdvice && (
        <section id="storage">
          <StorageAdviceSection storageAdvice={product.storageAdvice} />
        </section>
      )}
    </div>
  );
};

export default ProductDetailsPage;