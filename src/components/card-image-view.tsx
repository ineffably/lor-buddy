import { useEffect, useRef } from 'react';
import { LorCard } from '../types/lor-types';
import { randomInt } from '../library/data-utils';
import { Link } from 'wouter';
import { naturalCardSize } from '../library/config';

interface CardImageViewProps {
  card: LorCard;
  scale?: number;
}

const fadeIn = (el: HTMLElement) => el.classList.add('fade-in');

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
    })

    imgRef.current.addEventListener('mouseover', (ev) => {
      ev.stopPropagation();
      const target = ev.target as HTMLElement;
      target.style.transform = 'scale(1.1)';
      target.style.boxShadow = `rgba(0, 0, 0, 0.19) 0px ${10 * 2 * imgHoverScale}px ${20 * 2 * imgHoverScale}px, rgba(0, 0, 0, 0.23) 0px ${6 * 2 * imgHoverScale}px ${6 * 2 * imgHoverScale}px`
    });

    imgRef.current.addEventListener('mouseout', (ev) => {
      ev.stopPropagation();
      const target = ev.target as HTMLElement;
      target.style.transform = 'scale(1)';
      target.style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
    });

  }, [])

  return (
    <div>
      <Link href={`/card/${card.cardCode}`} >
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
            width: `${naturalCardSize.width * scale}px`,
            height: `${naturalCardSize.height * scale}px`,
          }}
        />
      </Link>
    </div>
  );

}