import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import type { Product } from "@/types/product";

// Import detail page components
import { ProductHero } from "@/components/details-page/ProductHero";
import { AvailabilitySection } from "@/components/details-page/AvailabilitySection";
import { PackagingSection } from "@/components/details-page/PackagingSection";
import { StorageAdviceSection } from "@/components/details-page/StorageAdviceSection";
import { GrowingInfoSection } from "@/components/details-page/GrowingInfoSection";
import { VarietiesSection } from "@/components/details-page/VarietiesSection";

// Enhanced dummy data generator with rich content


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
      setProduct((foundProduct));
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
          <p className="text-gray-600">
            Please wait while we load the product details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="hero"
          className={`mb-8 sm:mb-12 lg:mb-16 ${
            activeSection === "hero" ? "" : ""
          }`}
        >
          <ProductHero
            product={product}
            sections={sections}
            onNavigateToSection={handleNavigateToSection}
          />
        </section>

        {/* Availability Section */}
        {product.availability && (
          <section id="availability" className="mb-8 sm:mb-12 lg:mb-16">
            <AvailabilitySection availability={product.availability} />
          </section>
        )}

        {/* Varieties Section */}
        {product.varieties && (
          <section id="varieties" className="mb-8 sm:mb-12 lg:mb-16">
            <VarietiesSection varieties={product.varieties} />
          </section>
        )}

        {/* Growing Info Section */}
        {product.growingInfo && (
          <section id="growing-info" className="mb-8 sm:mb-12 lg:mb-16">
            <GrowingInfoSection growingInfo={product.growingInfo} />
          </section>
        )}

        {/* Packaging Section */}
        {product.packagingOptions && (
          <section id="packaging" className="mb-8 sm:mb-12 lg:mb-16">
            <PackagingSection packagingOptions={product.packagingOptions} />
          </section>
        )}

        {/* Storage Advice Section */}
        {product.storageAdvice && (
          <section id="storage" className="mb-8 sm:mb-12 lg:mb-16">
            <StorageAdviceSection storageAdvice={product.storageAdvice} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
