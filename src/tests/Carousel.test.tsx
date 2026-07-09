import React, { useEffect } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../lib/components/molecules/Carousel';


const { slidePrevMock, slideNextMock } = vi.hoisted(() => ({
  slidePrevMock: vi.fn(),
  slideNextMock: vi.fn(),
}));

interface MockSwiperInstance {
    realIndex: number;
    slidePrev: () => void;
    slideNext: () => void;
}

interface SwiperMockProps extends React.PropsWithChildren {
    onSwiper?: (swiper: MockSwiperInstance) => void;
    onSlideChange?: (swiper: MockSwiperInstance) => void;
}

vi.mock('swiper/react', () => ({

  Swiper: ({ children, onSwiper, onSlideChange }: SwiperMockProps) => {
    useEffect(() => {
      const fakeSwiper: MockSwiperInstance = {
        realIndex: 0,
        slidePrev: slidePrevMock,
        slideNext: slideNextMock,
      };
      onSwiper?.(fakeSwiper);
      onSlideChange?.(fakeSwiper);
    }, []);

    return <div data-testid="swiper">{children}</div>;
  },
  SwiperSlide: ({ children }: React.PropsWithChildren) => (
    <div data-testid="slide">{children}</div>
  ),
}));

vi.mock('swiper/modules', () => ({
  Pagination: {},
  Autoplay: {},
}));

interface MockButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

interface MockTextProps {
    children?: React.ReactNode;
}

interface MockNavButtonProps {
    direction: 'prev' | 'next';
    onClick?: () => void;
    disabled?: boolean;
}

vi.mock('../lib/components/atoms', () => ({
  Rb_Button: ({ children, onClick }: MockButtonProps) => (
    <button onClick={onClick}>{children}</button>
  ),

  Rb_Text: ({ children }: MockTextProps) => (
    <div>{children}</div>
  ),

  Rb_CarouselNavButton: ({ direction, onClick, disabled }: MockNavButtonProps) => (
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

beforeEach(() => {
  slidePrevMock.mockClear();
  slideNextMock.mockClear();
});

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


  it('calls swiper.slideNext when the next button is clicked', () => {
    render(<Carousel slides={slides} />);

    fireEvent.click(screen.getByTestId('next-button'));

    expect(slideNextMock).toHaveBeenCalledTimes(1);
  });

  it('calls swiper.slidePrev when the prev button is clicked', () => {

    render(<Carousel slides={slides} loop />);

    fireEvent.click(screen.getByTestId('prev-button'));

    expect(slidePrevMock).toHaveBeenCalledTimes(1);
  });

  it('disables the prev button on the first slide when loop is false', () => {
    render(<Carousel slides={slides} loop={false} />);

    expect(screen.getByTestId('prev-button')).toBeDisabled();
  });

  it('does not disable the prev button when loop is true', () => {
    render(<Carousel slides={slides} loop />);

    expect(screen.getByTestId('prev-button')).not.toBeDisabled();
  });


  it('invokes onSwiper and onSlideChange without throwing and sets initial active index state', () => {
    render(<Carousel slides={slides} />);
    expect(screen.getByTestId('swiper')).toBeInTheDocument();
    expect(screen.getByTestId('prev-button')).toBeDisabled();
  });
});