'use client';

import { useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

export default function ImageGallery({
  images,
  productName,
}: {
  images?: string[];
  productName?: string;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const onImageSelect = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="space-y-4">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        {images ? (
          <>
            <Image
              src={images[selectedImage] || ''}
              alt={productName || 'Product image'}
              className="object-cover"
              fill
            />
          </>
        ) : (
          <Skeleton height="100%" />
        )}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images
          ? images.map((image, index) => (
              <button
                key={index}
                onClick={() => onImageSelect(index)}
                className={`aspect-square relative overflow-hidden rounded-md border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} ${index + 1}`}
                  className="object-cover"
                  fill
                />
              </button>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="aspect-square">
                <Skeleton height="100%" />
              </div>
            ))}
      </div>
    </div>
  );
}
