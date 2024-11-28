// src/types/Shop.ts
export interface Shop {
    id: string;
    name: string;
    description: string;
    logo?: string;
    createdAt: Date;
  }
  
  // src/types/Product.ts
  export interface Product {
    id: string;
    shopId: string;
    name: string;
    price: number;
    stockLevel: number;
    description: string;
    image?: string;
    createdAt: Date;
  }
  
  // src/types/DashboardMetrics.ts
  export interface DashboardMetrics {
    totalShops: number;
    totalProducts: number;
    totalProductValue: number;
    totalStockLevel: number;
    stockStatusDistribution: {
      inStock: number;
      lowStock: number;
      outOfStock: number;
    };
    topShopsByStock: Array<{
      shopId: string;
      shopName: string;
      stockLevel: number;
    }>;
  }
  
  // Utility types for form validation
  export interface ShopFormData {
    name: string;
    description: string;
    logo?: File | string;
  }
  
  export interface ProductFormData {
    name: string;
    price: number;
    stockLevel: number;
    description: string;
    shopId: string;
    image?: File | string;
  }