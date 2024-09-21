import { Container } from "@mantine/core"

import { MainHeader } from "~widgets/main-header"
import { Carousel } from "~widgets/carousel"

import styles from './styles.module.scss'
import { MiniCards } from "./components"

const MainPage = () => {
    return (
        <Container className={styles.container}>
            <MainHeader />
            <Carousel />
            <MiniCards />
        </Container>
    )
}

export default MainPage