import { Image } from 'antd';
import { LorCard } from '../types/lor-types';

export interface CardImageViewProps {
  card: LorCard;
  scale?: number;
}

export const CardImageView = ({ card, scale = 0.4 }: CardImageViewProps) => {
  return (
    <Image 
      src={card.assets[0].gameAbsolutePath} 
      onLoad={ev => {
        const image = ev.target as HTMLImageElement
        image.style.width = `${image.naturalWidth * scale}px`
        image.style.height = `${image.naturalHeight * scale}px`
      }} />
  )
}