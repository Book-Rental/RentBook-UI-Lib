import { render, screen } from '@testing-library/react';

// Simple dummy component
const Dummy = () => <h1>Hello Vitest</h1>;

describe('Setup Verification', () => {
  it('renders correctly', () => {
    render(<Dummy />);
    expect(screen.getByText('Hello Vitest')).toBeInTheDocument();
  });
});
