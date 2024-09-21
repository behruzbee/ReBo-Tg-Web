import { Flex, Grid, Title } from '@mantine/core'
import Product from './Product'

const ProductList = () => {
    return (
        <Flex mt='10px' direction='column' >
            <Title order={2} c='#2e2e2e'>Telefonlar</Title>
            <Grid columns={12} w='100%' mt='20px'>
                <Grid.Col span={6}>
                    <Product />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Product />
                </Grid.Col>
            </Grid>
        </Flex>
    )
}

export default ProductList