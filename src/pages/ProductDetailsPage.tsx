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
const generateDummyData = (product: Product): Product => {
  const productType = product.name.toLowerCase();
  const isEgyptianProduct = productType.includes('mango') || productType.includes('orange') || productType.includes('grape');
  
  return {
    ...product,
    availability: product.availability || [
      { month: "Jan", available: isEgyptianProduct ? true : false },
      { month: "Feb", available: isEgyptianProduct ? true : false },
      { month: "Mar", available: true },
      { month: "Apr", available: true },
      { month: "May", available: true },
      { month: "Jun", available: true },
      { month: "Jul", available: true },
      { month: "Aug", available: true },
      { month: "Sep", available: true },
      { month: "Oct", available: true },
      { month: "Nov", available: isEgyptianProduct ? true : false },
      { month: "Dec", available: isEgyptianProduct ? true : false },
    ],
    storageAdvice: product.storageAdvice || {
      transport: `Transport ${productType} at optimal temperature between 12-15°C. Ensure proper ventilation and protect from direct sunlight. Use specialized containers to maintain freshness during long-distance shipping.`,
      shop: `Store ${productType} in a cool, well-ventilated area away from direct sunlight. Maintain consistent temperature and humidity levels for maximum shelf life. Display attractively to enhance customer appeal.`,
    },
    growingInfo: product.growingInfo || {
      title: `Premium ${product.name} - Sustainably Grown in Egypt`,
      description: `Our exceptional ${productType} is cultivated in the nutrient-rich Nile Delta region of Egypt, where optimal climate conditions and traditional farming expertise combine to produce superior quality fruit. We partner with local farmers who use sustainable agricultural practices, ensuring environmental responsibility while delivering the finest taste and nutritional value. Each ${productType} is hand-selected at peak ripeness to guarantee exceptional quality and flavor.`,
    },
    packagingOptions: product.packagingOptions || [
      {
        id: "1",
        name: "EAT ME Retail Pack",
        image: product.image,
        description: `You can order ready-to-eat EAT ME ${productType} in various packaging. Loose per package of approximately 4 kg and in a 2-pack.`,
      },
      {
        id: "2",
        name: "Premium Gift Box",
        image: product.image,
        description: `Luxurious presentation box perfect for gifting, featuring our finest ${productType} with elegant branding and protective packaging.`,
      },
      {
        id: "3",
        name: "Bulk Commercial Pack",
        image: product.image,
        description: `Large volume packaging designed for restaurants, hotels, and food service providers, ensuring freshness and cost-effectiveness.`,
      },
      {
        id: "4",
        name: "Export International Pack",
        image: product.image,
        description: `Specially designed for international shipping with extended shelf life packaging and compliance with global food safety standards.`,
      },
    ],
    varieties: product.varieties || [
      {
        id: "1",
        name: `Premium ${product.name}`,
        image: product.image,
        description: `Our flagship variety featuring exceptional sweetness and perfect texture. Carefully selected for superior taste and visual appeal.`,
        features: ["Premium Quality", "Superior Taste", "Visually Appealing"],
      },
      {
        id: "2",
        name: `Organic ${product.name}`,
        image: product.image,
        description: `Certified organic variety grown without synthetic pesticides or fertilizers. Perfect for health-conscious consumers seeking natural goodness.`,
        features: ["Organic Certified", "No Synthetic Pesticides", "Naturally Grown"],
      },
      {
        id: "3",
        name: `Export Grade ${product.name}`,
        image: product.image,
        description: `Premium export quality with extended shelf life and superior packaging. Meets international standards for global distribution.`,
        features: ["Export Quality", "Extended Shelf Life", "Internationally Certified"],
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
    <div className="min-h-screen  overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
         <section id="hero" className={`mb-8 sm:mb-12 lg:mb-16 ${activeSection === 'hero' ? 'bg-gray-50' : ''}`}>
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