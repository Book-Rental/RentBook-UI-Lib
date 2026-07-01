import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Rb_Input from '../../atoms/Rb_Input';

interface SearchFieldProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    containerClassName?: string;
    'aria-label'?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
    containerClassName = '',
    className = '',
    'aria-label': ariaLabel = 'Search',
    ...props
}) => {
    return (
        <div className={`relative w-full ${containerClassName}`}>
            <FiSearch
                size={18}
                className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'
                aria-hidden='true'
            />

            <Rb_Input
                type='search'
                aria-label={ariaLabel}
                {...props}
                className={`mt-0 mb-0 rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base ${className}`}
            />
        </div>
    );
};

export default SearchField;