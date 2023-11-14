export interface Product {
    id: number;
    category: string;
    brand: string;
    model: string;
    img: string;
    specs: {
      screenSize?: string;
      camera?: string;
      storage?: string;
      resolution?: string;
      refreshRate?: string;
      smartFeatures?: boolean;
    };
    price: number;
  }