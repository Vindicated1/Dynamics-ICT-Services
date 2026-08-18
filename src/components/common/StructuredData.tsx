import { companyInfo } from "@/data/homepage/seo";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: companyInfo.name,

    legalName: companyInfo.legalName,

    url: companyInfo.url,

    logo: companyInfo.logo,

    image: companyInfo.image,

    description: companyInfo.description,

    email: companyInfo.email,

    telephone: companyInfo.telephone,

    foundingDate: companyInfo.foundingDate,

    sameAs: companyInfo.sameAs,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: companyInfo.name,

    image: companyInfo.image,

    url: companyInfo.url,

    telephone: companyInfo.telephone,

    email: companyInfo.email,

    description: companyInfo.description,

    logo: companyInfo.logo,

    address: {
      "@type": "PostalAddress",

      streetAddress: companyInfo.address.streetAddress,

      addressLocality: companyInfo.address.addressLocality,

      addressRegion: companyInfo.address.addressRegion,

      postalCode: companyInfo.address.postalCode,

      addressCountry: companyInfo.address.addressCountry,
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: companyInfo.geo.latitude,

      longitude: companyInfo.geo.longitude,
    },

    openingHours: companyInfo.openingHours,

    sameAs: companyInfo.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    url: companyInfo.url,

    name: companyInfo.name,

    description: companyInfo.description,

    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}