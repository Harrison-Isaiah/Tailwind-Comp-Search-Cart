'use client';

import CategoryPreviews from "@/components/Ecommerce/CategoryPreviews";
import ProductLists1 from "@/components/Ecommerce/ProductLists1";
import ProductLists2 from "@/components/Ecommerce/ProductLists2";
import ShoppingCart from "@/components/Ecommerce/ShoppingCart";
import StoreNavigation from "@/components/Ecommerce/StoreNavigation";
import React, { useState } from 'react';
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
        <StoreNavigation setIsCartOpen={setIsCartOpen} />
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <CategoryPreviews />
      <ProductLists1 />
      <ProductLists2 />
      <NewsletterSection />
    </>
  );
}
