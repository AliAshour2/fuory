"use client";

import { AvailabilitySection } from "@/components/details-page/AvailabilitySection";
import { PackagingSection } from "@/components/details-page/PackagingSection";
import { ProductHero } from "@/components/details-page/ProductHero";
import { SectionNavigation } from "@/components/details-page/SectionNavigation";

import { StorageAdviceSection } from "@/components/details-page/StorageAdviceSection";
import { VarietiesSection } from "@/components/details-page/VarietiesSection";
import { cn } from "@/lib/utils";
import type { ProductPageProps } from "@/types/product-page";

import { useState } from "react";

export function ProductPage({
  product,
  config = {},
  className,
}: ProductPageProps) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const {
    showAvailability = true,
    showStorageAdvice = true,
    showVarieties = true,
    showGrowingLocations = true,
    showGrowingInfo = true,
    showRipeningInfo = true,
    showTips = true,
    showPackaging = true,
    showRecipes = true,
    enableSectionNavigation = true,
    stickyNavigation = true,
  } = config;

  const sections = [
    { id: "hero", label: "Product", show: true },
    {
      id: "availability",
      label: "Availability",
      show: showAvailability && !!product.availability,
    },
    {
      id: "storage",
      label: "Storage",
      show: showStorageAdvice && !!product.storageAdvice,
    },
    {
      id: "varieties",
      label: "Varieties",
      show: showVarieties && !!product.varieties,
    },
    {
      id: "locations",
      label: "Locations",
      show: showGrowingLocations && !!product.growingLocations,
    },
    {
      id: "growing",
      label: "Growing",
      show: showGrowingInfo && !!product.growingInfo,
    },
    {
      id: "ripening",
      label: "Ripening",
      show: showRipeningInfo && !!product.ripeningInfo,
    },
    { id: "tips", label: "Tips", show: showTips && !!product.tips },
    {
      id: "packaging",
      label: "Packaging",
      show: showPackaging && !!product.packagingOptions,
    },
    { id: "recipes", label: "Recipes", show: showRecipes && !!product.recipes },
  ].filter((section) => section.show);

  return (
    <div className={cn("min-h-screen bg-white", className)}>
      {enableSectionNavigation && (
        <SectionNavigation
          sections={sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          sticky={stickyNavigation}
        />
      )}

      <main className="relative">
        {/* Hero Section */}
        <section id="hero" className="section-fade-in">
          <ProductHero
            product={product}
            sections={sections.slice(1)} // Pass other sections for navigation buttons
            onNavigateToSection={setActiveSection}
          />
        </section>

        {/* Availability Section */}
        {showAvailability && product.availability && (
          <section id="availability" className="section-fade-in">
            <AvailabilitySection availability={product.availability} />
          </section>
        )}

        {/* Storage Advice Section */}
        {showStorageAdvice && product.storageAdvice && (
          <section id="storage" className="section-fade-in">
            <StorageAdviceSection storageAdvice={product.storageAdvice} />
          </section>
        )}

        {/* Varieties Section */}
        {showVarieties && product.varieties && (
          <section id="varieties" className="section-fade-in">
            <VarietiesSection varieties={product.varieties} />
          </section>
        )}

        {/* Growing Locations Section */}

        {/* Growing Info Section */}


        {/* Packaging Section */}
        {showPackaging && product.packagingOptions && (
          <section id="packaging" className="section-fade-in">
            <PackagingSection packagingOptions={product.packagingOptions} />
          </section>
        )}
      </main>
    </div>
  );
}
