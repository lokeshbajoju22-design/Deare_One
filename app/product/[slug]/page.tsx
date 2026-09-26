import { notFound } from 'next/navigation';
import { ProductDetailPage } from '@/components/products/product-detail-page';
import { getProductBySlug } from '@/data/products';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.images[0] ? [product.images[0]] : ['/images/brand/deare-one-badge.svg'],
    },
  };
}

export default function ProductSlugPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
