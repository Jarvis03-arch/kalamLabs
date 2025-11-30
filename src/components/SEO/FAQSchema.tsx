import Script from "next/script";

export default function FAQSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does Kalam Labs build?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kalam Labs builds stratospheric UAVs, radiosondes, ISR drones and edge-of-space platforms."
              }
            },
            {
              "@type": "Question",
              "name": "Where do Kalam Labs UAVs operate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kalam Labs UAVs operate at high altitudes between 50,000 to 100,000+ ft for surveillance and meteorology missions."
              }
            },
            {
              "@type": "Question",
              "name": "Who uses Kalam Labs' technologies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kalam Labs supplies advanced aerial systems to meteorology departments, Indian defence units and strategic reconnaissance teams."
              }
            }
          ]
        })
      }}
    />
  );
}
