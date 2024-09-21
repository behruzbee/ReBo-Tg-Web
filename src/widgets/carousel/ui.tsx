import { Carousel as MCarousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const Carousel = () => {
    return (
        <MCarousel loop>
            <MCarousel.Slide>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png" radius='12px' />
            </MCarousel.Slide>
            <MCarousel.Slide>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png" radius='12px' />
            </MCarousel.Slide>
            <MCarousel.Slide>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png" radius='12px' />
            </MCarousel.Slide>
        </MCarousel>
    )
}

export default Carousel