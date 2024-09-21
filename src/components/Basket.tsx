import { Flex, Title } from '@mantine/core'
import SelectedProduct from './SelectedProduct'

const Basket = () => {
    return (
        <Flex direction='column'>
            <Title>
                Korzinka
            </Title>
            <Flex mt='20px' direction='column' rowGap='8px'>
                <SelectedProduct />
                <SelectedProduct />
                <SelectedProduct />
                <SelectedProduct />
                <SelectedProduct />
            </Flex>
        </Flex>
    )
}

export default Basket