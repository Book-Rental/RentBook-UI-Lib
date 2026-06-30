export const DOTS = "...";

export const getPaginationRange = (
    currentPage: number,
    totalPages: number,
    siblingCount = 1
): (number | string)[] => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPages <= totalPageNumbers) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const firstPage = 1;
    const lastPage = totalPages;

    if (!showLeftDots && showRightDots) {
        const leftRange = Array.from(
            { length: 3 + siblingCount },
            (_, i) => i + 1
        );

        return [...leftRange, DOTS, lastPage];
    }

    if (showLeftDots && !showRightDots) {
        const rightRange = Array.from(
            { length: 3 + siblingCount },
            (_, i) => totalPages - (2 + siblingCount) + i
        );

        return [firstPage, DOTS, ...rightRange];
    }

    const middleRange = Array.from(
        { length: rightSibling - leftSibling + 1 },
        (_, i) => leftSibling + i
    );

    return [
        firstPage,
        DOTS,
        ...middleRange,
        DOTS,
        lastPage,
    ];
};