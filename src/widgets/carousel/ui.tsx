import { type CarouselProps as IMCarouselProps, Carousel as MCarousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import { ISlide } from './types';
interface ICarouselProps {
    slides: ISlide[],
    CarouselProps?: IMCarouselProps,
    CarouselSlideProps?: IMCarouselSlideProps
}

const Carousel = ({ slides, CarouselProps, CarouselSlideProps }: ICarouselProps) => {
    return (
        <MCarousel loop {...CarouselProps} >
            {slides.map(slide => (
                <MCarousel.Slide key={slide.imageUrl} h='50px' {...CarouselSlideProps}>
                    <Image src={slide.imageUrl} alt={slide.alt} height='100%' radius='12px' fit='contain' />
                </MCarousel.Slide>
            ))}
        </MCarousel>
    )
}

export default Carousel