import { IProduct } from "./product";

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  subtotal: number;
}
