import { Helmet } from "react-helmet-async";

const SITE_URL = "https://fuory.vercel.app";

/* ------------------------------------------------------------------ */
/*  Organization Schema                                               */
/* ------------------------------------------------------------------ */

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fuory",
  url: SITE_URL,
  logo: `${SITE_URL}/fuory-logo-svg.svg`,
  description:
    "Fuory is a B2B exporter and international supplier of fresh and frozen fruits and vegetables, with its own export and packing facility serving buyers across Europe, the Arab region, the USA, China, South America, and other international markets.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alexandria",
    addressCountry: "EG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201010101972",
    contactType: "sales",
    email: "info@fuory.com",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [
    "https://www.facebook.com/people/Fuory-for-Import-and-Export/61581032096920/",
    "https://www.linkedin.com/company/fuory-for-import-and-export",
  ],
};

/* ------------------------------------------------------------------ */
/*  WebSite Schema                                                    */
/* ------------------------------------------------------------------ */

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fuory",
  url: SITE_URL,
  description:
    "Fresh & frozen fruits and vegetables exporter with own packing facility — serving importers, distributors, and wholesalers worldwide.",
  publisher: {
    "@type": "Organization",
    name: "Fuory",
  },
};

/* ------------------------------------------------------------------ */
/*  Components                                                        */
/* ------------------------------------------------------------------ */

/** Global schemas — render once in App. */
export function GlobalStructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(WEBSITE_SCHEMA)}
      </script>
    </Helmet>
  );
}

/* ------------------------------------------------------------------ */
/*  Breadcrumb                                                        */
/* ------------------------------------------------------------------ */

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Schema                                                    */
/* ------------------------------------------------------------------ */

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  brand?: string;
}

export function ProductStructuredData({
  name,
  description,
  image,
  url,
  category,
  brand = "Fuory",
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url: `${SITE_URL}${url}`,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(category && { category }),
    manufacturer: {
      "@type": "Organization",
      name: "Fuory",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Schema                                                        */
/* ------------------------------------------------------------------ */

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQStructuredData({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
