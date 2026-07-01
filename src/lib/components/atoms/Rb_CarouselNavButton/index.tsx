import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Rb_Button from '../Rb_Button';

interface CarouselNavButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

const Rb_CarouselNavButton: React.FC<CarouselNavButtonProps> = ({ direction, onClick, disabled = false, className = '',
}) => {
    const icon = direction === 'prev' ? (<FiChevronLeft size={24} />
    ) : (
        <FiChevronRight size={24} />
    );

    return (<Rb_Button
        type='button'
        aria-label={direction === 'prev' ? 'Previous Slide' : 'Next Slide'}
        onClick={onClick}
        disabled={disabled}
        variant='primary'
        size='md'
        leftIcon={direction === 'prev' ? icon : undefined}
        rightIcon={direction === 'next' ? icon : undefined}
        className={`
        !p-0
        !h-12
        !w-12
        !rounded-full
        !border
        !shadow-lg
        !flex
        !items-center
        !justify-center
        !gap-0
        transition-all
        duration-300
        ${disabled ? '!bg-gray-200 !border-gray-300 !text-gray-400 cursor-not-allowed' : '!bg-white !border-white !text-gray-800 hover:!bg-blue-600 hover:!border-blue-600 hover:!text-white active:scale-95'}
        ${className}
      `}
    />
    );
};

export default Rb_CarouselNavButton;