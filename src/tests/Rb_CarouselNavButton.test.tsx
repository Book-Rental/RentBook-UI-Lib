import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Rb_CarouselNavButton from '../lib/components/atoms/Rb_CarouselNavButton';

describe('Rb_CarouselNavButton', () => {
  it('renders previous button', () => {
    render(
      <Rb_CarouselNavButton
        direction="prev"
        onClick={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', {
        name: 'Previous Slide',
      })
    ).toBeInTheDocument();
  });

  it('renders next button', () => {
    render(
      <Rb_CarouselNavButton
        direction="next"
        onClick={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', {
        name: 'Next Slide',
      })
    ).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();

    render(
      <Rb_CarouselNavButton
        direction="next"
        onClick={handleClick}
      />
    );

    fireEvent.click(
      screen.getByRole('button')
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Rb_CarouselNavButton
        direction="prev"
        onClick={vi.fn()}
        disabled
      />
    );

    expect(
      screen.getByRole('button')
    ).toBeDisabled();
  });

  it('is enabled by default', () => {
    render(
      <Rb_CarouselNavButton
        direction="prev"
        onClick={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button')
    ).not.toBeDisabled();
  });

  it('applies custom className', () => {
    render(
      <Rb_CarouselNavButton
        direction="next"
        onClick={vi.fn()}
        className="custom-nav"
      />
    );

    expect(
      screen.getByRole('button')
    ).toHaveClass('custom-nav');
  });

  it('applies disabled styling', () => {
    render(
      <Rb_CarouselNavButton
        direction="prev"
        onClick={vi.fn()}
        disabled
      />
    );

    expect(
      screen.getByRole('button')
    ).toHaveClass('cursor-not-allowed');
  });

  it('applies enabled styling', () => {
    render(
      <Rb_CarouselNavButton
        direction="next"
        onClick={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button')
    ).toHaveClass('hover:!bg-blue-600');
  });

  it('renders previous icon', () => {
    const { container } = render(
      <Rb_CarouselNavButton
        direction="prev"
        onClick={vi.fn()}
      />
    );

    expect(
      container.querySelector('svg')
    ).toBeInTheDocument();
  });

  it('renders next icon', () => {
    const { container } = render(
      <Rb_CarouselNavButton
        direction="next"
        onClick={vi.fn()}
      />
    );

    expect(
      container.querySelector('svg')
    ).toBeInTheDocument();
  });
});