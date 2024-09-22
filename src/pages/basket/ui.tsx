import { Grid } from "@mantine/core"

import { Product } from "~entities/product"

const BasketPage = () => {
    return (
        <Grid mt={10} p='0 5px'>
            <Grid.Col span={6}>
                <Product id="1" imageUrl="https://cdn11.bigcommerce.com/s-a8bv6/images/stencil/1280x1280/products/419/287/Duracell_AAA__98716.1398448474.jpg?c=2" name="Duracell AAA Battery" price={5000} />
            </Grid.Col>
        </Grid >
    )
}

export default BasketPage


