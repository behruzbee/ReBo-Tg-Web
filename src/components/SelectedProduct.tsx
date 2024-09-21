import { Button, Flex, Image, Text } from '@mantine/core'
import { useState } from 'react'

const SelectedProduct = () => {
    const [count, setCount] = useState(4)

    return (
        <Flex justify='space-between' style={{ borderRadius: '12px' }} bg='#4dabf7' w='100%' align='center'>
            <Image
                height='50px'
                radius="md"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />

            <Flex direction='column' h='100%' justify='center'>
                <Text c='#fff' fw={500} style={{ fontSize: '12px' }}>SAMSUNG A25 128GB/8GB </Text>
                <Text c='#fff' fw={500} style={{ fontSize: '12px' }}>{count} x 20.000 so'm</Text>
            </Flex>

            <Flex mr='20px' align='center' columnGap='10px'>
                <Button color='red' size='compact-sm' onClick={() => setCount(prev => prev - 1)}>-</Button>
                <Text c='#fff' fw={500}>{count}</Text>
                <Button color='green' size='compact-sm' onClick={() => setCount(prev => prev + 1)}>+</Button>
            </Flex>
        </Flex>
    )
}

export default SelectedProduct