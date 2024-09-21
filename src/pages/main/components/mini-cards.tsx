import { Image } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

import styles from './styles.module.scss'

const MiniCards = () => {
    return (
        <Carousel className={styles.wrapper} align="start" slideGap="sm" loop withControls={false}>
            <Carousel.Slide className={styles.item}>
                <div>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
                        w='100%'
                        radius='8px'
                    />
                    <p className={styles.text}>Telefonlar</p>
                </div>
            </Carousel.Slide>
            <Carousel.Slide className={styles.item}>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
                    w='100%'
                    radius='8px'
                />
                <p className={styles.text}>Telefonlar</p>
            </Carousel.Slide>
            <Carousel.Slide className={styles.item}>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
                    w='100%'
                    radius='8px'
                />
                <p className={styles.text}>Telefonlar</p>
            </Carousel.Slide>
            <Carousel.Slide className={styles.item}>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                    w='100%'
                    radius='8px'
                />
                <p className={styles.text}>Telefonlar</p>
            </Carousel.Slide>
            <Carousel.Slide className={styles.item}>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                    w='100%'
                    radius='8px'
                />
                <p className={styles.text}>Telefonlar</p>
            </Carousel.Slide>
            <Carousel.Slide className={styles.item}>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    w='100%'
                    radius='8px'
                />
                <p className={styles.text}>Telefonlar</p>
            </Carousel.Slide>
        </Carousel>
    )
}

export default MiniCards