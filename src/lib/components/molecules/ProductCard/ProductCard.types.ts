export interface ProductCardProps {
  imageUrl: string;
  title: string;
  author: string;
  priceText: string;
  rating?: number;
  isAction?: boolean;
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;  
  contentClassName?: string;
  imageHeight?: number | string;
  cardWidth?: number | string;      
  cardMinWidth?: number | string;   
  cardMaxWidth?: number | string; 
  padding?: string;
  onProductClick?: () => void;
}