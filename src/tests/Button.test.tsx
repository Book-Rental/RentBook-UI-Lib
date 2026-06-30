import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from '../lib/components/atoms/Button';

describe('Button Component', () => {
  it('renders children text correctly', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('applies the correct classes for variants and sizes', () => {
    const { rerender } = render(<Button variant="outline" size="lg">Outline Large</Button>);
    let button = screen.getByRole('button');
    
    // Check for outline and lg variant classes
    expect(button).toHaveClass('border-blue-600', 'px-6', 'py-3');

    // Rerender with different props to check mapping change
    rerender(<Button variant="secondary" size="sm">Secondary Small</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-200', 'px-3', 'py-1.5');
  });

  it('triggers onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<Button onClick={handleClick}>Interactive</Button>);
    const button = screen.getByRole('button');
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled and cannot be clicked when disabled prop is true', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
    
    // Attempting action to ensure handler isn't fired
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows loading state, hides left icon, and handles interaction blocks', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const LeftIcon = <span data-testid="left-icon">⬅️</span>;

    render(
      <Button isLoading leftIcon={LeftIcon} onClick={handleClick}>
        Loading Button
      </Button>
    );
    
    const button = screen.getByRole('button');

    // 1. Accessibility & Disabled Checks
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');

    // 2. Icon & Spinner Checks
    // Left icon should be completely missing from DOM because isLoading is true
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    
    // 3. User interaction block check
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders left and right icons when not loading', () => {
    const LeftIcon = <span data-testid="left-icon">🦖</span>;
    const RightIcon = <span data-testid="right-icon">🦕</span>;

    render(
      <Button leftIcon={LeftIcon} rightIcon={RightIcon}>
        With Icons
      </Button>
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('applies custom classNames alongside default design systems', () => {
    render(<Button className="mt-4 custom-class">Styled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('inline-flex', 'mt-4', 'custom-class');
  });
});
