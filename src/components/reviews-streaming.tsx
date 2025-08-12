'use client';

import { Review } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { use, useState } from 'react';
import { getReviews } from '@/app/actions';
import Skeleton from 'react-loading-skeleton';

export default function ReviewsStreaming({
  productId,
  reviewsSsr,
}: {
  productId?: number;
  reviewsSsr: Promise<Review[]>;
}) {
  const reviewsInitial = use(reviewsSsr);

  const [reviews, setReviews] = useState<Review[]>(reviewsInitial);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreReviews = async () => {
    setIsLoading(true);
    const moreReviews = await getReviews(productId);
    setReviews((prevReviews) => [...prevReviews, ...moreReviews]);
    setIsLoading(false);
  };

  return (
    <>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div className="border p-6" key={index}>
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={review.avatar} />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && <Skeleton count={3} className="mb-6" height={150} />}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" onClick={loadMoreReviews}>
          Load More Reviews
        </Button>
      </div>
    </>
  );
}
