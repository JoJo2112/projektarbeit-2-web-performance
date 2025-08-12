import { Star } from 'lucide-react';
import { getProduct, getReviews, getUser } from '../actions';
import Header from '@/components/header';
import ImageGallery from '@/components/gallery';
import Footer from '@/components/footer';
import PurchaseBox from '@/components/purchase-box';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReviewsStreaming from '@/components/reviews-streaming';

const ProductDetailPage = async () => {
  const product = await getProduct();
  const user = await getUser();

  const reviewsSsr = getReviews(product.id);

  return (
    <div className="min-h-screen">
      <Header user={user} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ImageGallery images={product.images} productName={product.name} />

          {/* Product Information & Purchase Box */}
          <div className="space-y-6 ">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Purchase Box */}
            <PurchaseBox sizes={product?.sizes} />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <Suspense
            fallback={<Skeleton count={3} className="mb-6" height={150} />}
          >
            <ReviewsStreaming productId={product?.id} reviewsSsr={reviewsSsr} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
