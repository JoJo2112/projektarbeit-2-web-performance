"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";

export function PurchaseBox({ sizes = ["S", "M", "L"] }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="p-6 space-y-4 border">
      <div className="flex items-center justify-between">
        <span className="font-medium">Quantity:</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium">Size:</span>
        <div className="flex space-x-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Button className="w-full" size="lg">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={`w-4 h-4 mr-2 ${
              isWishlisted ? "fill-red-500 text-red-500" : ""
            }`}
          />
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 text-center">
        <div className="flex flex-col items-center space-y-1">
          <Truck className="w-5 h-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Shield className="w-5 h-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">2 Year Warranty</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <RotateCcw className="w-5 h-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">30 Day Returns</span>
        </div>
      </div>
    </div>
  );
}
