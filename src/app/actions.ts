"use server";

export async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviewCount: 1247,
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium leather padding",
      "Bluetooth 5.3 connectivity",
      "Quick charge: 5 min = 3 hours playbook",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Silver"],
    inStock: true,
    images: [
      "https://picsum.photos/800?random=1",
      "https://picsum.photos/800?random=2",
      "https://picsum.photos/800?random=3",
      "https://picsum.photos/800?random=4",
    ],
  };
}

export async function getReviews(productId: number = 1) {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely amazing sound quality! The noise cancellation works perfectly during my commute. Highly recommended!",
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/api/placeholder/40/40",
      rating: 4,
      date: "1 week ago",
      comment:
        "Great headphones overall. Battery life is impressive and they're very comfortable for long listening sessions.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Best purchase I've made this year. The build quality is excellent and the sound is crystal clear.",
    },
  ];
}

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return {
    id: 123,
    name: "John Doe",
    email: "john.doe@example.com",
  };
}
