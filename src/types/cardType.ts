// types.ts
export interface CardData {
  id: number;
  title: string;
  price: number;
  isPopular?: boolean;
  features: string[];
}

export interface CardProps {
  card: CardData;
  position: 'left' | 'center' | 'right';
  isPopular: boolean;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}
