import { Button, Grid, Image, Text } from "@mantine/core"

import { useBasketStore } from "~shared/store"
import { Loader } from "~shared/ui/loader"

import styles from './styles.module.scss'

const BasketPage = () => {
    const selectedProducts = useBasketStore(({ products }) => products)
    const addProduct = useBasketStore(({ addProduct }) => addProduct)
    const removeProduct = useBasketStore(({ removeProduct }) => removeProduct)

    function handleInput(e: React.ChangeEvent<HTMLInputElement>, productId: string) {
        const value = Number(e.target.value)
        const product = selectedProducts.find(item => item.id === productId)

        if(!product){
            return
        }

        if (value > 99) {
            return addProduct({ ...product, count: 99 })
        }
        else if (value < 1) {
            return addProduct({ ...product, count: 1 })
        }
        addProduct({ ...product, count: value })
    }

    function handleRemoveButton(productId: string) {
        const product = selectedProducts.find(item => item.id === productId)

        if (!product) {
            return null
        }

        if (product.count === 1) {
            return removeProduct(productId)
        }

        return addProduct({ ...product, count: product.count - 1 })
    }

    function handleAddButton(productId: string) {
        const product = selectedProducts.find(item => item.id === productId)

        if (!product || product.count == 99) {
            return null
        }

        return addProduct({ ...product, count: product.count + 1 })
    }

    if (!selectedProducts) {
        return <Loader />
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
                            <Text size="sm">{product.name} <Text c='green' w='max-content' fw={500}>{String(product.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm x {product.count}</Text></Text>
                        </div>
                        <div className={styles.buttonGroup}>
                            <Button onClick={() => handleRemoveButton(product.id)} variant="outline" color="red" size="compact-sm" className={styles.buttonRemove}>-</Button>
                            <input type="number" style={{ padding: product.count <= 9 ? '0 8px' : '0 3px' }} value={product.count} onChange={(e) => handleInput(e, product.id)} className={styles.input} />
                            <Button onClick={() => handleAddButton(product.id)} color="green" size="compact-sm" className={styles.buttonAdd}>+</Button>
                        </div>
                    </div>
                </Grid.Col>
            ))}
        </Grid >
    )
}

export default BasketPage


