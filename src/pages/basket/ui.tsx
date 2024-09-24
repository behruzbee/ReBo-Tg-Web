import { Button, Grid, Image, Text } from "@mantine/core"

import { useBasketStore } from "~shared/store"

import styles from './styles.module.scss'
import { useState } from "react"

const BasketPage = () => {
    const selectedProducts = useBasketStore(({ products }) => products)
    const [count, setCount] = useState<number>(selectedProducts.length)

    function handleInput(e) {
        const value = e.target.value
        if (value > 99) {
            return setCount(99)
        }
        else if (value < 1) {
            return setCount(1)
        }
        setCount(value)
    }

    function handleRemoveButton() {
        if (count == 1) {
            return null
        }

        return setCount(count - 1)
    }

    function handleAddButton() {
        if (count == 99) {
            return null
        }

        return setCount(count + 1)
    }

    return (
        <Grid mt={10} p='0 5px'>
            {selectedProducts.map(product => (
                <Grid.Col key={product.id} span={12}>
                    <div className={styles.wrapper}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.image}>
                                <Image src={product.imageUrl} />
                            </div>
                            <Text size="sm">{product.name} <Text c='green' w='max-content' fw={500}>{product.price}</Text></Text>
                        </div>
                        <div className={styles.buttonGroup}>
                            <Button onClick={handleRemoveButton} variant="outline" color="red" size="compact-sm" className={styles.buttonRemove}>-</Button>
                            <input style={{ padding: count <= 9 ? '0 8px' : '0 3px' }} value={count} onChange={handleInput} className={styles.input} />
                            <Button onClick={handleAddButton} color="green" size="compact-sm" className={styles.buttonAdd}>+</Button>
                        </div>
                    </div>
                </Grid.Col>
            ))}
        </Grid >
    )
}

export default BasketPage


