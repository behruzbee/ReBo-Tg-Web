import { Grid } from "@mantine/core"

import { Product } from "~entities/product"

const BasketPage = () => {
    return (
        <Grid mt={10} p='0 5px'>
            <Grid.Col span={6}>
                <Product />
            </Grid.Col>
            <Grid.Col span={6}>
                <Product />
            </Grid.Col>
            <Grid.Col span={6}>
                <Product />
            </Grid.Col>
            <Grid.Col span={6}>
                <Product />
            </Grid.Col>
        </Grid >
    )
}

export default BasketPage


