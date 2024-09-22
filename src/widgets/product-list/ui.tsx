import { Product } from '~entities/product'

import styles from './styles.module.scss'

const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Telefonlar</h3>

            <div className={styles['product-list']}>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductList