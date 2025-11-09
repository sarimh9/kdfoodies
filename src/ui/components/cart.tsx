import { cn } from "~/lib/cn";

import { CartClient } from "./cart-client";

export interface CartItem {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  className?: string;
}

// const mockCart: CartItem[] = [
//   {
//     category: "Food",
//     id: "1",
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     name: "Premium Wireless Headphones",
//     price: 199.99,
//     quantity: 1,
//   },
//   {
//     category: "Wearables",
//     id: "2",
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     name: "Smart Watch Series 5",
//     price: 299.99,
//     quantity: 2,
//   },
// ];

export function Cart({ className }: CartProps) {

  const cartData = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
  const parsedCartData: CartItem[] = cartData ? JSON.parse(cartData) as CartItem[] : [];

  console.log("parsedCartData below ")
  console.log(parsedCartData)
  return (
    <div className={cn("relative", className)}>
      {/* // TODO: Fetch cart from e.g. LocalStorage and/or database */}
      <CartClient className={cn("", className)} cartData={parsedCartData} />
    </div>
  );
}
