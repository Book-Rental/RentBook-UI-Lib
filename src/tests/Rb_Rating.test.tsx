import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Rb_Rating from '../lib/components/atoms/Rb_Rating';

describe('Rb_Rating', () => {
  it('renders default 5 stars', () => {
    render(<Rb_Rating value={3} />);

    expect(screen.getAllByLabelText(/Rate/)).toHaveLength(5);
  });

  it('renders custom max stars', () => {
    render(<Rb_Rating value={2} max={7} />);

    expect(screen.getAllByLabelText(/Rate/)).toHaveLength(7);
  });

  it('applies custom className', () => {
    const { container } = render(
      <Rb_Rating value={3} className="custom-rating" />
    );

    expect(container.firstChild).toHaveClass('custom-rating');
  });

  it('applies inline styles to rating container', () => {
    const { container } = render(<Rb_Rating value={3} />);

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    });
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();

    render(
      <Rb_Rating
        value={2}
        readOnly={false}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Rate 4 stars'));

    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('does not call onChange when readOnly', () => {
    const handleChange = vi.fn();

    render(
      <Rb_Rating
        value={2}
        readOnly
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Rate 4 stars'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows pointer cursor when not readOnly', () => {
    render(<Rb_Rating value={2} readOnly={false} />);

    expect(screen.getByLabelText('Rate 1 star')).toHaveStyle({
      cursor: 'pointer',
    });
  });

  it('shows default cursor when readOnly', () => {
    render(<Rb_Rating value={2} readOnly />);

    expect(screen.getByLabelText('Rate 1 star')).toHaveStyle({
      cursor: 'default',
    });
  });

  it('renders a half star for decimal ratings', () => {
    const { container } = render(<Rb_Rating value={3.5} />);

    const svgs = container.querySelectorAll('svg');

    expect(svgs).toHaveLength(5);
  });

  it('renders empty stars when rating is zero', () => {
    render(<Rb_Rating value={0} />);

    expect(screen.getAllByLabelText(/Rate/)).toHaveLength(5);
  });
});