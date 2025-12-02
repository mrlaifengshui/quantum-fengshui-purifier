import { createContext, useContext, useState, ReactNode } from 'react';
import type { Brand } from '../lib/brands';

interface BrandContextType {
  selectedBrand: Brand | null;
  setSelectedBrand: (brand: Brand | null) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return (
    <BrandContext.Provider value={{ selectedBrand, setSelectedBrand }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within BrandProvider');
  }
  return context;
}
