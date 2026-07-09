import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../lib/components/molecules/Carousel';

vi.mock('swiper/react', () => ({
  Swiper: ({ children }: any) => (
    <div data-testid="swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: any) => (
    <div data-testid="slide">{children}</div>
  ),
}));

vi.mock('swiper/modules', () => ({
  Pagination: {},
  Autoplay: {},
}));

vi.mock('../lib/components/atoms', () => ({
  Rb_Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),

  Rb_Text: ({ children }: any) => (
    <div>{children}</div>
  ),

  Rb_CarouselNavButton: ({ direction, onClick, disabled }: any) => (
    <button
      data-testid={`${direction}-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction}
    </button>
  ),
}));

const slides = [
  {
    id: 1,
    image: '/image1.jpg',
    title: 'Book One',
    description: 'Description One',
  },
  {
    id: 2,
    image: '/image2.jpg',
    title: 'Book Two',
    description: 'Description Two',
  },
];

describe('Carousel', () => {
  it('renders all slides', () => {
    render(<Carousel slides={slides} />);

    expect(screen.getAllByTestId('slide')).toHaveLength(2);
  });

  it('renders slide title and description', () => {
    render(<Carousel slides={slides} />);

    expect(screen.getByText('Book One')).toBeInTheDocument();
    expect(screen.getByText('Description One')).toBeInTheDocument();

    expect(screen.getByText('Book Two')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
  });

  it('renders images', () => {
    render(<Carousel slides={slides} />);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute('src', '/image1.jpg');
    expect(images[1]).toHaveAttribute('src', '/image2.jpg');
  });

  it('calls onSlideClick', () => {
    const onSlideClick = vi.fn();

    render(
      <Carousel
        slides={slides}
        onSlideClick={onSlideClick}
      />
    );

    fireEvent.click(screen.getByAltText('Book One'));

    expect(onSlideClick).toHaveBeenCalledTimes(1);
    expect(onSlideClick).toHaveBeenCalledWith(slides[0]);
  });

  it('calls onButtonClick', () => {
    const onButtonClick = vi.fn();

    render(
      <Carousel
        slides={slides}
        onButtonClick={onButtonClick}
      />
    );

    fireEvent.click(
      screen.getAllByRole('button', {
        name: 'Browse Books',
      })[0]
    );

    expect(onButtonClick).toHaveBeenCalled();
  });

  it('hides navigation buttons', () => {
    render(
      <Carousel
        slides={slides}
        showNavigation={false}
      />
    );

    expect(
      screen.queryByTestId('prev-button')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByTestId('next-button')
    ).not.toBeInTheDocument();
  });

  it('shows navigation buttons', () => {
    render(<Carousel slides={slides} />);

    expect(
      screen.getByTestId('prev-button')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('next-button')
    ).toBeInTheDocument();
  });

  it('applies custom width class', () => {
    const { container } = render(
      <Carousel
        slides={slides}
        widthClassName="max-w-xl"
      />
    );

    expect(container.firstChild).toHaveClass('max-w-xl');
  });

  it('applies custom height class', () => {
    render(
      <Carousel
        slides={slides}
        heightClassName="h-96"
      />
    );

    const image = screen.getByAltText('Book One');

    expect(image.parentElement).toHaveClass('h-96');
  });
});