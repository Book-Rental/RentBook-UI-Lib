import React from 'react';
import { Rb_Image } from '../../atoms';
import { ProductCardProps } from './ProductCard.types';
import './ProductCard.styles.scss';
import Rb_Text from '../../atoms/Rb_Text';
import { Rb_Rating } from '../../atoms';

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  author,
  rating,
  priceText,
  isAction = true,
  children,
  className = '',
  imageClassName = '',
  contentClassName = '',
  imageHeight,
  cardWidth,        
  cardMinWidth,      
  cardMaxWidth,
  onProductClick,
}) => {
  return (
    <div
      className={`product-card ${className}`}
      style={{
        ...(imageHeight !== undefined && { '--product-card-image-height': typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight }),
        ...(cardWidth !== undefined && { '--product-card-width': typeof cardWidth === 'number' ? `${cardWidth}px` : cardWidth }),
        ...(cardMaxWidth !== undefined && { '--product-card-max-width': typeof cardMaxWidth === 'number' ? `${cardMaxWidth}px` : cardMaxWidth }),
        ...(cardMinWidth !== undefined && { '--product-card-min-width': typeof cardMinWidth === 'number' ? `${cardMinWidth}px` : cardMinWidth }),
        ...(cardMaxWidth !== undefined && { '--product-card-flex-basis': typeof cardMaxWidth === 'number' ? `${cardMaxWidth}px` : cardMaxWidth }),
      } as React.CSSProperties}
    >
      <Rb_Image
        src={imageUrl}
        alt={title}
        shape="default"
        className={`product-card_image ${imageClassName}`}
        onClick={onProductClick}
      />

      <div className={`product-card_content ${contentClassName}`}>
        <Rb_Text variant="h5" className="product-card_title" onClick={onProductClick}>
          {title}
        </Rb_Text>

        <Rb_Text variant="p" className="product-card_author">
          {author}
        </Rb_Text>

        {rating !== undefined && (
          <div className="product-card_rating">
            <Rb_Rating value={rating} readOnly size={16} />
            <Rb_Text variant="p" className="product-card_rating-value">
              {rating.toFixed(1)}
            </Rb_Text>
          </div>
        )}

        <Rb_Text variant="h6" className="product-card_price">
          {priceText}
        </Rb_Text>

        {isAction && <div className="product-card_button">{children}</div>}
      </div>
    </div>
  );
};

export default ProductCard;