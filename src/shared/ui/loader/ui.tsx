import { Flex, Loader as MLoader } from '@mantine/core'

const Loader = () => {
    return (
        <Flex justify='center' mt='20px'>
            <MLoader size={30} />;
        </Flex>
    )
}

export default Loader