import { LorCard } from '../types/lor-types';
import { randomInt } from '../utils/data-utils';

export interface CardImageViewProps {
  card: LorCard;
  scale?: number;
}

const fadeIn = (el: HTMLElement) => el.classList.add('fade-in');

// with a known size; 
// no need to query naturalwidth and height during image onLoad
const naturalSize = {
  width: 680,
  height: 1024
};

export const CardImageView = ({ card, scale = 0.4 }: CardImageViewProps) => {
  return (
    <div>
      <img
        className="card-image fade-in"
        src={card.assets[0].gameAbsolutePath}
        alt={card.name}
        onLoad={e => {
          // this provides a better experience than the default image loader
          fadeIn(e.target as HTMLImageElement);
        }}
        key={card.cardCode}
        style={{
          // lets randomize the fade-in animation duration 
          // to provide a smoother transition than a weird syncronous load-in.
          animationDuration: `0.${randomInt(20, 65)}s`,
          width: `${naturalSize.width * scale}px`,
          height: `${naturalSize.height * scale}px`,
        }}
      />
    </div>
  );

}