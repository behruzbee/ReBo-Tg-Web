import { Button, Card, Image, Text } from "@mantine/core"

import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom"

interface IProductProps {
    id: string,
    imageUrl: string,
    name: string,
    price: number
}

const Product = ({ id, imageUrl, name, price }: IProductProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${id}`)
    }

    return (
        <Card className={styles.card} onClick={handleClick} shadow="sm" withBorder p={5} h='100%'>
            <Card.Section className={styles.imageWrapper} p={5}>
                <Image
                    className={styles.image}
                    src={imageUrl}
                    alt={name}
                    fit="contain"
                />
            </Card.Section>

            <Text className={styles.text} size="sm" c="dimmed" fw={500} >
                {name}
            </Text>

            <Button className={styles.button} color="violet" fullWidth size="compact-sm" radius="sm">
                {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm
            </Button>
        </Card>
    )
}

export default Product