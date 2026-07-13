import { render } from '@testing-library/react';
import { FaHeart } from 'react-icons/fa';
import { describe, expect, it } from 'vitest';
import Rb_Icon from '../lib/components/atoms/Rb_Icon';

describe('Rb_Icon', () => {
  it('renders the icon', () => {
    const { container } = render(<Rb_Icon icon={FaHeart} />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Rb_Icon icon={FaHeart} className="custom-icon" />
    );

    expect(container.firstChild).toHaveClass('custom-icon');
  });

  it('applies inline styles', () => {
    const { container } = render(<Rb_Icon icon={FaHeart} />);

    expect(container.firstChild).toHaveStyle({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    });
  });

  it('passes size to the icon', () => {
    const { container } = render(
      <Rb_Icon icon={FaHeart} size={30} color="red" />
    );

    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('height', '30');
    expect(svg).toHaveAttribute('width', '30');
  });
});
