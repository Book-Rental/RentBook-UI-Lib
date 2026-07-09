import React from "react";
import { Loader2 } from "lucide-react";

export interface LoadingSpinnerProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Rb_LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Loading...",
  size = "lg",
  className = "",
}) => {
  const spinnerSize = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };

  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div
      className={`flex h-[calc(100vh-64px)] items-center justify-center ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <Loader2
          className={`${spinnerSize[size]} animate-spin text-blue-600`}
        />

        {text && (
          <p className={`${textSize[size]} text-gray-800`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Rb_LoadingSpinner;