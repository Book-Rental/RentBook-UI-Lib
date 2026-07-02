import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { Rb_CarouselNavButton } from '../../atoms';


export interface CarouselSlide {
    id: number | string;
    image: string;
    title?: string;
    description?: string;
}

export interface CarouselProps {
    slides: CarouselSlide[];
    width?: string;
    height?: string;
    autoPlay?: boolean;
    loop?: boolean;
    showPagination?: boolean;
    showNavigation?: boolean;
    onSlideClick?: (slide: CarouselSlide) => void;
}

const Carousel: React.FC<CarouselProps> = ({
    slides,
    width = '100%',
    height = '500px',
    autoPlay = true,
    loop = false,
    showPagination = true,
    showNavigation = true,
    onSlideClick,
}) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div
            className='relative mx-auto mt-4 overflow-hidden'
            style={{ width }}
        >
            <Swiper
                modules={[Pagination, Autoplay]}
                loop={loop}
                pagination={showPagination ? { clickable: true } : false}
                autoplay={
                    autoPlay
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                        }
                        : false
                }
                onSwiper={(swiper: SwiperType) => {
                    swiperRef.current = swiper;
                    setActiveIndex(swiper.realIndex);
                }}
                onSlideChange={(swiper: SwiperType) => {
                    setActiveIndex(swiper.realIndex);
                }}
                className='w-full'
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className='relative w-full cursor-pointer overflow-hidden'
                            style={{ height }}
                            onClick={() => onSlideClick?.(slide)}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title ?? 'Carousel Slide'}
                                className='h-full w-full object-cover'
                            />

                            {(slide.title || slide.description) && (
                                <div className='absolute inset-0 flex items-end bg-black/40'>
                                    <div className='p-6 text-white md:p-10'>
                                        {slide.title && (
                                            <h2 className='text-2xl font-bold md:text-4xl'>
                                                {slide.title}
                                            </h2>
                                        )}

                                        {slide.description && (
                                            <p className='mt-3 max-w-xl text-sm text-gray-200 md:text-lg'>
                                                {slide.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showNavigation && (
                <>
                    <Rb_CarouselNavButton
                        direction='prev'
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={!loop && activeIndex === 0}
                        className='absolute left-5 top-1/2 z-20 -translate-y-1/2'
                    />

                    <Rb_CarouselNavButton
                        direction='next'
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={!loop && activeIndex === slides.length - 1}
                        className='absolute right-5 top-1/2 z-20 -translate-y-1/2'
                    />
                </>
            )}
        </div>
    );
};

export default Carousel;