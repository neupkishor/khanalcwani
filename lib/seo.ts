import type { Metadata } from "next";

export const siteConfig = {
  name: "Bhawani Khanal",
  url: "https://khanalcwani.com",
  description: "Business, marketing, creativity, and continuous learning from Kathmandu, Nepal.",
  defaultImage: "/assets/uploads/starting-my-cookies-jar-aigenerate-animestyle.png",
  xHandle: "@khanalcwani",
};

type ImageInput = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: ImageInput[];
};

type WebPageSchemaInput = {
  title: string;
  description: string;
  path: string;
};

function resolveUrl(path: string) {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

function resolveImages(images?: ImageInput[]) {
  const source =
    images && images.length > 0
      ? images
      : [
          {
            url: siteConfig.defaultImage,
            width: 1200,
            height: 630,
            alt: siteConfig.name,
          },
        ];

  return source.map((image) => ({
    url: resolveUrl(image.url),
    width: image.width,
    height: image.height,
    alt: image.alt ?? siteConfig.name,
  }));
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  images,
}: PageMetadataInput): Metadata {
  const url = resolveUrl(path);
  const resolvedImages = resolveImages(images);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: resolvedImages,
    },
    twitter: {
      card: resolvedImages.length > 0 ? "summary_large_image" : "summary",
      title,
      description,
      creator: siteConfig.xHandle,
      images: resolvedImages.map((image) => image.url),
    },
  };
}

export function buildWebPageSchema({ title, description, path }: WebPageSchemaInput) {
  const url = resolveUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  const url = resolveUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    image: [resolveUrl(image)],
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
