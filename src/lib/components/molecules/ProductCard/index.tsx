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
}) => {
  return (
    <div className={`product-card ${className}`}>
      <Rb_Image
        src={imageUrl}
        alt={title}
        shape="default"
        className="product-card_image"
      />

      <div className="product-card_content">
        <Rb_Text
          variant="h5"
          className="product-card_title"
        >
          {title}
        </Rb_Text>

        <Rb_Text
          variant="p"
          className="product-card_author"
        >
          {author}
        </Rb_Text>

        {rating !== undefined && (
          <div className="product-card_rating">
            <Rb_Rating
              value={rating}
              readOnly
              size={16}
            />

            <Rb_Text
              variant="p"
              className="product-card_rating-value"
            >
              {rating.toFixed(1)}
            </Rb_Text>
          </div>
        )}

        <Rb_Text
          variant="h6"
          className="product-card_price"
        >
          {priceText}
        </Rb_Text>

        {isAction && (
          <div className="product-card_button">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
