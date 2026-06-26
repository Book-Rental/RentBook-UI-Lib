import React from "react";

type ImageShape = "default" | "rounded" | "circle";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    shape?: ImageShape;
    aspectRatio?: string;
}

const shapeClasses: Record<ImageShape, string> = {
    default: "",
    rounded: "rounded-lg",
    circle: "rounded-full",
};

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    shape = "default",
    aspectRatio,
    className = "",
    loading = "lazy",
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            style={aspectRatio ? { aspectRatio } : undefined}
            className={`object-cover ${shapeClasses[shape]} ${className}`}
            {...props}
        />
    );
};

export default Image;