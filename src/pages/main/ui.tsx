import { Container } from "@mantine/core"

import { MainHeader } from "~widgets/main-header"
import { Carousel } from "~widgets/carousel"
import { ProductList } from "~widgets/product-list"

import { categories, productsCategory, slides } from "~shared/constants"
import { Loader } from "~shared/ui/loader"

import styles from './styles.module.scss'
import { MiniCards } from "./components"

const MainPage = () => {

    if (!slides || !categories || !productsCategory) {
        return <Loader />
    }

    return (
        <Container className={styles.container} pb='20px' pos='relative'>
            <MainHeader />
            <Carousel CarouselSlideProps={{ h: '200px' }} slides={slides} />
            <MiniCards categories={categories} />
            {productsCategory.map(category => (
                <ProductList key={category.title} title={category.title} products={category.products} />
            ))}
        </Container>
    )
}

export default MainPage