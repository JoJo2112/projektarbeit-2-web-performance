'use server';

export async function getProduct() {
  // Simulate 500ms loading time
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviewCount: 1247,
    description:
      'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather padding',
      'Bluetooth 5.3 connectivity',
      'Quick charge: 5 min = 3 hours playbook',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Silver'],
    inStock: true,
    images: [
      'https://placehold.co/800x800',
      'https://placehold.co/800x800',
      'https://placehold.co/800x800',
      'https://placehold.co/800x800',
    ],
  };
}

export async function getReviews() {
  // Simulate 500ms loading time
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      date: '2 days ago',
      comment:
        'Absolutely amazing sound quality! The noise cancellation works perfectly during my commute. Highly recommended!',
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '/api/placeholder/40/40',
      rating: 4,
      date: '1 week ago',
      comment:
        "Great headphones overall. Battery life is impressive and they're very comfortable for long listening sessions.",
    },
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      date: '2 weeks ago',
      comment:
        "Best purchase I've made this year. The build quality is excellent and the sound is crystal clear.",
    },
  ];
}
