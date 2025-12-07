"use server";

import { ICategory } from "@/types/category";
import { IProduct } from "@/types/product";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetch all available categories
 */
export async function getCategories(): Promise<ICategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const result: ApiResponse<ICategory[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

/**
 * Fetch all new arrival products
 */
export async function getNewArraivals(limit: number = 10): Promise<IProduct[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result: ApiResponse<IProduct[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data.slice(-limit);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Fetch all products
 */
export async function getProducts(limit?: number): Promise<IProduct[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const result: ApiResponse<IProduct[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return limit ? result.data.slice(0, limit) : result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Search products by title (client-side filtering)
 */
export async function searchProducts(query: string): Promise<IProduct[]> {
  try {
    const allProducts = await getProducts();
    const q = query.toLowerCase();

    return allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
    );
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
}

/**
 * Fetch all products by category
 */
export async function getProductsByCategory(
  category: string
): Promise<IProduct[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/category/${encodeURIComponent(category)}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const result: ApiResponse<IProduct[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
