import React from "react";

type AnchorVariant = "default" | "underline" | "button";

interface AnchorProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: AnchorVariant;
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const variantClasses: Record<AnchorVariant, string> = {
    default:
        "inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors",

    underline:
        "inline-flex items-center gap-2 text-blue-600 underline hover:no-underline transition-colors",

    button:
        "inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors",
};

const Rb_Anchor: React.FC<AnchorProps> = ({
    variant = "default",
    className = "",
    children,
    leftIcon,
    rightIcon,
    target,
    rel,
    ...props
}) => {
    const secureRel =
        target === "_blank"
            ? rel ?? "noopener noreferrer"
            : rel;

    return (
        <a
            {...props}
            target={target}
            rel={secureRel}
            className={`${variantClasses[variant]} text-sm sm:text-base ${className}`}
        >
            {leftIcon && (
                <span className="inline-flex items-center" aria-hidden="true">
                    {leftIcon}
                </span>
            )}

            <span>{children}</span>

            {rightIcon && (
                <span className="inline-flex items-center" aria-hidden="true">
                    {rightIcon}
                </span>
            )}
        </a>
    );
};

export default Rb_Anchor;