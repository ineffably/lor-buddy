import { useEffect, useRef } from 'react';
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
  // not sure I like these css animations. 
  const imgRef = useRef<HTMLImageElement>(null);
  const imgHoverScale = 1.1

  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.addEventListener('animationend', (ev) => {
      const target = ev.target as HTMLElement;
      if (target.classList.contains('fade-in')) {
        target.style.opacity = '1';
        target.classList.remove('fade-in');
      }

      // if (target.classList.contains('zoom-in')) {
      //   target.style.transform = 'scale(1.2)';
      //   target.classList.remove('zoom-in');
      // }

      // if (target.classList.contains('zoom-out')) {
      //   target.style.transform = 'scale(1)';
      //   target.classList.remove('zoom-out');
      // }
    })

    imgRef.current.addEventListener('mouseover', (ev) => {
      ev.stopPropagation();
      const target = ev.target as HTMLElement;
      target.style.transform = 'scale(1.1)';
      target.style.boxShadow = `rgba(0, 0, 0, 0.19) 0px ${10 * 2 *  imgHoverScale}px ${20 * 2 *  imgHoverScale}px, rgba(0, 0, 0, 0.23) 0px ${6 * 2 * imgHoverScale}px ${6 * 2 * imgHoverScale}px`
      // if (target.classList.contains('zoom-in')) return;
      // if (target.classList.contains('card-image')) {
      //   target.classList.add('zoom-in');
      //   // target.style.boxShadow = `rgba(0, 0, 0, 0.19) 0px ${10 * 1.2}px ${20 * 1.2}px, rgba(0, 0, 0, 0.23) 0px ${6 * 1.2}px ${6 * 1.2}px`
      // }
    });

    imgRef.current.addEventListener('mouseout', (ev) => {
      ev.stopPropagation();
      const target = ev.target as HTMLElement;
      target.style.transform = 'scale(1)';
      target.style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
            // if (target.classList.contains('zoom-in') && target.classList.contains('card-image')) {
      //   target.classList.add('zoom-out');
      //   // target.style.boxShadow = `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`
      // }
    });

  }, [])

  return (
    <div>
      <img
        ref={imgRef}
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