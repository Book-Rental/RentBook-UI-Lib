import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Rb_Anchor from '../lib/components/atoms/Rb_Anchor';

describe('Rb_Anchor', () => {
  it('renders children correctly', () => {
    render(<Rb_Anchor href="/">Home</Rb_Anchor>);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders href correctly', () => {
    render(<Rb_Anchor href="/about">About</Rb_Anchor>);

    const link = screen.getByRole('link', { name: 'About' });

    expect(link).toHaveAttribute('href', '/about');
  });

  it('applies default variant classes', () => {
    render(<Rb_Anchor href="/">Default</Rb_Anchor>);

    const link = screen.getByRole('link');

    expect(link.className).toContain('text-blue-600');
    expect(link.className).toContain('inline-flex');
  });

  it('applies underline variant classes', () => {
    render(
      <Rb_Anchor href="/" variant="underline">
                Underline
      </Rb_Anchor>
    );

    const link = screen.getByRole('link');

    expect(link.className).toContain('underline');
  });

  it('applies button variant classes', () => {
    render(
      <Rb_Anchor href="/" variant="button">
                Button Link
      </Rb_Anchor>
    );

    const link = screen.getByRole('link');

    expect(link.className).toContain('bg-blue-600');
    expect(link.className).toContain('rounded-md');
  });

  it('renders left icon', () => {
    render(
      <Rb_Anchor
        href="/"
        leftIcon={<span data-testid="left-icon">L</span>}
      >
                Link
      </Rb_Anchor>
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders right icon', () => {
    render(
      <Rb_Anchor
        href="/"
        rightIcon={<span data-testid="right-icon">R</span>}
      >
                Link
      </Rb_Anchor>
    );

    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('adds secure rel when target is _blank', () => {
    render(
      <Rb_Anchor
        href="https://example.com"
        target="_blank"
      >
                External
      </Rb_Anchor>
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('uses custom rel when provided', () => {
    render(
      <Rb_Anchor
        href="https://example.com"
        target="_blank"
        rel="nofollow"
      >
                External
      </Rb_Anchor>
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('rel', 'nofollow');
  });

  it('applies custom className', () => {
    render(
      <Rb_Anchor
        href="/"
        className="custom-class"
      >
                Link
      </Rb_Anchor>
    );

    const link = screen.getByRole('link');

    expect(link.className).toContain('custom-class');
  });
});