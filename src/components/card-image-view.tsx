import { Image } from 'antd';
import { LorCard } from '../types/lor-types';

export interface CardImageViewProps {
  card: LorCard;
  scale?: number;
}

// known size; no need to query naturalwidth and height during image onLoad
const naturalSize = { 
  width: 680, 
  height: 1024 
};

export const CardImageView = ({ card, scale = 0.4 }: CardImageViewProps) => {
  return (
    <Image 
      src={card.assets[0].gameAbsolutePath} 
      alt={card.name}
      key={card.cardCode}
      style={{ width: `${naturalSize.width * scale}px`, height: `${naturalSize.height * scale}px` }}
    />
  )
}