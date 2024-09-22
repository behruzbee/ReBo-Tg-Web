import { Button, Card, Image, Text } from "@mantine/core"

import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom"

const Product = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/product/1')
    }

    return (
        <Card className={styles.card} onClick={handleClick} shadow="sm" withBorder p={5}>
            <Card.Section className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="Norway"
                />
            </Card.Section>

            <Text className={styles.text} size="sm" c="dimmed" fw={500} >
                Samsung A15 128gb / 8gb
            </Text>

            <Button className={styles.button} color="violet" fullWidth size="compact-sm" radius="sm">
                22 000 so'm
            </Button>
        </Card>
    )
}

export default Product