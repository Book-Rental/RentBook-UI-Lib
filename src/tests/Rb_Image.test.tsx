import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Rb_Image from '../lib/components/atoms/Rb_Image';

describe('Rb_Image', () => {
  it('renders image with src and alt', () => {
    render(<Rb_Image src="/cat.jpg" alt="Cat" />);

    const image = screen.getByAltText('Cat');

    expect(image).toHaveAttribute('src', '/cat.jpg');
    expect(image).toHaveAttribute('alt', 'Cat');
  });

  it('uses lazy loading by default', () => {
    render(<Rb_Image src="/cat.jpg" alt="Cat" />);

    expect(screen.getByAltText('Cat'))
      .toHaveAttribute('loading', 'lazy');
  });

  it('applies rounded class', () => {
    render(
      <Rb_Image
        src="/cat.jpg"
        alt="Cat"
        shape="rounded"
      />
    );

    expect(screen.getByAltText('Cat'))
      .toHaveClass('rounded-lg');
  });

  it('applies circle class', () => {
    render(
      <Rb_Image
        src="/cat.jpg"
        alt="Cat"
        shape="circle"
      />
    );

    expect(screen.getByAltText('Cat'))
      .toHaveClass('rounded-full');
  });

  it('applies aspect ratio', () => {
    render(
      <Rb_Image
        src="/cat.jpg"
        alt="Cat"
        aspectRatio="16/9"
      />
    );

    expect(screen.getByAltText('Cat'))
      .toHaveStyle({
        aspectRatio: '16/9',
      });
  });

  it('uses fallback image on error', () => {
    render(<Rb_Image src="/broken.jpg" alt="Cat" />);

    const image = screen.getByAltText('Cat');

    fireEvent.error(image);

    expect(image.getAttribute('src'))
      .toContain('fallbackImage');
  });

  it('calls onError callback', () => {
    const onError = vi.fn();

    render(
      <Rb_Image
        src="/broken.jpg"
        alt="Cat"
        onError={onError}
      />
    );

    fireEvent.error(screen.getByAltText('Cat'));

    expect(onError).toHaveBeenCalled();
  });
});