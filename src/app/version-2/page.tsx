"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { getProduct, getUser } from "../actions";
import { Product, User } from "@/lib/types";
import Header from "@/components/header";
import { ImageGallery } from "@/components/gallery";
import Footer from "@/components/footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Reviews } from "@/components/reviews";
import { PurchaseBox } from "@/components/purchase-box";

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching product data
      setProduct(await getProduct());
      setUser(await getUser());
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Header user={user} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ImageGallery images={product?.images} productName={product?.name} />

          {/* Product Information & Purchase Box */}
          <div className="space-y-6 ">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {product?.name || <Skeleton />}
              </h1>

              <div className="flex items-center space-x-2 mb-4">
                {product ? (
                  <>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </>
                ) : (
                  <Skeleton height={16} width={200} />
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {product ? (
                <>
                  <span className="text-3xl font-bold">${product.price}</span>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                </>
              ) : (
                <>
                  <Skeleton height={32} width={100} />
                </>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product?.description || <Skeleton count={2} />}
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product ? (
                  product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))
                ) : (
                  <Skeleton count={5} />
                )}
              </ul>
            </div>

            {/* Interactive Purchase Box */}
            <PurchaseBox sizes={product?.sizes} />
          </div>
        </div>
        <Reviews productId={product?.id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
