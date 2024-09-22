import { Container } from "@mantine/core"

import { MainHeader } from "~widgets/main-header"
import { Carousel } from "~widgets/carousel"
import { ProductList } from "~widgets/product-list"

import { categories, productsCategory, slides } from "~shared/constants"

import styles from './styles.module.scss'
import { MiniCards } from "./components"

const MainPage = () => {
    return (
        <Container className={styles.container} pb='20px'>
            <MainHeader />
            <Carousel CarouselSlideProps={{h: '200px'}} slides={slides} />
            <MiniCards categories={categories} />
            {productsCategory.map(category => (
                <ProductList key={category.title} title={category.title} products={category.products} />
            ))}
        </Container>
    )
}

export default MainPage