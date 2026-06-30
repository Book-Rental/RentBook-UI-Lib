export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    siblingCount?: number;
    disabled?: boolean;
    onPageChange: (page: number) => void;
}