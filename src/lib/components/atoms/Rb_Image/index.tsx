import React, { useState, useEffect } from "react";
import fallbackImage from "../../../../assets/fallbackImage.png";
type ImageShape = "default" | "rounded" | "circle";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    shape?: ImageShape;
    aspectRatio?: string;
    fallbackSrc?: string;
}

const shapeClasses: Record<ImageShape, string> = {
    default: "",
    rounded: "rounded-lg",
    circle: "rounded-full",
};

const Rb_Image: React.FC<ImageProps> = ({
    src,
    alt,
    shape = "default",
    aspectRatio,
    className = "",
    loading = "lazy",
    fallbackSrc = fallbackImage,
    onError,
    ...props
}) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
        if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
        onError?.(e);
    };

    return (
        <img
            {...props}
            src={imageSrc}
            alt={alt}
            loading={loading}
            style={aspectRatio ? { aspectRatio } : undefined}
            className={`object-cover ${shapeClasses[shape]} ${className}`}
            onError={handleError}
        />
    );
};

export default Rb_Image;