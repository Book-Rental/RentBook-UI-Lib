import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchField from '../lib/components/molecules/Search';

describe('SearchField', () => {
  it('renders search input', () => {
    render(<SearchField />);

    expect(
      screen.getByRole('searchbox')
    ).toBeInTheDocument();
  });

  it('renders search input with type search', () => {
    render(<SearchField />);

    expect(
      screen.getByRole('searchbox')
    ).toHaveAttribute('type', 'search');
  });

  it('uses default aria-label', () => {
    render(<SearchField />);

    expect(
      screen.getByRole('searchbox', {
        name: 'Search',
      })
    ).toBeInTheDocument();
  });

  it('uses custom aria-label', () => {
    render(
      <SearchField
        aria-label="Search Books"
      />
    );

    expect(
      screen.getByRole('searchbox', {
        name: 'Search Books',
      })
    ).toBeInTheDocument();
  });

  it('applies custom container class', () => {
    const { container } = render(
      <SearchField
        containerClassName="max-w-lg"
      />
    );

    expect(container.firstChild).toHaveClass(
      'max-w-lg'
    );
  });

  it('applies custom input class', () => {
    render(
      <SearchField
        className="custom-input"
      />
    );

    expect(
      screen.getByRole('searchbox')
    ).toHaveClass('custom-input');
  });

  it('passes placeholder prop', () => {
    render(
      <SearchField
        placeholder="Search books..."
      />
    );

    expect(
      screen.getByPlaceholderText(
        'Search books...'
      )
    ).toBeInTheDocument();
  });

  it('renders value', () => {
    render(
      <SearchField value="Harry Potter" readOnly />
    );

    expect(
      screen.getByDisplayValue(
        'Harry Potter'
      )
    ).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const handleChange = vi.fn();

    render(
      <SearchField
        onChange={handleChange}
      />
    );

    fireEvent.change(
      screen.getByRole('searchbox'),
      {
        target: {
          value: 'React',
        },
      }
    );

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders search icon', () => {
    const { container } = render(
      <SearchField />
    );

    expect(
      container.querySelector('svg')
    ).toBeInTheDocument();
  });
});